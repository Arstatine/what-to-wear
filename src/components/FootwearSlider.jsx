import Carousel from 'react-material-ui-carousel';
import { IMAGES } from '../constant';

const FootwearSlider = ({ temperature, gender }) => {
  const filteredFootwear = IMAGES.footwear
    .filter((foot) => temperature >= foot?.min && temperature <= foot?.max)
    .filter((foot) => foot?.gender != gender);

  return (
    <div
      style={{
        background: 'rgba(0,0,0,.1)',
        padding: '20px',
        borderRadius: '10px',
        flexGrow: 1,
      }}
    >
      {filteredFootwear.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50px',
          }}
        >
          No Footwear Available
        </div>
      ) : (
        <Carousel
          animation='slide'
          autoPlay={false}
          navButtonsAlwaysVisible={true}
        >
          {filteredFootwear.map((foot) => {
            return (
              <div
                key={foot.id}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column-reverse',
                }}
              >
                <img src={foot.link} alt={foot.name} />
                <div style={{ color: 'black', fontWeight: 600 }}>
                  {foot.name}
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default FootwearSlider;
