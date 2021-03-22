import * as React from 'react';
import styled from 'styled-components';

interface TextButtonProps {
  text?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const TextButton: React.FC<TextButtonProps> = (props) => {
  const {} = props;

  return (
    <TextButtonBody style={props.style} onClick={props.onClick}>
      {props.text}
    </TextButtonBody>
  );
};

const TextButtonBody = styled.p`
  width: fit-content;
  color: white;
  cursor: pointer;
  
  transition: opacity .1s ease;
  &:hover {
    opacity: 0.5;
  }
`;
