/* eslint-disable */
import React, { Fragment } from 'react';
import Button from './Button';

const ButtonContainer = () => (
  <Fragment>

    <h2><span>1. Text and onClick function:</span></h2>
    <Button  className='rounded-corners' onClick={() => { alert(`I'm working`); }}>Click on me!</Button>

    <h2><span>2. Disabled button:</span></h2>
    <Button className='rounded-corners' onClick={() => { alert(`I'm working???`); }} disabled >Can't click on me</Button>

    <h2><span>3. Active button:</span></h2>
    <Button className='rounded-corners' active>I'm active</Button>

    <h2><span>4. Supporting data, type and etc. attributes:</span></h2>
    <Button data-name="button">Data-name</Button>
    <Button type="submit">Submit</Button>

    <h2><span>5. Button link</span></h2>
    <Button href="test">Link</Button>
    <Button href="test" disabled>Link</Button>

  </Fragment>
);

export default ButtonContainer;
/* eslint-enable */
