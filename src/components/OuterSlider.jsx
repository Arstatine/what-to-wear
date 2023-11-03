import Carousel from 'react-material-ui-carousel';
import { IMAGES } from '../constant';

const OuterSlider = ({ temperature, gender }) => {
  const filteredOuterwear = IMAGES.outerwear
    .filter((outer) => temperature >= outer.min && temperature <= outer.max)
    .filter((outer) => outer.gender != gender);

  return (
    <div
      style={{
        background: 'rgba(0,0,0,.1)',
        padding: '20px',
        borderRadius: '10px',
        flexGrow: 1,
      }}
    >
      {filteredOuterwear.length === 0 ? (
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
          {filteredOuterwear.map((outer) => {
            return (
              <div
                key={outer.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column-reverse',
                }}
              >
                <img src={outer.link} alt={outer.name} />
                <div style={{ color: 'black', fontWeight: 600 }}>
                  {outer.name}
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default OuterSlider;
