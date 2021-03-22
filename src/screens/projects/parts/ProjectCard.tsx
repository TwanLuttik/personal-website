import * as React from 'react';
import styled from 'styled-components';
import { Fill, Row, Spacer, TextButton } from '../../../ui';
import { Project } from '../data';

interface ProjectCardProps extends Project {}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, website, description } = props;

  return (
    <ProjectCardBody>
      <Title>{title}</Title>
      <Spacer amount={5} />
      <Description>{description}</Description>
      <Spacer amount={20} />
      <Row>
        <Fill />
        <TextButton text="open" style={{ color: '#287bff' }} onClick={() => window.open(website)} />
      </Row>
    </ProjectCardBody>
  );
};

const ProjectCardBody = styled.div`
  padding: 20px;
  width: fit-content;
  margin: 10px 0px;
  border-radius: 8px;
  width: 400px;
  border: solid 1px #222222;
  cursor: pointer;

  transition: border 0.3s ease-in-out, transform 0.2s ease-in; 
  &:hover {
    border: solid 1px white;
  }
`;

const Description = styled.p`
  opacity: 0.5;
`;

const Title = styled.h3`

`;