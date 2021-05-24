import { Badge, Button, Container, Wrap, WrapItem } from '@chakra-ui/react';
import * as React from 'react';
import { Icon } from './parts/Icon/Icon';
import { Spacer } from './parts/index';
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

	const projects = [
		{ text: 'Cheapestkeys', icon: 'cheapestkeys', link: 'https://cheapestkeys.com', color: '#060A0E', name: 'Cheapestkeys' },
		{ text: 'Notify', icon: 'notify', link: 'https://notify.me', color: '#2E4EDA', name: 'Notify' },
	];

	const programmingSkills = [
		{ text: 'JAVASCRIPT', colorScheme: 'green' },
		{ text: 'TYPESCRIPT', colorScheme: 'orange' },
		{ text: 'react js', colorScheme: 'blue' },
		{ text: 'react native', colorScheme: 'purple' },
	];
	return (
		<AppBody>
			<Container>
				<br />
				<Heading>Twan Luttik</Heading>
				<Spacer size={4} />
				<Wrap justify="center">
					{socials.map((v, i) => (
						<WrapItem key={i}>
							<Button onClick={() => go(v.link)} backgroundColor={v.color} textColor="white" leftIcon={<Icon key={i} name={v.icon} size={20} color="white" />}>
								{v.name}
							</Button>
						</WrapItem>
					))}
				</Wrap>

				<Spacer size={20} />
				<SmallHeading>Projects/Work</SmallHeading>
				<Spacer size={4} />
				<Wrap justify="center">
					{projects.map((v, i) => (
						<WrapItem key={i}>
							<Button onClick={() => go(v.link)} backgroundColor={v.color} textColor="white" leftIcon={<Icon key={i} name={v.icon} size={20} color="white" />}>
								{v.name}
							</Button>
						</WrapItem>
					))}
				</Wrap>
				{/* <SmallHeading>Programming Skills</SmallHeading>
				<Spacer size={4} />
				<Wrap justify="center">
					{programmingSkills.map((v, i) => (
						<WrapItem key={i}>
							<Badge colorScheme={v.colorScheme}>{v.text}</Badge>
						</WrapItem>
					))}
				</Wrap>
			 */}
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

const SmallHeading = styled.p`
	font-weight: bold;
	font-size: 18px;
	text-align: center;
`;
