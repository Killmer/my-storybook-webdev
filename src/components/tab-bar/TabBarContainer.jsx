/* eslint-disable */
import React, { Fragment } from 'react';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';

import Image from '../image/Image';
import Chip from '../chip/Chip';
import Button from '../button/Button';
import ButtonGroup from '../button-group/ButtonGroup';

const TabBarContainer = () => (
  <Fragment>
    <h2><span>1. Horizontal Tabbar:</span></h2>
    <TabBar>
      <TabBarItem label="Simple text">
      <p>React - a JavaScript library for building user interfaces</p>
      </TabBarItem>
      <TabBarItem label="Image">
        <Image
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          width={150}
          height={150}
        />
      </TabBarItem>
      <TabBarItem label="Component">
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </TabBarItem>
      <TabBarItem label="Just empty tab" />
    </TabBar>

    <h2><span>2. Vertical Tabbar:</span></h2>
    <TabBar vertical>
      <TabBarItem label="Simple text">
        <p>React - a JavaScript library for building user interfaces</p>
      </TabBarItem>
      <TabBarItem label="Image">
        <Image
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          width={150}
          height={150}
        />
      </TabBarItem>
      <TabBarItem label="Component">
    <Chip
      text="React"
      withImage
      imageSrc="https://cdn.worldvectorlogo.com/logos/react-1.svg"
      imgAlt="react"
      onChipClick={() => { console.log('clicked on a chip body'); }}
    />
    <Chip
      text="Angular"
      withImage
      imageSrc="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748"
      imgAlt="angular"
      onCloseClick={() => { console.log('clicked on a close icon'); }}
      withClose
    />
    <Chip
      text="Vue"
      withImage
      imageSrc="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
      imgAlt="vue"
      onCloseClick={() => { console.log('clicked on a close icon'); }}
      onChipClick={() => { console.log('clicked on a chip body'); }}
      withClose
    />
      </TabBarItem>
    </TabBar>

  </Fragment>
);

export default TabBarContainer;
/* eslint-enable */
