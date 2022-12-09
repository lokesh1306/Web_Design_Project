import React from "react";
import Layout from "../layout/index";
import './About.css';


const AboutComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      
        <div className="about-section">
  <h1>About Us Page</h1>
  <p>We help you design your holidays</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>
<h2>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
          <img src={require('./image2.jpeg')} alt="Mike" />
      <div className="container">
      <br />
        <h2>Joseph Nathan</h2>
        <p className="title">CEO & Founder</p>
        <p>Having previously worked on various travel companies, Joseph decided to use his knowledge in the domain to make a website to make the process simpler and cheaper.</p>
        <p></p>
        <p align="center"><button className="button"><a href="mailto:email@example.com">Contact</a></button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
    <img src={require('./image1.jpeg')} alt="Mike" />
      <div className="container">
        <br />
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p></p>
        <p align="center"><button className="button"><a href="mailto:email@example.com">Contact</a></button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={require('./image3.jpeg')} alt="Mike" />
      <div className="container">
      <br />
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p></p>
        <p align="center"><button className="button"><a href="mailto:email@example.com">Contact</a></button></p>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

const About = (props) => {
  return <Layout children={<AboutComponent />} />;
};

export default About;