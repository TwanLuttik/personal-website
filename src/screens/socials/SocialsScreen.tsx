import * as React from 'react';
import styled from 'styled-components';

interface SocialsScreenProps {}

export const SocialsScreen: React.FC<SocialsScreenProps> = props => {
  const {} = props;

  return (
    <SocialsScreenBody>
      <p>github</p>
    </SocialsScreenBody>
  );
};

const SocialsScreenBody = styled.div`
  flex: 1;
`;