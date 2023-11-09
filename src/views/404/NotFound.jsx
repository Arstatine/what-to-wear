import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#fbfbfb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          fontSize: '25vw',
          fontWeight: 900,
        }}
      >
        404
      </div>
      <div style={{ fontSize: '5vw', fontWeight: 500 }}>PAGE NOT FOUND</div>
      <div
        style={{
          background: '#e1515d',
          color: '#fbfbfb',
          padding: '20px 50px',
          marginTop: '50px',
          cursor: 'pointer',
          fontWeight: 900,
          letterSpacing: 3,
          borderRadius: '8px',
        }}
        onClick={() => navigate('/')}
      >
        I WANNA GO HOME
      </div>
    </div>
  );
};

export default NotFound;
