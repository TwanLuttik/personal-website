import { usePulse } from '@pulsejs/react';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import core from '../core';
import { Fill, Icon, Row, Spacer } from '../ui';

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = (props) => {
  const router = useHistory();
  const sidebarOpen = usePulse(core.base.state.SIDEBAR_OPEN);
  const tab = usePulse(core.base.state.TAB);

  const tabs = [
    {
      name: 'About me',
      route: '',
    },
    {
      name: 'What i work on',
      route: 'projects',
    },
    {
      name: 'Resume',
      route: 'resume',
    },
  ];

  const routerTo = (v: string, i: number) => {
    core.base.state.TAB.set(i);
    router.push(v);
  };

  return (
    <SideBarBody sidebarOpen={sidebarOpen}>
      <Content>
        <Spacer amount={20} />
        <>
          {tabs.map((v, i) => (
            <Row key={i}>
              <TextButton onClick={() => routerTo(v.route, i)} active={i === tab}>
                {v.name}
              </TextButton>
              <Line active={i === tab} />
            </Row>
          ))}
        </>
        <Fill />

        <p style={{ color: 'white' }}>🔥 Twan Luttik</p>
        <Spacer amount={10} />
      </Content>
      <Border />
    </SideBarBody>
  );
};

const SideBarBody = styled(Row)<{ sidebarOpen: boolean }>`
  width: 100%;
  max-width: 250px;
  display: flex;
  position: relative;
  
  /* padding: 0px 10px; */

  @media only screen and (max-width: 500px) {
    position: absolute;
    background: #111111;
    height: 100%;
    z-index: 10;
    /* width: 100%; */
    width: ${({ sidebarOpen }) => (sidebarOpen ? 100 : 0)}%!important;
    min-width: ${({ sidebarOpen }) => (sidebarOpen ? 250 : 0)}px!important;
    left: ${({ sidebarOpen }) => (sidebarOpen ? 0 : -250)}px!important;
  }
  transition: width 0.4s ease-in-out, left 0.4s ease-in-out, min-width 0.4s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  padding-left: 20px;
  flex: 1;
  /* padding: 15px; */
  height: 100%;
  flex-direction: column;
`;

const Border = styled.div`
  display: flex;
  height: 100%;
  width: 1px;

  background: #121212;
`;

const TextButton = styled.p<{ active: boolean }>`
  cursor: pointer;
  margin: 8px 0px;
  width: fit-content;
  user-select: none;
  font-weight: 500;
  ${({ active }) => `color: ${active ? 'white' : '#818181'};`}
  white-space: nowrap;

  transition: color 0.1s ease-in-out;
  &:hover {
    color: white;
  }
`;

const Line = styled.div<{ active: boolean }>`
  height: 1px;
  margin-left: 15px;
  background: linear-gradient(99deg, #404040 0%, rgba(18, 18, 18, 1) 100%);
  width: ${({ active }) => (active ? '100%' : '0%')};
  transition: width 0.5s ease;
`;
