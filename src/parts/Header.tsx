import * as React from "react";
import styled, { ThemeContext } from "styled-components";

interface HeaderProps {}

const btns = ["Home", "Projects", "About"];

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const theme: any = React.useContext(ThemeContext);
  const {} = props;

  return (
    <HeaderBody>
      {btns.map((v, i) => (
        <Button key={i} >{v}</Button>
      ))}
    </HeaderBody>
  );
};

const HeaderBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

`;

const Button = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 5px 15px;
  cursor: pointer;
  user-select: none;

  transition: color .1s ease, transform .05s ease;
  &:hover {
    color: #19df58;
  }
  &:active {

    transform: scale(1.06);
    /* color: #19df58; */
  }
`;
