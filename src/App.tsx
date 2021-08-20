import * as React from 'react';
import styled from 'styled-components';
import { Main } from './screens/Main';

interface AppProps {}

export const App: React.FC<AppProps> = (props) => {
	const {} = props;

	document.title = 'Twan Luttik'

	return (
		<AppBody>
			<Main />
		</AppBody>
	);
};

const AppBody = styled.div`
	background-color: black;
	height: 100%;
`;
