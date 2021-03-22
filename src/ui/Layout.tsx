import React from 'react';
import styled, { CSSProperties } from 'styled-components';

export const Spacer: React.FC<{ amount: number }> = (props) => {
  return <SpacerBody style={{ width: props.amount, height: props.amount }}></SpacerBody>;
};

const SpacerBody = styled.div``;

export const Fill: React.FC = () => {
  return <FillBody style={{ display: 'flex', flex: 1 }}></FillBody>;
};

const FillBody = styled.div``;

interface RowProps {
  style?: React.CSSProperties;
  className?: string;
  onClick?: any;
}

export const Row: React.FC<RowProps> = (props) => {
  return (
    <div className={props.className} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ...props.style }} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export const PageContainer: React.FC<{ style?: CSSProperties; className?: string }> = (props) => {
  return (
    <ContainerBoday className={props.className} style={props.style} {...props}>
      {props.children}
    </ContainerBoday>
  );
};

const ContainerBoday = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 0px 20px;
  margin: 0 auto;
  @media only screen and (min-width: 800px) {
    max-width: 800px;
    width: 100%;
    padding: 0px 20px;
  }
  
`;

interface CenterProps {
  style?: CSSProperties;
  className?: string;
}
export const Center: React.FC<CenterProps> = (props) => {
  return (
    <CenterContainer className={props.className} style={props.style}>
      {props.children}
    </CenterContainer>
  );
};

const CenterContainer = styled.div<any>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
