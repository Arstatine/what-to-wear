import Carousel from 'react-material-ui-carousel';
import { IMAGES } from '../../constant';

const BottomSlider = ({ temperature, gender }) => {
  const filteredBottom = IMAGES.bottom
    .filter((bot) => temperature >= bot.min && temperature <= bot.max)
    .filter((bot) => bot.gender != gender);

  return (
    <div className='card-wrapper'>
      <div className='title-wear'>
        B<br />O<br />T<br />T<br />O<br />M
      </div>
      <div className='inside-wrapper'>
        {filteredBottom.length === 0 ? (
          <div className='card-container'>No Bottom Available</div>
        ) : (
          <Carousel
            animation='slide'
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            style={{ height: '100%' }}
          >
            {filteredBottom.map((bot) => {
              return (
                <div key={bot.id} className='card'>
                  <img src={bot.link} alt={bot.name} />
                  <div
                    style={{
                      color: '#292929',
                      fontWeight: 600,
                      padding: '20px',
                    }}
                  >
                    {bot.name}
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

export default BottomSlider;
