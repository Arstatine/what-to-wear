const SecondHeaderRight = ({ data }) => {
  return (
    <div className='second-header-right'>
      <div style={{ textAlign: 'right' }}>
        <img src={data?.condition?.icon} alt={data?.condition?.text} />
        <div style={{ marginBottom: '10px', textTransform: 'capitalize' }}>
          {data?.condition?.text}
        </div>
        <div
          style={{
            marginBottom: '10px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          {data?.is_day == 1 ? 'Morning' : 'Evening'}
        </div>
      </div>
      <div className='celsius'>
        <div className='main-header-sm'>{data?.temp_c} °C</div>
        <div className='main-header-sm'>{data?.temp_f} °F</div>
      </div>
    </div>
  );
};

export default SecondHeaderRight;
