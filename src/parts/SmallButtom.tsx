import React from 'react';
import styled from 'styled-components';
import { Icon } from '../ui';

export const SmallButton = styled.button<{ background?: string; color?: string }>`
  padding: 10px 8px;
  background: ${({ background }) => (background ? background : '#ececec')};
  outline: none;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: ${({ color }) => (color ? color : '#818181')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconButton: React.FC<{ icon: string; size?: number, onClick?: () => void }> = (p) => {
  return (
    <IconButtonBody name={p.icon} size={23} color="#6e6e6e" onClick={p.onClick}>
      {/* <Icon /> */}
    </IconButtonBody>
  );
};

const IconButtonBody = styled(Icon)`
  padding: 7px;
  background: #ececec;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
