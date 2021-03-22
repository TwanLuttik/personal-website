import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { HomeScreen } from '../screens/HomeScreen';
import { Projects } from '../screens/projects/Projects';
import { Header } from '../parts/Header';
import { Footer } from '../parts/Footer';

import './index.css';

export const MainRouter: React.FC = () => {
  const location = useLocation();
  const routes = [
    {
      path: '/projects',
      comp: Projects,
    },
    {
      path: '/',
      comp: HomeScreen,
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <TransitionGroup>
          <CSSTransition
            timeout={300}
            classNames="fade"
            key={location.key}
          >
            <Switch location={location} >
              {routes.map((v, i) => (
                <Route key={i} path={v.path} component={v.comp} exact />
              ))}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 140px);
  margin-top: 1px;
`;
