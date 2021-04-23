import * as React from 'react';
import styled from 'styled-components';

interface ExperienceScreenProps {}

export const ExperienceScreen: React.FC<ExperienceScreenProps> = props => {
  const {} = props;

  return (
    <ExperienceScreenBody>
      <p>Notify</p>
    </ExperienceScreenBody>
  );
};

const ExperienceScreenBody = styled.div`
  flex: 1;
`;