import React from "react";
import { CSSProperties } from "react";
import styled from "styled-components";

interface IPageLayoutProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  outerStyle?: CSSProperties;
  center?: boolean;
}

export const PageLayout = ({
  children,
  center,
  style,
  outerStyle,
}: IPageLayoutProps) => {
  const s: CSSProperties = {
    ...{ alignItems: center ? "center" : "flex-start" },
    ...style,
  };

  return (
    <PageLayoutBody style={outerStyle}>
      <Container style={s}>{children}</Container>
    </PageLayoutBody>
  );
};

const PageLayoutBody = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100%);
  overflow-y: auto;

  @media screen and (max-width: 1050px) {
    padding: 0px 10px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
