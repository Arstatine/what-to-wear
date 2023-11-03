import Carousel from 'react-material-ui-carousel';
import { IMAGES } from '../constant';

const TopSlider = ({ temperature, gender }) => {
  const filteredTop = IMAGES.top
    .filter((t) => temperature >= t.min && temperature <= t.max)
    .filter((t) => t.gender != gender);

  return (
    <div
      style={{
        background: 'rgba(0,0,0,.1)',
        padding: '20px',
        borderRadius: '10px',
        flexGrow: 1,
      }}
    >
      {filteredTop.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50px',
          }}
        >
          No Outerwear Available
        </div>
      ) : (
        <Carousel
          animation='slide'
          autoPlay={false}
          navButtonsAlwaysVisible={true}
        >
          {filteredTop.map((t) => {
            return (
              <div
                key={t.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column-reverse',
                }}
              >
                <img src={t.link} alt={t.name} />
                <div style={{ color: 'black', fontWeight: 600 }}>{t.name}</div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default TopSlider;
