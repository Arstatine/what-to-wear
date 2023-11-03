import { useNavigate } from 'react-router-dom';
// import axios from '../../lib/axiosConfig';
import { useState } from 'react';
// import { API_KEY } from '../../constant';
import { CiLocationOn } from 'react-icons/ci';
import { BiSearchAlt2 } from 'react-icons/bi';
import Footer from '../../components/Footer';

const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [icon, setIcon] = useState('Search');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (text !== '') {
        navigate(`/search?q=${text}`);
      }
    }
  };

  const handleSearch = () => {
    if (text !== '') {
      navigate(`/search?q=${text}`);
    }
  };

  return (
    <div className='container'>
      <div className='main-header'>What 2 Wear</div>
      <div className='search-local'>
        <div className='icon'>
          <CiLocationOn />
        </div>

        <input
          type='text'
          placeholder='City, State & Country'
          onKeyPress={handleKeyPress}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          onMouseEnter={() => setIcon('Sheesh...')}
          onMouseLeave={() => setIcon('Search')}
        >
          <div className='search-title'>{icon}</div>
          <div className='search-icon'>
            <BiSearchAlt2 />
          </div>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
