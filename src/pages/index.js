import * as React from "react";
import Counter from "./counter";
import ToggleShow from "./toggleShow";
import ToggleShowFoodTree from "./toggleShow-FoodTree";
import ToggleShowGroupStock from "./toggleShow-GroupStock";
import ToggleShowSplittr from "./toggleShow-Splittr";



// import { StaticImage } from "gatsby-plugin-image";
// import appleImg from "../images/apple-test.jpeg";
// import orangeImg from "../images/orange-test.jpeg";

// const imgArray = ["apple-test", "orange-test"];

// const images = imgArray.map( anImg => {
//     return < img key={anImg} src={`../images/${anImg}.jpeg`} alt="anImg" />
//   });

const descriptionArray = [ToggleShowFoodTree, ToggleShowGroupStock, ToggleShowSplittr ]


const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 36,
}

const docLinkStyle2 = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 0,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "My Github",
  url: "https://github.com/williamdjting",
  
  color: "#8954A8",
}

const projectTitle = {
  text: "My Project",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "FoodTree: LinkTree for Food Ordering",
    url: "https://github.com/williamdjting/FoodTree",
    description:
      "A full stack web application built with React / Node / Express / PostGreSQL to provide small homes businesses with a platform to display their menu and accept online orders",
    color: "#BC027F",
    // path: "../images/apple-test.jpeg",
  },
  {
    text: "Splittr: 276 Course Project",
    url: "https://github.com/williamdjting/276-finalproject",
    description:
      "A full stack web application built with React / Node / Express / PostGreSQL to provide students with a platform to split bills and send / request money payments using Stripe API",
    color: "#E95800",
    path: "appleImg",
  },
  {
    text: "GroupStock: 372 Course Project",
    url: "https://github.com/williamdjting/372-finalproject",
    description:
      "A full stack web application built with React / Node / Express / MongoDB to allow stock traders to create collaborative personal and group stock watchlists using external Finance API",
    color: "#1099A8",
    path: "../images/apple-test.jpeg",
  },

]

const IndexPage = () => {
  // const images = imgArray.map( anImg => {
  //   return < img key={anImg} src={require(`../images/${anImg}.jpeg`)} alt="anImg" />
  // });

  // const images = imgArray.map( anImg => {
  //   return < img key={anImg} src={`../images/${anImg}.jpeg`} alt="anImg" />
  // });

  return (
    
    <main style={pageStyles}>
      {/* <div>{images}</div>  */}
      
      <ToggleShow/>
      <ToggleShowFoodTree/>
      <ToggleShowGroupStock />
      <ToggleShowSplittr/>

      <h1 style={headingStyles}>
        William Ting
        <br />
        <span style={headingAccentStyles}>— Full Stack Web Developer</span>
      </h1>
      
      <p style={docLinkStyle}>
        {/* Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time. 😎 */}
        <p>LANGUAGES: Javascript, HTML, CSS, ReactJS, NodeJS, ExpressJS, SQL, C/C++, JSX, JSON, R</p>
        
        <p>APPLICATIONS: REST API, PostGreSQL, MongoDB, GatsbyJS, GraphQL, Docker, Mocha/Chai, Ubuntu, Figma</p>
        
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {docLink.text}
          </a>
        </li>

        <li style={docLinkStyle2} >
          <p>My Projects</p>
        </li>
        
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {/* <img src={link.path} alt="apple" /> */}
                
                {link.text}
                
              </a>
              
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>William's Website</title>
