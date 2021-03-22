import * as React from 'react';
import styled from 'styled-components';

import { Center, Icon, PageContainer, Row, Spacer } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  const ICON_SIZE = 35;

  const go = (a) => {
    window.open(a);
  };

  return (
    <HomeScreenBody>
      <Spacer amount={45} />
      <p>I'm just a regular programmer like everyone else...</p>
      <Spacer amount={120} />

      <Row>
        <SocialIcon name="linkedin" size={ICON_SIZE} color="white" onClick={() => go('https://www.linkedin.com/in/twanluttik/')} />
        <SocialIcon name="twitter" size={ICON_SIZE} color="white" onClick={() => go('https://twitter.com/twanluttik')} />
        <SocialIcon name="github" size={ICON_SIZE} color="white" onClick={() => go('https://github.com/twanluttik')} />
        <SocialIcon name="notify" size={ICON_SIZE} color="white" onClick={() => go('https://notify.me/twan')} />
      </Row>
    </HomeScreenBody>
  );
};

const HomeScreenBody = styled(PageContainer)`
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 650px;
`;

const SocialIcon = styled(Icon)`
  cursor: pointer;
  margin: 0 8px;

  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-right: 0px;
  }

  transition: color 0.2s ease;
  &:hover {
    color: #8a8a8a;
  }
`;
