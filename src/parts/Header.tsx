import * as React from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { Icon, PageContainer, Row, Spacer, TextButton } from '../ui';

interface HeaderProps {}
export const Header: React.FC<HeaderProps> = (props) => {
  const {} = props;
  const router = useHistory();
  const location = useLocation();

  const routerTo = (a) => {
    router.push(a);
  };

  React.useEffect(() => {
    console.log(location);
  }, [location]);

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
          <TextButton text="Projects" onClick={() => routerTo('/projects')} style={{ color: location.pathname === '/projects' ? 'white' : 'gray' }} />
          <Spacer amount={20} />
          <TextButton text="Timeline" onClick={() => routerTo('/timeline')} style={{ color: location.pathname === '/timeline' ? 'white' : 'gray' }} />
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
  z-index: 10;
  position: relative;
  background: #222222;
  background: linear-gradient(45deg, #8678f3, #ce3863);
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
