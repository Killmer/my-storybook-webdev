import React, { Fragment } from 'react';
import './home.css';


const Home = () => (
  <Fragment>
    <h1 className="title"><span>Collection of React Components</span></h1>
    <div className="imgWrapper">
      <img style={{ borderRadius: '50%' }} width="570px" height="510px" src="https://cdn-images-1.medium.com/max/2000/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg" alt="react" />
    </div>
  </Fragment>
);

export default Home;
