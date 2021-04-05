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
        <Title>{title}</Title>
        <Spacer amount={15} /> 
        <Description>{description}</Description>
        <Date>Started: {date}</Date>
        {/* <TextButton text="open" style={{ color: 'white' }} onClick={() => window.open(website)} /> */}
        {/* <Row>
          <Title>{title}</Title>
          <Fill />
          <div>
            {lang.map((v, i) => (
              <LangText key={i} color={langColorParser(v)}>
                {v}
              </LangText>
            ))}
          </div>
        </Row>
        <Spacer amount={5} />
        <Description>{description}</Description>
        <Spacer amount={40} />

        <Row style={{ paddingTop: date ? 10 : 0 }}>
          <Date>Started: {date}</Date>

          <Fill />
          <TextButton text="open" style={{ color: '#287bff' }} onClick={() => window.open(website)} />
        </Row> */}
      </InnerArea>
    </ProjectCardBody>
  );
};

const ProjectCardBody = styled.div`
  width: fit-content;
  /* margin: 10px 0px; */
  border-radius: 8px;
  padding: 15px;

  /* cursor: pointer; */
  color: white;
  background: #151515;

  @media only screen and (max-width: 500px) {
    /* width: 100%; */
  }
`;

const InnerArea = styled.div`
`;

const Description = styled.p`
  opacity: 0.5;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Date = styled.p`
  opacity: 0.3;
  font-style: italic;
  font-size: 12px;
`;

const LangText = styled.p<{ color: string }>`
  font-size: 15px;
  font-variant-caps: all-petite-caps;
  margin-right: 5px;
  font-weight: 600;
  color: ${({ color }) => color};
`;
