import * as React from 'react';
import styled from 'styled-components';

import { Center, Icon, PageContainer, Spacer } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  const ICON_SIZE = 25;

  const go = (a) => {
    window.open(a);
  };

  return (
    <HomeScreenBody>
      <Spacer amount={45} />
      <p>I'm just a regular programmer like everyone else...</p>
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



const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SoftTitle = styled.p`
  font-weight: 700;
  background-color: #f3ec78;
  background-image: linear-gradient(15deg, #6195da, #625ecc);
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

const Box = styled.div`
  border-radius: 12px;
  cursor: pointer;
  padding: 10px 18px;
  width: fit-content;
  background-color: black;
  color: white;
  font-size: 14px;
  border: solid 2px rgba(255, 255, 255, 0.11);

  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, border 0.2s ease;
  &:hover {
    background-color: white;
    color: black;
    border: solid 2px black;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const AboutText = styled.p`
  max-width: 450px;
  text-align: center;
  margin: 0 auto;
  padding: 0 20px;
  font-weight: 500;
  color: #d8d8d8;
  line-height: 20px;
`;

const Madeby = styled.p`
  text-align: center;
  font-weight: 600;
  padding-bottom: 10px;
  opacity: 0.3;
  font-size: 14px;
  font-style: italic;
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
