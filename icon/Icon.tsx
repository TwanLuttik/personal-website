import * as React from 'react';
import styled, { CSSProperties } from 'styled-components';

import{Globe}from'./icons/Globe';import{Magic}from'./icons/Magic';import{Mobile}from'./icons/Mobile';import{Twitter}from'./icons/Twitter';
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
      { name === 'globe' && <Globe color={color} style={{ width: size, height: size }} /> }{ name === 'magic' && <Magic color={color} style={{ width: size, height: size }} /> }{ name === 'mobile' && <Mobile color={color} style={{ width: size, height: size }} /> }{ name === 'twitter' && <Twitter color={color} style={{ width: size, height: size }} /> }
    </IconBody>
  );
};
const IconBody = styled.div`display: flex;width: fit-content;`;
