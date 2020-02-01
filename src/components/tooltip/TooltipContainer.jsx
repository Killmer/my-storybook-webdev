/* eslint-disable */
import React, { Fragment } from 'react';
import Tooltip from './Tooltip';
import Button from '../button/Button';

const TooltipContainer = () => (
  <Fragment>
    <h2><span>1. Simple Right tooltip with big description:</span></h2>
    <Tooltip
      position="right"
      content="Learning React is FUN!"
    >
      Hover on me!
    </Tooltip>

    <h2><span>2. Left tooltip with outer styles:</span></h2>
    <Tooltip
      position="left"
      content="Good job!!"
      style={{ width: '120px' }}
    >
      Catch me!
    </Tooltip>

    <h2><span>3. Bottom tooltip of custom component:</span></h2>
    <Tooltip
      position="bottom"
      content="You can't escape! PATTERN IS A PATTERN!!!"
      style={{
        background: '#60dafb',
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
      }}
    >
      <Button>Exit</Button>
    </Tooltip>

    <h2><span>4. Top tooltip of text element:</span></h2>
    <p>Find a TOOLTIP inside
    <Tooltip
      position="top"
      content="You found it!"
    >
      <span style={{ textDecoration: 'underline', padding: '0 4px' }}>this</span>
    </Tooltip>
    sentence</p>
  </Fragment>
);

export default TooltipContainer;
/* eslint-enable */
