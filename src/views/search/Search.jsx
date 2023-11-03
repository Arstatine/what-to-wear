import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from '../../lib/axiosConfig';
import { API_KEY } from '../../constant';
import calculateLevel from '../../lib/calculateLevel';
import FootwearSlider from '../../components/FootwearSlider';
import BottomSlider from '../../components/BottomSlider';
import TopSlider from '../../components/TopSlider';
import OuterSlider from '../../components/OuterSlider';

const Search = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [temperature, setTemperature] = useState('');
  const [data, setData] = useState('');
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(true);

  const city = data?.location?.name == '' ? '' : data?.location?.name + ', ';
  const province =
    data?.location?.region == '' ? '' : data?.location?.region + ', ';
  const country = data?.location?.country == '' ? '' : data?.location?.country;

  const handleChangeAddress = async () => {
    try {
      if (text == '') return;

      setSearchParams({ q: text });

      const response = await axios.get(
        `/v1/current.json?q=${
          searchParams?.get('q') === '' ? 'auto:ip' : searchParams?.get('q')
        }`,
        {
          params: { key: API_KEY },
        }
      );

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
        const response = await axios.get(
          `/v1/current.json?q=${
            searchParams?.get('q') === '' ? 'auto:ip' : searchParams?.get('q')
          }`,
          {
            params: { key: API_KEY },
          }
        );

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

  const handleKeyPress = (e) => {
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
          W2W
        </div>
        <div className='left-header'>
          <div>
            {focus ? 'city, state & country' : 'set your current location'}
          </div>
          <input
            onFocus={() => {
              setFocus(true);
              setText('');
            }}
            ref={inputRef}
            onBlur={() => setFocus(false)}
            className='small-input'
            type='text'
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            value={
              focus
                ? text
                : data?.location == null
                ? ''
                : city + province + country
            }
          />
          <div>
            <button
              className='search-title-small'
              onClick={handleChangeAddress}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            fontSize: gender ? '1.5rem' : '1.25rem',
            transition: 'all 0.1s',
            fontWeight: gender ? 900 : 600,
            padding: '10px',
          }}
        >
          Male
        </div>
        <div>
          <input
            type='checkbox'
            id='switch'
            className='input'
            checked={gender}
            onChange={(e) => setGender(e.target.checked)}
          />
          <label htmlFor='switch'>Toggle</label>
        </div>
        <div
          style={{
            fontSize: !gender ? '1.75rem' : '1.25rem',
            transition: 'all 0.1s',
            fontWeight: !gender ? 900 : 600,
            padding: '10px',
          }}
        >
          Female
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
        <div
          className='title-wear'
          style={{
            textAlign: 'center',
            padding: '20px',
            fontSize: '1.5rem',
          }}
        >
          O<br />U<br />T<br />E<br />R<br />W<br />E<br />A<br />R
        </div>
        <OuterSlider temperature={temperature} gender={gender ? 2 : 1} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
        <div
          className='title-wear'
          style={{
            textAlign: 'center',
            padding: '20px',
            fontSize: '1.5rem',
          }}
        >
          T<br />O<br />P
        </div>
        <TopSlider temperature={temperature} gender={gender ? 2 : 1} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
        <div
          className='title-wear'
          style={{
            textAlign: 'center',
            padding: '20px',
            fontSize: '1.5rem',
          }}
        >
          B<br />O<br />T<br />T<br />O<br />M
        </div>
        <BottomSlider temperature={temperature} gender={gender ? 2 : 1} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
        <div
          className='title-wear'
          style={{
            textAlign: 'center',
            padding: '20px',
            fontSize: '1.5rem',
          }}
        >
          F<br />O<br />O<br />T<br />W<br />E<br />A<br />R
        </div>
        <FootwearSlider temperature={temperature} gender={gender ? 2 : 1} />
      </div>

      <div>Temperature: {data?.current?.temp_c}</div>
      <div>Temperature: {temperature}</div>
      <div>{data?.current?.condition?.text}</div>
    </div>
  );
};

export default Search;
