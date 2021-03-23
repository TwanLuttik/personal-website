import * as React from 'react';
import styled from 'styled-components';
import { Icon, PageContainer, Row, Spacer } from '../ui';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;

  return (
    <FooterBody>
      <GradiantLine />
      <Container>
        <Credit>
          <p>🔥</p>
          <Spacer amount={8} />
          <p>Created By</p>
          <Spacer amount={4} />
          <Highlight>Twan Luttik</Highlight>
          <Spacer amount={4} />
          <p>& Hosted on </p>
          <Spacer amount={4} />
          <Highlight>vercel.com</Highlight>
        </Credit>
      </Container>
    </FooterBody>
  );
};

const FooterBody = styled.div`
  height: 50px;
  position: sticky;
  bottom: 0px;
  width: 100%;
  color: #686868;
  background: black;
`;

const GradiantLine = styled.div`
  width: 100%;
  height: 1px;
  background: #222222;
  background: linear-gradient(45deg, #8678f3, #ce3863);
`;

const Highlight = styled.p`
  font-weight: 500;
  color: white;
`;

const Container = styled(PageContainer)`
  justify-content: center;
  height: 100%;
`;

const Credit = styled(Row)`
  white-space: nowrap;
  flex-wrap: wrap;
`;
