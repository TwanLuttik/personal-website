import * as React from 'react';
import styled from 'styled-components';
import { Icon, PageContainer, Row, Spacer } from '../ui';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;

  return (
    <FooterBody>
      <Container>
        <Credit>
          <Spacer amount={8} />
          <p>Created by</p>
          <Spacer amount={4} />
          <Highlight>Twan Luttik</Highlight>
          <Spacer amount={4} />
          <p>& hosted on </p>
          <Spacer amount={4} />
          <Highlight>vercel</Highlight>
        </Credit>
      </Container>
    </FooterBody>
  );
};

const FooterBody = styled.div`
  /* height: 50px; */
  width: 100%;
  background: #ececec;
  color: #7f7f7f;
  font-size: 15px;
`;


const Highlight = styled.p`
  font-weight: 500;
  color: #515151;
`;

const Container = styled(PageContainer)`
  justify-content: center;
  padding: 10px;
`;

const Credit = styled(Row)`
  white-space: nowrap;
  flex-wrap: wrap;
  justify-content: center;
`;
