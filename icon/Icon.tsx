import * as React from 'react';
import styled, { CSSProperties } from 'styled-components';

import{Twitter}from'./icons/Twitter';
interface IconProps {
  name: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}
export const Icon: React.FC<IconProps> = ({ style, className, onClick, size, name, color }) => {
  return (
    <IconBody className={className} style={style} onClick={onClick}>
      { name === 'twitter' && <Twitter color={color} style={{ width: size, height: size }} /> }
    </IconBody>
  );
};
const IconBody = styled.div`display: flex;width: fit-content;`;
