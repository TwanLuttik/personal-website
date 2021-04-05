import { usePulse } from '@pulsejs/react';
import * as React from 'react';
import styled from 'styled-components';
import core from '../core';

import { Center, Icon, PageContainer, Row, Spacer, TextButton } from '../ui';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const ICON_SIZE = 30;
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
    <HomeScreenBody>
      <Row>
        {social.map((v, i) => (
          <SocialIcon key={i} name={v.icon} size={ICON_SIZE} color="#5B5E65" onClick={() => go(v.link)} />
        ))}
      </Row>
    </HomeScreenBody>
  );
};

const HomeScreenBody = styled(PageContainer)`
  color: white;
  /* display: flex; */
  /* flex-direction: column; */
  /* height: 100%; */
  /* min-height: 650px; */
`;

const SocialIcon = styled(Icon)`
  cursor: pointer;
  border-radius: 4px;
  margin: 0 10px;

  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const ShortBio = styled.p`
  line-height: 23px;
  color: #c7c7c7;
`;

const SocialText = styled(TextButton)`
  font-weight: 400;
  opacity: 0.8;
  color: white;
  font-size: 18px;
`;
