import * as React from 'react';
import styled from 'styled-components';
import { PageContainer, Row, Spacer, TextButton } from '../../ui';

interface ResumeProps {}

export const Resume: React.FC<ResumeProps> = (props) => {
  const {} = props;

  const go = (a: string) => {
    window.open(a);
  };

  return (
    <ResumeBody>
      <Spacer amount={20} />
      <p style={{ textDecoration: 'underline' }}>Quick links</p>
      <Spacer amount={10} />
      <SocialText text="LinkedIn" onClick={() => go('https://www.linkedin.com/in/twanluttik/')} />
      <SocialText text="Github" onClick={() => go('https://github.com/twanluttik')} />
      <Spacer amount={50} />
      <H2>Programming knownledge</H2>
      <Spacer amount={10} />
      
      <div>
        <Box>
          <p>- Javascript/Typescript</p>
          <ExperienceTime>+2 Years</ExperienceTime>
        </Box>
        <Box>
          <p>- React / React Native</p>
          <ExperienceTime>+2 Years</ExperienceTime>
        </Box>
        <Box>
          <p>- VueJs</p>
          <ExperienceTime>+3 Years</ExperienceTime>
        </Box>
        <Spacer amount={40} />
        <p style={{ paddingBottom: 5, color: 'white' }}>Other</p>
        <p>- Postgres</p>
        <p>- git</p>
        <p>- knownledge for apis</p>
      </div>
      <Spacer amount={80} />
      <H2>Strong points</H2>
      <Spacer amount={10} />
      <p>- Im am a fast learner when it comes to discover new tech or other.</p>
      <p>- Communication is important.</p>
      <p>- Helping my team if they have any question or issues.</p>

      <Spacer amount={80} />
      <H2>Work experience</H2>
      <Spacer amount={10} />
      <WorkExpBox>
        <div style={{ padding: 10 }}>
          <Title>Notify</Title>
          <JobTitle>Front-End engineer</JobTitle>
          <p>- React / React Native</p>
          <p>- VueJs 2.6</p>
          <LinkUrl onClick={() => go('https://notify.me')}>https://notify.me</LinkUrl>
        </div>
      </WorkExpBox>
      <WorkExpBox>
        <div style={{ padding: 10 }}>
          <Title>Cheapestkeys</Title>
          <JobTitle>Founder/CEO</JobTitle>
          <p>- React </p>
          <p>- Typescript</p>
          <LinkUrl onClick={() => go('https://cheapestkeys.com')}>https://cheapestkeys.com</LinkUrl>
        </div>
      </WorkExpBox>
      <WorkExpBox>
        <div style={{ padding: 10 }}>
          <Title>Thrurate</Title>
          <JobTitle></JobTitle>
          <p>- React </p>
          <p>- Typescript</p>
          <LinkUrl onClick={() => go('https://thrurate.com')}>https://thrurate.com</LinkUrl>
        </div>
      </WorkExpBox>
    </ResumeBody>
  );
};

const ResumeBody = styled(PageContainer)`
  flex: 1;
  color: #a7a7a7;
`;

const Box = styled(Row)`
  border-radius: 5px;
  margin: 5px 0;
  min-width: 300px;
  width: 100%;
`;
const ExperienceTime = styled.p`
  opacity: 0.4;
  margin-left: 8px;
  font-style: italic;
`;

const WorkExpBox = styled.div`
  width: fit-content;
  border-radius: 8px;
  border: solid 1px #313131;
  width: 400px;
  margin-bottom: 20px;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }

  transition: 0.2s ease;
  &:hover {
    color: white;
    transform: scale(1.02);
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

const JobTitle = styled.p`
  opacity: 0.8;
  font-size: 14px;
  margin-bottom: 15px;
`;

const LinkUrl = styled.p`
  opacity: 0.5;
  font-style: italic;
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }

`;

const H2 = styled.h2`
  padding-bottom: 10px;
  color: white;
`;

const SocialText = styled(TextButton)`
  font-weight: 400;
  opacity: 0.8;
  color: white;
  font-size: 18px;
`;
