import React, { Fragment } from 'react';
import Badge from './Badge';
import Button from '../button/Button';
import Icon from '../icon/Icon';

const BadgeContainer = () => (
  <Fragment>

    <h2><span>1. Badges with text:</span></h2>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="envelope" />
      <Badge value="new" />
    </Button>
    <Button className="rounded-corners">
      <Icon name="envelope" />
      <Badge circle value="new" />
    </Button>

    <h2><span>2. Badges with number:</span></h2>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="comment" />
      <Badge value={2} />
    </Button>
    <Button className="rounded-corners">
      <Icon name="comment-dots" />
      <Badge circle value={12} />
    </Button>

    <h2><span>3. Inline Badges:</span></h2>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="phone" />
      <Badge inline value={1} />
    </Button>
    <Button className="rounded-corners">
      <Icon name="phone" />
      <Badge inline value="1 missed" />
    </Button>

    <h2><span>4. Outer Badges:</span></h2>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="bell" />
      <Badge outer value={1} />
    </Button>
    <Button className="rounded-corners">
      <Icon name="wifi" />
      <Badge outer warning value={1} />
    </Button>

    <h2><span>5. Warning, Alert, Success, Info Badges:</span></h2>
    <Button className="rounded-corners" style={{ marginRight: '20px', marginBottom: '20px' }}>
      <Icon name="bullhorn" />
      <Badge circle warning value={1} />
    </Button>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="inbox" />
      <Badge circle alert value={1} />
    </Button>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="paper-plane" />
      <Badge circle success value={1} />
    </Button>
    <Button className="rounded-corners">
      <Icon name="rss" />
      <Badge circle info value={1} />
    </Button>
    <br />
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="bullhorn" />
      <Badge warning value={1} />
    </Button>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="inbox" />
      <Badge alert value={1} />
    </Button>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="paper-plane" />
      <Badge success value={1} />
    </Button>
    <Button className="rounded-corners" style={{ marginRight: '20px' }}>
      <Icon name="rss" />
      <Badge info value={1} />
    </Button>

  </Fragment>
);

export default BadgeContainer;
