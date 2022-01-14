import styled from 'styled-components';
import React from 'react';

export const Footer: React.FC = () => {
	return <FooterBody>
		<CT>
			<p style={{ fontSize: 12}}>Copyright © 2021 - 2022, Twan Luttik</p>
		</CT>
	</FooterBody>
}

const FooterBody = styled.div`
  background-color: #060811;
  padding: 0px 20px;
	color: white;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const CT = styled.div`
  width: 100%;
  @media only screen and (min-width: 1100px) {
    max-width: 1100px;
    margin: 0 auto;
  }
`;