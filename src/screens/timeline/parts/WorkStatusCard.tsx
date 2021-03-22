import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Fill, Icon, Row, Spacer } from '../../../ui';
import { WorkStatusType } from '../data';

interface WorkStatusCardProps extends WorkStatusType {}

export const WorkStatusCard: React.FC<WorkStatusCardProps> = (props) => {
  const { status, title, website } = props;

  return (
    <WorkStatusCardBody>
      <InnerContainer>
        <Row>
          <Title>{title}</Title>
          <Fill />
          <ClickIcon name="globe" size={20} color="white" onClick={() => window.open(website)} />
        </Row>
        <Spacer amount={20} />
        <Row>
          <p>Status: </p>
          <Spacer amount={5} />
          <p>{status === 'WORKING' ? <Dot color="#56FF58" /> : <Dot color="#BB3434" />}</p>
        </Row>
      </InnerContainer>
    </WorkStatusCardBody>
  );
};

const WorkStatusCardBody = styled.div`
  width: fit-content;
  margin: 10px 0px;
  border-radius: 8px;
  width: 400px;
  border: solid 1px #222222;
  cursor: pointer;

  transition: border 0.2s ease-in-out, transform 0.1s ease;
  &:hover {
    border: solid 1px #747474;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const InnerContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  user-select: none;
`;

const DotBreathAnimation = keyframes`
 0% { opacity: 1; };
 50% { opacity: 0; };
 100% { opacity: 1; };
`;

const Dot = styled.div<{ color?: string }>`
  background: ${({ color }) => color};
  height: 12px;
  width: 12px;
  border-radius: 20px;

  animation-name: ${DotBreathAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const ClickIcon = styled(Icon)`
  cursor: pointer;

  transition: opacity 0.1s ease, transform 0.1s ease;
  &:hover {
    opacity: 0.6;
    transform: scale(1.2);
  }
  &:active {
    opacity: 1;
  }
`;
