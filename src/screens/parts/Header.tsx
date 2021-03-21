import * as React from 'react';
import styled from 'styled-components';
import { Icon, PageContainer, Row, Spacer } from '../../ui';

interface HeaderProps {}
export const Header: React.FC<HeaderProps> = (props) => {
  const {} = props;

  const go = (a) => {
    window.open(a);
  };

  return (
    <HeaderBody>
      <Container>
        <Row>
          <NameLabel>
            <Dot />
            <Spacer amount={10} />
            <NameText>Twan Luttik</NameText>
          </NameLabel>

          <Spacer amount={50} />
          <SocialIcon name="linkedin" size={25} color="white" onClick={() => go('https://www.linkedin.com/in/twanluttik/')} />
          <SocialIcon name="twitter" size={25} color="white" onClick={() => go('https://twitter.com/twanluttik')} />
          <SocialIcon name="github" size={25} color="white" onClick={() => go('https://github.com/twanluttik')} />
          <SocialIcon name="notify" size={25} color="white" onClick={() => go('https://notify.me/twan')} />
        </Row>
      </Container>
    </HeaderBody>
  );
};

const HeaderBody = styled.div`
  border-bottom: 1px solid #222222;
  height: 40px;
`;

const SocialIcon = styled(Icon)`
  cursor: pointer;
  margin: 0 10px;

  transition: color 0.2s ease;
  &:hover {
    color: #8a8a8a;
  }
`;

const Container = styled(PageContainer)`
  /* border-left: 1px solid #222222; */
  /* border-right: 1px solid #222222; */
  /* @media only screen and (min-width: 600px) {
    max-width: 800px;
    margin: 0 auto;
    background: red;
  } */

  height: 100%;
  justify-content: center;
`;

const NameLabel = styled(Row)``;
const NameText = styled.p`
  font-weight: bold;
  user-select: none;
`;
const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 20px;
  background-color: #57ff57;
`;
