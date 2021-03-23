import * as React from 'react';
import styled from 'styled-components';
import { Fill, Row, Spacer, TextButton } from '../../../ui';
import { Project } from '../data';

interface ProjectCardProps extends Project {}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, website, description, date, lang } = props;

  const langColorParser = (lang: string) => {
    const colors = {
      typescript: '#0082FF',
      reactjs: '#a0cbf4',
      java: '#FF9D3E',
    };

    return colors[lang];
  };

  return (
    <ProjectCardBody>
      <InnerArea>
        <Row>
          <Title>{title}</Title>
          <Fill />
          <Date>{date}</Date>
        </Row>
        <Spacer amount={5} />
        <Description>{description}</Description>
        <Spacer amount={40} />
        <Row style={{ paddingTop: date ? 10 : 0 }}>
          <>
            {lang.map((v, i) => (
              <LangText key={i} color={langColorParser(v)}>
                {v}
              </LangText>
            ))}
          </>
          <Fill />
          <TextButton text="open" style={{ color: '#287bff' }} onClick={() => window.open(website)} />
        </Row>
      </InnerArea>
    </ProjectCardBody>
  );
};

const ProjectCardBody = styled.div`
  width: fit-content;
  margin: 10px 0px;
  border-radius: 8px;
  width: 400px;
  border: solid 1px #222222;
  cursor: pointer;

  transition: border 0.3s ease-in-out, transform 0.2s ease-in;
  &:hover {
    border: solid 1px white;
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const InnerArea = styled.div`
  padding: 20px;
`;

const Description = styled.p`
  opacity: 0.5;
`;

const Title = styled.h3``;
const Date = styled.p`
  opacity: 0.3;
  font-style: italic;
  font-size: 12px;
`;

const LangText = styled.p<{ color: string }>`
  font-size: 15px;
  font-variant-caps: all-petite-caps;
  margin-right: 5px;
  color: ${({ color }) => color};
`;
