import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from '../../lib/axiosConfig';
import { API_KEY } from '../../constant';
import calculateLevel from '../../lib/calculateLevel';
import FootwearSlider from '../../components/slider/FootwearSlider';
import BottomSlider from '../../components/slider/BottomSlider';
import TopSlider from '../../components/slider/TopSlider';
import OuterSlider from '../../components/slider/OuterSlider';
import SearchAddress from '../../components/form/SearchAddress';
import ButtonRadio from '../../components/form/ButtonRadio';
import SecondHeaderRight from '../../components/SecondHeaderRight';
import LOGO from '../../assets/main/logo.png';
import Footer from '../../components/Footer';

const Search = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [temperature, setTemperature] = useState('');
  const [data, setData] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(true);

  const city = data?.location?.name == '' ? '' : data?.location?.name + ', ';
  const province =
    data?.location?.region == '' ? '' : data?.location?.region + ', ';
  const country = data?.location?.country == '' ? '' : data?.location?.country;
  const address = `${city}${province}${country}`;

  const handleAddressSearchButtonClick = async (e) => {
    try {
      e.preventDefault();
      if (text !== '') {
        setSearchParams({ q: text });
      }

      setTemperature('');

      let current = searchParams?.get('q') || 'auto:ip';
      const response = await axios.get(`/v1/current.json?q=${current}`, {
        params: { key: API_KEY },
      });

      if (response) {
        setTemperature(calculateLevel(response?.data?.current?.temp_c));
        return setData(response?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        let current = searchParams?.get('q') || 'auto:ip';
        setTemperature('');
        const response = await axios.get(`/v1/current.json?q=${current}`, {
          params: { key: API_KEY },
        });

        if (response) {
          setTemperature(calculateLevel(response?.data?.current?.temp_c));
          return setData(response?.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, [searchParams]);

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (text !== '') {
        inputRef.current.blur();
        setSearchParams({ q: text });
      }
    }
  };

  return (
    <div className='main-container'>
      <div className='wrapper'>
        <div
          className='main-header'
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <img src={LOGO} alt='' style={{ width: '200px' }} />
        </div>
        <div className='left-header'>
          <div>
            {focus ? 'city, state & country' : 'set your current location'}
          </div>
          <SearchAddress
            inputRef={inputRef}
            handleSearchKeyPress={handleSearchKeyPress}
            address={address}
            country={country}
            text={text}
            setText={setText}
          />
          <div>
            <button
              className='search-title-small'
              onClick={handleAddressSearchButtonClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='second-header'>
        <ButtonRadio gender={gender} setGender={setGender} />
        {data?.current && <SecondHeaderRight data={data?.current} />}
      </div>

      {temperature != '' && (
        <OuterSlider temperature={temperature} gender={gender ? 2 : 1} />
      )}

      {temperature != '' && (
        <TopSlider temperature={temperature} gender={gender ? 2 : 1} />
      )}

      {temperature != '' && (
        <BottomSlider temperature={temperature} gender={gender ? 2 : 1} />
      )}

      {temperature != '' && (
        <FootwearSlider temperature={temperature} gender={gender ? 2 : 1} />
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px 0',
        }}
      >
        <div
          style={{
            background: '#e1515d',
            color: '#fbfbfb',
            width: 'auto',
            padding: '20px 50px',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          onClick={handleAddressSearchButtonClick}
        >
          Quick Fix
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
