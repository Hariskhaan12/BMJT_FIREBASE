import React from 'react'

function Button({ btnfunc, text, btnStyle }) {
  return (
    <div>
      <button style={btnStyle} onClick={btnfunc}>
        {text}
      </button>
    </div>
  );
}

export default Button