import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

interface SpacerProps {
  amount: number;
}

export const Spacer: React.FC<SpacerProps> = (props) => {
  const { amount } = props;

  return <SpacerBody style={{ height: amount * 2, width: amount * 2 }}></SpacerBody>;
};

const SpacerBody = styled.div`
`;

export const Center: React.FC = (props) => {
  return <CenterBody>{props.children}</CenterBody>;
};

const CenterBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Row: React.FC = (props) => {
  return <RowBody>{props.children}</RowBody>;
};

const RowBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
