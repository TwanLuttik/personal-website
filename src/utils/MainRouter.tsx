import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { HomeScreen } from '../screens/HomeScreen';


import './index.css';
import { usePulse } from '@pulsejs/react'; 
import core from '../core';

export const MainRouter: React.FC = () => {
  const sidebarOpen = usePulse(core.base.state.SIDEBAR_OPEN);
  const location = useLocation();
 
  const routes = [
    // {
    //   path: '/socials',
    //   comp: SocialsScreen,
    // },
    // {
    //   path: '/experience',
    //   comp: ExperienceScreen,
    // },
    // {
    //   path: '/projects',
    //   comp: Projects,
    // },
    {
      path: '/',
      comp: HomeScreen,
    },
  ];

  return (
    <Container>
      {/* <SideBar /> */}
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key} >
          <Switch location={location}>
            {routes.map((v, i) => (
              <Route key={i} path={v.path} component={v.comp} exact />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh);
  display: flex;
  justify-content: center;
`;