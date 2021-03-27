import * as React from 'react';
import styled from 'styled-components';
import { PageContainer, Row, Spacer } from '../../ui';

interface ResumeProps {}

export const Resume: React.FC<ResumeProps> = (props) => {
  const {} = props;

  return (
    <ResumeBody>
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
          <ExperienceTime>+1.5 Years</ExperienceTime>
        </Box>
        <Spacer amount={20} />
        <p>- Back-end knownledge</p>
      </div>
      <Spacer amount={50} />
      <H2>Strong points</H2>
      <Spacer amount={10} />
      <p>- Im a fast learner</p>
      <p>- Communication and availability on point</p>

      <Spacer amount={80} />
      <H2>Work experience</H2>
      <Spacer amount={10} />
      <WorkExpBox>
        <div style={{ padding: 10 }}>
          <Title>Notify</Title>
          <JobTitle>Front-End engineer</JobTitle>
          <p>- React / React Native</p>
          <p>- VueJs 2.6</p>
          <LinkUrl>https://notify.me</LinkUrl>
        </div>
      </WorkExpBox>
      <WorkExpBox>
        <div style={{ padding: 10 }}>
          <Title>Cheapestkeys</Title>
          <JobTitle>Founder/CEO</JobTitle>
          <p>- React </p>
          <p>- Typescript</p>
          <LinkUrl>https://cheapestkeys.com</LinkUrl>
        </div>
      </WorkExpBox>
      <WorkExpBox>
        <div style={{ padding: 10 }}>
          <Title>Thrurate</Title>
          <JobTitle></JobTitle>
          <p>- React </p>
          <p>- Typescript</p>
          <LinkUrl>https://thrurate.com</LinkUrl>
        </div>
      </WorkExpBox>
    </ResumeBody>
  );
};

const ResumeBody = styled(PageContainer)`
  flex: 1;
  color: #ffffff;
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
`;

const H2 = styled.h2`
  padding-left: 10px;
`;
