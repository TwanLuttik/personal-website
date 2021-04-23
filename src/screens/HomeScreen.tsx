import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Center, Icon, PageContainer, Row, Spacer, TextButton } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const links = [
    { emoij: '📱', title: 'Socials', link: '/socials' },
    { emoij: '🏗️', title: 'Projects', link: '/projects' },
    { emoij: '🖥️', title: 'Experience', link: '/experience' },
  ];

  const go = (a) => {
    window.open(a);
  };

  return (
    <PageContainer>
      <h2>Twan.Luttik</h2>
      <Spacer amount={15} />
      <Center>
        <div>
          {links.map((v, i) => (
            <LinkText {...v} key={i} />
          ))}
        </div>
      </Center>
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
const Title = styled.p`
  text-decoration: underline;
`;
