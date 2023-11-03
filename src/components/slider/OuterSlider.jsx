import Carousel from 'react-material-ui-carousel';
import { IMAGES } from '../../constant';

const OuterSlider = ({ temperature, gender }) => {
  const filteredOuterwear = IMAGES.outerwear
    .filter((outer) => temperature >= outer.min && temperature <= outer.max)
    .filter((outer) => outer.gender != gender);

  return (
    <div className='card-wrapper'>
      <div className='title-wear'>
        O<br />U<br />T<br />E<br />R<br />W<br />E<br />A<br />R
      </div>
      <div className='inside-wrapper'>
        {filteredOuterwear.length === 0 ? (
          <div className='card-container'>No Outerwear Available</div>
        ) : (
          <Carousel
            animation='slide'
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            style={{ height: 'auto' }}
          >
            {filteredOuterwear.map((outer) => {
              return (
                <div key={outer.id} className='card'>
                  <img
                    src={outer.link}
                    alt={outer.name}
                    style={{ height: '100%', width: 'auto' }}
                  />
                  <div
                    style={{
                      color: '#292929',
                      fontWeight: 600,
                      padding: '20px',
                    }}
                  >
                    {outer.name}
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

export default OuterSlider;
