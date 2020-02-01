/* eslint-disable */
import React, { Fragment } from 'react';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import Badge from '../badge/Badge';
import Button from '../button/Button';

const ListGroupContainer = () => (
  <Fragment>

    <h2><span>1. Base Group list:</span></h2>
    <ListGroup>
      <ListGroupItem>Bonobo</ListGroupItem>
      <ListGroupItem>Coldplay</ListGroupItem>
      <ListGroupItem>Foals</ListGroupItem>
      <ListGroupItem>Tame Impala</ListGroupItem>
    </ListGroup>

    <h2><span>2. Group list with active and disabled elements:</span></h2>
    <ListGroup>
      <ListGroupItem active>Active item</ListGroupItem>
      <ListGroupItem>Default item</ListGroupItem>
      <ListGroupItem disabled>Disabled item</ListGroupItem>
      <ListGroupItem>Default item</ListGroupItem>
    </ListGroup>

    <h2><span>3. Group list with custom components:</span></h2>
    <ListGroup>
      <ListGroupItem>
        Badge with number
        <Badge value={2} inline />
      </ListGroupItem>
      <ListGroupItem>
        Badge with text
        <Badge value="new" inline />
      </ListGroupItem>
      <ListGroupItem>
        Warning Badge
        <Badge value={10} warning inline />
      </ListGroupItem>
      <ListGroupItem>
        Badge with button
        <Button>Update</Button>
      </ListGroupItem>
    </ListGroup>

    <h2><span>4. Group list links:</span></h2>
    <ListGroup>
      <ListGroupItem href="/" active>Active link</ListGroupItem>
      <ListGroupItem href="/">Default link</ListGroupItem>
      <ListGroupItem href="/">Default link</ListGroupItem>
      <ListGroupItem href="/">Default link</ListGroupItem>
    </ListGroup>

  </Fragment>
);

export default ListGroupContainer;
/* eslint-enable */
