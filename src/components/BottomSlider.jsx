import Carousel from 'react-material-ui-carousel';
import { IMAGES } from '../constant';

const BottomSlider = ({ temperature, gender }) => {
  const filteredBottom = IMAGES.bottom
    .filter((bot) => temperature >= bot.min && temperature <= bot.max)
    .filter((bot) => bot.gender != gender);

  return (
    <div
      style={{
        background: 'rgba(0,0,0,.1)',
        padding: '20px',
        borderRadius: '10px',
        flexGrow: 1,
      }}
    >
      {filteredBottom.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50px',
          }}
        >
          No Bottom Available
        </div>
      ) : (
        <Carousel
          animation='slide'
          autoPlay={false}
          navButtonsAlwaysVisible={true}
        >
          {filteredBottom.map((bot) => {
            return (
              <div
                key={bot.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column-reverse',
                }}
              >
                <img src={bot.link} alt={bot.name} />
                <div style={{ color: 'black', fontWeight: 600 }}>
                  {bot.name}
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default BottomSlider;
