import * as React from 'react';
import styled from 'styled-components';
import { PageContainer, Spacer } from '../../ui';
import { workstatus } from './data';
import { WorkStatusCard } from './parts/WorkStatusCard';

interface TimeLineProps {}

export const TimeLine: React.FC<TimeLineProps> = (props) => {
  const {} = props;

  return (
    <TimeLineBody>
      <Spacer amount={20} />
      <h2>Work status</h2>
      <Spacer amount={5} />
      <>
        {workstatus.map((v, i) => (
          <WorkStatusCard key={i} {...v} />
        ))}
      </>
    </TimeLineBody>
  );
};

const TimeLineBody = styled(PageContainer)`
  flex: 1;
  color: white;
`;
