import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Footer } from './parts/Footer';

import { HomeScreen } from './screens/HomeScreen'

interface AppProps {}

export const App: React.FunctionComponent<AppProps> = props => {
  const theme: any = React.useContext(ThemeContext);
  const {} = props;


  React.useEffect(() => {
    document.title = "Twan Luttik"
  }, [])

  return (
    <AppBody>
      <HomeScreen />
      <Footer />
    </AppBody>
  );
};

const AppBody = styled.div`
  background-color: black;
  height: 100%;
`;