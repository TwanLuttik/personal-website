import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { IconButton, SmallButton } from '../parts/SmallButtom';

import { Center, Icon, PageContainer, Row, Spacer, TextButton } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const go = (a) => {
    window.open(a);
  };

  return (
    <PageContainer>
      <h2 style={{ color: '#626262' }}>Twan.Luttik</h2>
      <Spacer amount={25} />

      <SmallTitle>Projects</SmallTitle>
      <Spacer amount={5} />
      <Row>
        <SmallButton background="#5eafff" color="white" style={{ width: 140 }} onClick={() => go('https://cheapestkeys.com') }>
          Cheapestkeys
        </SmallButton>
      </Row>
      <Spacer amount={30} />

      <SmallTitle>Socials</SmallTitle>
      <Spacer amount={5} />
      <Row>
        <IconButton icon="linkedin" onClick={() => go('https://linkedin.com/in/twanluttik/')} />
        <Spacer amount={5} />
        <IconButton icon="twitter" onClick={() => go('https://twitter.com/TwanLuttik')} />
        <Spacer amount={5} />
        <IconButton icon="github" onClick={() => go('https://github.com/TwanLuttik')} />
        <Spacer amount={5} />
        <IconButton icon="notify" onClick={() => go('https://notify.me/twan')} />
      </Row>
    </PageContainer>
  );
};

const LinkText: React.FC<{ title: string; link: string; emoij: string }> = (p) => {
  const nav = useHistory();

  return (
    <LinkTextBody onClick={() => nav.push(p.link)}>
      <Emoij>{p.emoij}</Emoij>
      <Spacer amount={5} />
      <Title>{p.title}</Title>
    </LinkTextBody>
  );
};

const LinkTextBody = styled(Row)`
  cursor: pointer;
  margin-bottom: 3px;
`;

const Emoij = styled.p``;
const SmallTitle = styled.p`
  color: #777777;
  font-weight: 600;
`;
const Title = styled.p`
  text-decoration: underline;
`;
