import { usePulse } from '@pulsejs/react';
import { Console } from 'node:console';
import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import core from './core';
import { Footer } from './parts/Footer';

import { HomeScreen } from './screens/HomeScreen';
import { Icon } from './ui';
import { MainRouter } from './utils/MainRouter';

interface AppProps {}

export const App: React.FunctionComponent<AppProps> = (props) => {
  const theme: any = React.useContext(ThemeContext);
  const {} = props;
  const sidebarOpen = usePulse(core.base.state.SIDEBAR_OPEN);

  React.useEffect(() => {
    document.title = 'Twan Luttik';
  }, []);

  return (
    <AppBody>
      <SideBarButton
        name="arrow-right"
        size={30}
        color="#424242"
        onClick={() => core.base.state.SIDEBAR_OPEN.set(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <MainRouter />
    </AppBody>
  );
};

const AppBody = styled.div`
  background-color: #0b0b0b;
`;

const SideBarButton = styled(Icon)<{ sidebarOpen: boolean }>`
  display: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  /* pointer-events: visible; */

  @media only screen and (max-width: 500px) {
    display: flex;
    left: unset;
    /* left: ${({ sidebarOpen }) => (sidebarOpen ? 270 : 10)}px; */
    transform: rotate(${({ sidebarOpen }) => (sidebarOpen ? 180 : 0)}deg);
  }

  transition: left 0.3s ease-in-out, transform 0.3s ease-in-out;
`;
