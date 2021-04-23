import * as React from 'react';
import styled from 'styled-components';
import { PageContainer, Spacer } from '../../ui';
import { Project, projects } from './data';

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = (props) => {
  const {} = props;

  return (
    <ProjectsBody>
      <h1>Projects</h1>
      <Spacer amount={40} />
      <>
        {projects.map((v, i) => (
          <ProjectCard {...v} key={i} />
        ))}
      </>
    </ProjectsBody>
  );
};

const ProjectsBody = styled(PageContainer)`
  color: black;
`;

const ProjectCard: React.FC<Project> = (p) => {
  return (
    <>
      <p>{p.title}</p>
    </>
  );
};
