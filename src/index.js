import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonContainer from './components/button/ButtonContainer';
import ButtonGroupContainer from './components/button-group/ButtonGroupContainer';
import IconContainer from './components/icon/IconContainer';
import ImageContainer from './components/image/ImageContainer';
import ChipContainer from './components/chip/ChipContainer';
import BadgeContainer from './components/badge/BadgeContainer';
import ListGroupContainer from './components/list-group/ListGroupContainer';
import InputContainer from './components/input/InputContainer';
import TabBarContainer from './components/tab-bar/TabBarContainer';
import TooltipContainer from './components/tooltip/TooltipContainer';
import ModalContainer from './components/modal/ModalContainer';

/* eslint-disable */
ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/button" component={ButtonContainer} />
        <Route path="/button-group" component={ButtonGroupContainer} />
        <Route path="/icon" component={IconContainer} />
        <Route path="/image" component={ImageContainer} />
        <Route path="/chip" component={ChipContainer} />
        <Route path="/badge" component={BadgeContainer} />
        <Route path="/list-group" component={ListGroupContainer} />
        <Route path="/input" component={InputContainer} />
        <Route path="/tab-bar" component={TabBarContainer} />
        <Route path="/tooltip" component={TooltipContainer} />
        <Route path="/modal" component={ModalContainer} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
/* eslint-enable */
