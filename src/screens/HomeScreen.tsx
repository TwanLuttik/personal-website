import { usePulse } from '@pulsejs/react';
import * as React from 'react';
import styled from 'styled-components';
import core from '../core';

import { Center, Icon, PageContainer, Row, Spacer, TextButton } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const ICON_SIZE = 26;
  const a = usePulse(core.base.state.SIDEBAR_OPEN);
  const social = [
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/twanluttik/', color: '#0A66C2' },
    { icon: 'twitter', link: 'https://twitter.com/twanluttik', color: '#1BA1F2' },
    { icon: 'github', link: 'https://github.com/twanluttik', color: 'white' },
    { icon: 'notify', link: 'https://notify.me/twan', color: '#3B60FF' },
  ];

  const go = (a) => {
    window.open(a);
  };

  return (
    <PageContainer>
      <Center>
        <Row>
          {social.map((v, i) => (
            <SocialIcon key={i} name={v.icon} size={ICON_SIZE} color="white" onClick={() => go(v.link)} />
          ))}
        </Row>
      </Center>

      <Spacer amount={20} />

      <Heading>More coming soon</Heading>
    </PageContainer>
  );
};

const SocialIcon = styled(Icon)`
  cursor: pointer;
  border-radius: 6px;
  margin: 0 10px;
  padding: 10px;
  background-color: black;

  &:nth-child(1) {
    margin-left: 0px;
  }
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const Heading = styled.p`
  font-weight: 800;
  font-size: 22px;
  text-align: center;
`;
