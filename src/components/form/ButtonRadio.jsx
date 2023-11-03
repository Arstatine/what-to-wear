const ButtonRadio = ({ gender, setGender }) => {
  return (
    <div className='gender-radio'>
      <div
        style={{
          fontSize: gender ? '1.25rem' : '1rem',
          transition: 'all 0.1s',
          fontWeight: gender ? 900 : 500,
          padding: '10px',
        }}
      >
        Male
      </div>
      <div>
        <input
          type='checkbox'
          id='switch'
          className='input'
          checked={gender}
          onChange={(e) => setGender(e.target.checked)}
        />
        <label htmlFor='switch'>Toggle</label>
      </div>
      <div
        style={{
          fontSize: !gender ? '1.25rem' : '1rem',
          transition: 'all 0.1s',
          fontWeight: !gender ? 900 : 500,
          padding: '10px',
        }}
      >
        Female
      </div>
    </div>
  );
};

export default ButtonRadio;
