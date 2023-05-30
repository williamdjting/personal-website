import React from 'react';
import { useState } from 'react';

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  marginBottom: 30,
}


export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (

    <button 
    onClick={handleClick}
    style={linkStyle}
    >
      Press me! {counter} times!
    </button>

    
  );
}