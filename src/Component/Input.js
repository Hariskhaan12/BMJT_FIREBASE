import React from 'react'

function Input({ name, typ, plc, func,InputStyle,disabled,val }) {
  return (
    <div>
      <input
      value={val}
        style={InputStyle}
        type={typ}
        name={name}
        placeholder={plc}
        disabled={disabled}
        onChange={(e) => func(e)}
      ></input>
    </div>
  );
}

export default Input