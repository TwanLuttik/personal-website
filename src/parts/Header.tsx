import * as React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Icon, PageContainer, Row, Spacer, TextButton } from '../ui';

interface HeaderProps {}
export const Header: React.FC<HeaderProps> = (props) => {
  const {} = props;
  const router = useHistory()
  

  const routerTo = (a) => {
    router.push(a)
  };

  return (
    <HeaderBody>
      <Container>
        <Row>
          <NameLabel>
            <Dot />
            <Spacer amount={10} />
            <NameText onClick={() => routerTo('/')}>Twan Luttik</NameText>
          </NameLabel>

          <Spacer amount={50} />
          <TextButton text="Projects" onClick={() => routerTo('/projects')} />
          {/* <SocialIcon name="linkedin" size={25} color="white" onClick={() => go('https://www.linkedin.com/in/twanluttik/')} />
          <SocialIcon name="twitter" size={25} color="white" onClick={() => go('https://twitter.com/twanluttik')} />
          <SocialIcon name="github" size={25} color="white" onClick={() => go('https://github.com/twanluttik')} />
          <SocialIcon name="notify" size={25} color="white" onClick={() => go('https://notify.me/twan')} /> */}
        </Row>
      </Container>
      <BottomBorder />
    </HeaderBody>
  );
};

const HeaderBody = styled.div`
  height: 45px;
`;

const BottomBorder = styled.div`
  width: 100%;
  height: 1px;
  background: #222222;
  background: linear-gradient(45deg, #8678f3, #ce3863);
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
  height: 100%;
  justify-content: center;
`;

const NameLabel = styled(Row)``;
const NameText = styled.p`
  font-weight: bold;
  user-select: none;
  color: white;
  cursor: pointer;
`;
const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 20px;
  background-color: #57ff57;
`;
