import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

import { Center, Icon, Row, Spacer } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  const theme: any = React.useContext(ThemeContext);
  const {} = props;
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
        <Row>
          <Bold>Work status:</Bold>
          <Spacer amount={5} />
          <P> Notify Technology, Inc</P>
        </Row>
        <Spacer amount={2} />
        <Row>
          <Bold>Work status:</Bold>
          <Spacer amount={5} />

          <P>cheapestkeys.com</P>
        </Row>
      </Bio>
      <Spacer amount={50} />

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
      </IconsContainer>
    </HomeScreenBody>
  );
};

const HomeScreenBody = styled.div`
  background-color: black;
  color: white;
`;

const IconButton = styled(Icon)`
  cursor: pointer;
  margin: 0px 10px;
  &:hover {
    color: red;
    opacity: 0.6;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Bio = styled(Center)``;

const P = styled.p`
  text-align: center;
`;

const Bold = styled.p`
  font-weight: 600;
  text-align: center;
`;
