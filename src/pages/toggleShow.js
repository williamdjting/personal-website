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


export default function ToggleShow() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };


  // test
  if (isShow) {

    return (
    <>
        <p>LANGUAGES: Javascript, HTML, CSS, ReactJS, NodeJS, ExpressJS, SQL, C/C++, JSX, JSON, R</p>
        
        <p>APPLICATIONS: REST API, PostGreSQL, MongoDB, GatsbyJS, GraphQL, Docker, Mocha/Chai, Ubuntu, Figma</p>
      {/* <Counter/> */}
      <button onClick={handleClick}>Toggle</button>
    </>
  );

  } else {
    return (
    <>
      <button onClick={handleClick}>Toggle</button>
    </>
    )
  }

};