import * as React from 'react';
import styled from 'styled-components';
import { Fill, Row, Spacer, TextButton } from '../../../ui';
import { Project } from '../data';

interface ProjectCardProps extends Project {}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, website, description, date } = props;

  return (
    <ProjectCardBody>
      <InnerArea>
        <Title>{title}</Title>
        <Spacer amount={5} />
        <Description>{description}</Description>
        <Spacer amount={20} />
        <Row style={{ paddingTop: date ? 10 : 0 }}>
          <Date>{date}</Date>
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
