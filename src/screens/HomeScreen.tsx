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
          <Link color="#385BFF" onClick={() => go('https://notify.me')}>
            Notify Technology, Inc
          </Link>
        </Row>
        <Spacer amount={2} />
        <Row>
          <Bold>Side project status:</Bold>
          <Spacer amount={5} />

          <Link color="#5bc452" onClick={() => go('https://cheapestkeys.com')}>
            cheapestkeys.com
          </Link>
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
        <IconButton
          onClick={() => go('https://notify.me/twan')}
          name="notify"
          size={ICON_SIZE}
          color="white"
        />
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

const Link = styled(P)<{ color: string }>`
  cursor: pointer;
  padding: 2px;

  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:hover {
    /* color: ${(v) => v.color}; */
    background-color: ${(v) => v.color};
    color: black;
  }
`;

const Bold = styled.p`
  font-weight: 700;
  text-align: center;
  padding: 2px;
  padding-right: 0px;
`;
