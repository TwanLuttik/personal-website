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
          <p style={{  fontWeight: 600 }}>Twan Luttik</p>
          <Spacer amount={4} />
          <p>& Hosted on </p>
          <Spacer amount={4} />
          <p style={{  fontWeight: 600 }}>vercel.com</p>
        </Credit>
      </Container>
    </FooterBody>
  );
};

const FooterBody = styled.div`
  height: 50px;
  position: absolute;
  bottom: 1px;
  width: 100%;
  color: white;
`;


const GradiantLine = styled.div`
  width: 100%;
  height: 1px;
  background: #222222;
  /* background: linear-gradient(45deg, #8678f3, #ce3863); */
  background: linear-gradient(45deg, #8678f3, #ce3863);
`;



const Container = styled(PageContainer)`
  justify-content: center;
  height: 100%;
`;


const Credit = styled(Row)`
  white-space: nowrap;
  flex-wrap: wrap;
`;