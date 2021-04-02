import * as React from 'react';
import styled from 'styled-components';

import { Center, Icon, PageContainer, Row, Spacer, TextButton } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  const ICON_SIZE = 25;

  const go = (a) => {
    window.open(a);
  };

  return (
    <HomeScreenBody>
      <Spacer amount={25} />
      <h1>About me</h1>
      <Spacer amount={5} />
      <ShortBio>
        I started managing Light & Sound for the plays on my school and since than i liked doing stuff with technology, like helping friend's and
        family if they have any issues with their computer or something else. Doing this more and more i also started creating minecraft plugins in
        java and i knew this was it what i like to do and enjoy. I learned my self VueJs without knowing any of the basics web programming languages.
      </ShortBio>
      <Spacer amount={30} />
      <ShortBio>
        When it comes to programming, I'm a fast learner and i always like to learn new frameworks or languages. I always work on my side-projects to
        improve myself with programming.
      </ShortBio>
      <Spacer amount={120} />
      <ShortBio>Feel free to contact me for any questions</ShortBio>
      <Spacer amount={35} />

      <Row>
        <SocialIcon name="linkedin" size={ICON_SIZE} color="#0A66C2" onClick={() => go('https://www.linkedin.com/in/twanluttik/')} />
        <SocialIcon name="twitter" size={ICON_SIZE} color="#1BA1F2" onClick={() => go('https://twitter.com/twanluttik')} />
        <SocialIcon name="github" size={ICON_SIZE} color="white" onClick={() => go('https://github.com/twanluttik')} />
        <SocialIcon name="notify" size={ICON_SIZE} color="#3B60FF" onClick={() => go('https://notify.me/twan')} />
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
  border: solid 1px #2c2c2c;
  padding: 10px;
  border-radius: 4px;

  :first-child {
    margin-left: 0px;
  }
  :last-child {
    margin-right: 0px;
  }

  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const ShortBio = styled.p`
  line-height: 23px;
  color: #c7c7c7;
`;

const SocialText = styled(TextButton)`
  font-weight: 400;
  opacity: 0.8;
  color: white;
  font-size: 18px;
`;
