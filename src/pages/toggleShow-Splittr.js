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


export default function ToggleShowSplittr() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };


  // test
  if (isShow) {

    return (
    <>
        <p>A full stack web application built with React / Node / Express / PostGreSQL to provide students with a platform to split bills and send / request money payments using Stripe API.</p>
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