import React, { useState } from 'react';

const IncButton = () => {
  const [value, setValue] = useState(0);

  const Inc = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <h1 style={{ fontSize: '5rem' }}>Value: {value}</h1>
      <button
        style={{
          background: '#616161',
          padding: '2%',
          borderRadius: '2rem',
        }}
        onClick={Inc}
      >
        Increment
      </button>
    </div>
  );
};

export default IncButton;
