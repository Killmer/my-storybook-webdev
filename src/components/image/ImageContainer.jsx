/* eslint-disable */
import React, { Fragment } from 'react';
import Image from './Image';

const ImageContainer = () => (
  <Fragment>

    <h2><span>1. Base image placeholder:</span></h2>
    <Image />

    <h2><span>2. Image with src and alt attribute:</span></h2>
    <Image
      src="https://www.academind.com/static/ecea9a8d89b8f781703b4d162b15e6db/6ff5e/react-logo.png"
      alt="react-logo"
    />

    <h2><span>3. Image placeholder with 50x50, 100x100 and 150x150 sizes:</span></h2>
    <Image width={50} height={50} style={{ marginRight: '20px' }} />
    <Image width={100} height={100} style={{ marginRight: '20px' }} />
    <Image width={150} height={150} />

    <h2><span>4. Circle image with 150x150 size:</span></h2>
    <Image
      src="https://blog.codewithdan.com/wp-content/uploads/2017/12/react-logo.png"
      width={150}
      height={150}
      circle
    />

  </Fragment>
);

export default ImageContainer;
/* eslint-enable */
