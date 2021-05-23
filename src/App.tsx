import { Badge, Button, Container, HStack, Wrap, WrapItem } from '@chakra-ui/react';
import * as React from 'react';
import { Icon } from './parts/Icon/Icon';
import styled from 'styled-components';

export const App: React.FC = () => {
	const go = (v: string) => {
		window.open(v, '_blank');
	};

	const socials = [
		{
			icon: 'github',
			link: 'https://github.com/twanluttik',
			color: 'black',
			name: 'Github',
		},
		{
			icon: 'twitter',
			link: 'https://twitter.com/twanluttik',
			color: '#1CA2F1',
			name: 'Twitter',
		},
		{
			icon: 'linkedin',
			link: 'https://linkedin.com/in/twanluttik',
			color: '#0C65C2',
			name: 'Linkedin',
		},
		{
			icon: 'notify',
			link: 'https://notify.me/t',
			color: '#2E4EDA',
			name: 'Notify',
		},
	];
	return (
		<AppBody>
			<Container>
				<br />
				<Heading>Twan Luttik</Heading>
				<br />
				<Wrap justify="center">
					{socials.map((v, i) => (
						<WrapItem key={i}>
							<Button onClick={() => go(v.link)} backgroundColor={v.color} textColor="white" leftIcon={<Icon key={i} name={v.icon} size={20} color="white" />}>
								{v.name}
							</Button>
						</WrapItem>
					))}
				</Wrap>
				<br />
				{/* <HStack justifyContent="center">
					<Badge colorScheme="green">Javascript</Badge>
					<Badge colorScheme="orange">Typescript</Badge>
					<Badge colorScheme="blue">React Js</Badge>
					<Badge colorScheme="purple">React Native</Badge>
				</HStack> */}
			</Container>
		</AppBody>
	);
};

const AppBody = styled.div`
	animation: fadeInAnimation ease 1.5s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;
	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
const Heading = styled.h2`
	font-weight: bold;
	font-size: 30px;
	text-align: center;
`;
