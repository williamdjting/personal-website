import React from 'react';
import { useState } from 'react';
import Counter from './counter';

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  marginBottom: 30,
}


export default function ToggleShowGroupStock() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };


  // test
  if (isShow) {

    return (
    <>
        <p>A full stack web application built with React / Node / Express / MongoDB to allow stock traders to create collaborative personal and group stock watchlists using external Finance API.</p>
      {/* <Counter/> */}
      <button onClick={handleClick}>Show More</button>
    </>
  );

  } else {
    return (
    <>
      <button onClick={handleClick}>Show More</button>
    </>
    )
  }

};