import * as React from 'react';
import styled from 'styled-components';
import { PageContainer, Row, Spacer } from '../ui';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;

  return (
    <FooterBody>
      <Container>
        <Row>
          <p>Hosted by </p>
          <Spacer amount={4} />
          <p style={{ textDecoration: 'underline', cursor: 'pointer' }}>vercel.com</p>
        </Row>
      </Container>
    </FooterBody>
  );
};

const FooterBody = styled.div`
  flex: 1;
  height: 60px;
  border-top: 1px solid #222222;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
`;

const Container = styled(PageContainer)`
  justify-content: center;
  height: 100%;
`;
