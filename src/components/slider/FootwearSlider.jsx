import Carousel from 'react-material-ui-carousel';
import { IMAGES } from '../../constant';

const FootwearSlider = ({ temperature, gender }) => {
  const filteredFootwear = IMAGES.footwear
    .filter((foot) => temperature >= foot?.min && temperature <= foot?.max)
    .filter((foot) => foot?.gender != gender);

  return (
    <div className='card-wrapper'>
      <div className='title-wear'>
        F<br />O<br />O<br />T<br />W<br />E<br />A<br />R
      </div>
      <div className='inside-wrapper'>
        {filteredFootwear.length === 0 ? (
          <div className='card-container'>No Footwear Available</div>
        ) : (
          <Carousel
            animation='slide'
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            style={{ height: '100%' }}
          >
            {filteredFootwear.map((foot) => {
              return (
                <div key={foot.id} className='card'>
                  <img src={foot.link} alt={foot.name} />
                  <div
                    style={{
                      color: '#292929',
                      fontWeight: 600,
                      padding: '20px',
                    }}
                  >
                    {foot.name}
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

export default FootwearSlider;
