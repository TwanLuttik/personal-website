import * as React from 'react';
import styled from 'styled-components';

import { Center, Icon, Spacer } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  const ICON_SIZE = 35;

  const go = (a) => {
    window.open(a);
  };

  return (
    <HomeScreenBody>
      <Spacer amount={10} />
      <Title>Twan Luttik</Title>
      <Spacer amount={30} />

      <Bio>
        <SoftTitle>Work</SoftTitle>
        <Box onClick={() => go('https://notify.me')}>
          <p style={{ width: 'fit-content', fontWeight: 'bold' }}>Notify Technology, Inc</p>
        </Box>
        <Spacer amount={15} />
        <SoftTitle>Side Project</SoftTitle>
        <Box onClick={() => go('https://cheapestkeys.com')}>
          <p style={{ width: 'fit-content', fontWeight: 'bold' }}>Cheapestkeys</p>
        </Box>

        <Spacer amount={35} />
        <SoftTitle>Other</SoftTitle>
        <Box onClick={() => go('https://upsidedownstein.com')}>
          <p style={{ width: 'fit-content', fontWeight: 'bold' }}>upsidedownstein</p>
        </Box>
      </Bio>

      <Spacer amount={80} />
      <IconsContainer>
        <IconButton onClick={() => go('https://github.com/twanluttik')} name="github" size={ICON_SIZE} color="white" />
        <IconButton
          onClick={() => go('https://www.linkedin.com/in/twanluttik/')}
          name="linkedin"
          size={ICON_SIZE}
          color="white"
        />
        <IconButton
          onClick={() => go('https://twitter.com/TwanLuttik')}
          name="twitter"
          size={ICON_SIZE}
          color="white"
        />
        <IconButton onClick={() => go('https://notify.me/twan')} name="notify" size={ICON_SIZE} color="white" />
        <IconButton
          onClick={() => go('https://www.instagram.com/twanluttik/')}
          name="instagram"
          size={ICON_SIZE}
          color="white"
        />
      </IconsContainer>
    </HomeScreenBody>
  );
};

const HomeScreenBody = styled.div`
  background-color: black;
  color: white;
`;

const IconButton = styled(Icon)<any>`
  cursor: pointer;
  padding: 0px;
  border-radius: 10px;
  margin: 0px 15px;

  transition: opacity 0.2s ease, rotate 0.4s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.48) rotate(4deg);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SoftTitle = styled.p`
  font-weight: 700;
  background-color: #f3ec78;
  background-image: linear-gradient(45deg, #397dd5, #625ecc);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  width: fit-content;
  margin: 0 auto;

  background-color: #f3ec78;
  background-image: linear-gradient(45deg, #8678f3, #ce3863);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const Bio = styled(Center)`
  margin: 0 auto;
`;

const Box = styled.p`
  border-radius: 12px;
  cursor: pointer;
  padding: 15px 20px;
  width: fit-content;
  background-color: black;
  color: white;
  border: solid 2px white;

  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, border 0.2s ease;
  &:hover {
    background-color: white;
    transform: scale(1.1);
    color: black;
    border: solid 2px black;
  }
`;
