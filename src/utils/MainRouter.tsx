import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { HomeScreen } from '../screens/HomeScreen';
import { Projects } from '../screens/projects/Projects';
import { Header } from '../parts/Header';
import { Footer } from '../parts/Footer';
import { Resume } from '../screens/resume/Resume';
import { TimeLine } from '../screens/timeline/TimeLine';

import './index.css';
import { SideBar } from '../parts/SideBar';
import { usePulse } from '@pulsejs/react';
import core from '../core';

export const MainRouter: React.FC = () => {
  const sidebarOpen = usePulse(core.base.state.SIDEBAR_OPEN);
  const location = useLocation();
  const routes = [
    // {
    //   path: '/projects',
    //   comp: Projects,
    // },
    // {
    //   path: '/resume',
    //   comp: Resume,
    // },
    // {
    //   path: '/timeline',
    //   comp: TimeLine,
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
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
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