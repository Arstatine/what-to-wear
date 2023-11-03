import Carousel from 'react-material-ui-carousel';
import { IMAGES } from '../../constant';

const TopSlider = ({ temperature, gender }) => {
  const filteredTop = IMAGES.top
    .filter((t) => temperature >= t.min && temperature <= t.max)
    .filter((t) => t.gender != gender);

  return (
    <div className='card-wrapper'>
      <div className='title-wear'>
        T<br />O<br />P
      </div>
      <div className='inside-wrapper'>
        {filteredTop.length === 0 ? (
          <div className='card-container'>No Outerwear Available</div>
        ) : (
          <Carousel
            animation='slide'
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            style={{ height: 'auto' }}
          >
            {filteredTop.map((t) => {
              return (
                <div key={t.id} className='card'>
                  <img
                    src={t.link}
                    alt={t.name}
                    style={{ height: '100%', width: 'auto' }}
                  />
                  <div
                    style={{
                      color: '#292929',
                      fontWeight: 600,
                      padding: '20px',
                    }}
                  >
                    {t.name}
                  </div>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default TopSlider;
