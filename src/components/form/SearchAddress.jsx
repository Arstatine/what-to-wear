import { useState } from 'react';

const SearchAddress = ({
  inputRef,
  handleSearchKeyPress,
  country,
  address,
  text,
  setText,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <input
      onFocus={() => {
        setFocus(true);
        setText('');
      }}
      ref={inputRef}
      onBlur={() => setFocus(false)}
      className='small-input'
      type='text'
      onChange={(e) => setText(e.target.value)}
      onKeyPress={handleSearchKeyPress}
      value={focus ? text : country == undefined ? 'Loading...' : address}
    />
  );
};

export default SearchAddress;
