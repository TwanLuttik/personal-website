import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import * as React from 'react';
import styled from 'styled-components';
import { Icon, Fill, Row, Spacer } from '../parts';

interface MainProps {}

const socials = [
	{
		icon: 'github',
		link: 'https://github.com/twanluttik',
		name: 'Github',
	},
	{
		icon: 'twitter',
		link: 'https://twitter.com/twanluttik',
		name: 'Twitter',
	},
	{
		icon: 'linkedin',
		link: 'https://linkedin.com/in/twanluttik',
		name: 'Linkedin',
	},
	{
		icon: 'instagram',
		link: 'https://instagram.com/twanluttik',
		name: 'Instagram',
	},
];

const projects = [
	{
		icon: 'treasure',
		link: '',
		name: '???...',
	},
	{
		icon: 'Notify.me',
		link: 'https://ohsnapmagic.com',
		name: 'OHSNAPMAGIC.COM',
	},
	{
		icon: 'Notify.me',
		link: 'https://notify.me',
		name: 'Notify.me',
	},
];

const Main: NextPage = (props) => {
	const {} = props;

	const [Selected, setSelected] = React.useState('');

	const go = (v: string) => {
		window.open(v, '_blank');
	};

	return (
		<MainBody>
			<BackgroundImage src="../public/picture.jpg" alt="main_picture" />
			<Head>
				<title>Twan Luttik</title>
			</Head>
			<LineContainer>
				<Fill />
				<TextEntry style={{ fontSize: 20 }}>Twan Luttik</TextEntry>
				<br />
				<LineBox>
					{socials.map((item, index) => (
						<SelectionEntry
							key={index}
							text={item.name}
							icon={item.icon}
							onClick={() => go(item.link)}
						/>
					))}

					{/* <SelectionEntry text="Twitter" icon="twitter" /> */}
					{/* <SelectionEntry text="Github" icon="github" /> */}
				</LineBox>
				<br />
				<br />
				<TextEntry style={{ fontSize: 20 }}>Work / Projects</TextEntry>
				<br />
				<LineBox>
					{projects.map((item, index) => (
						<SelectionEntry
							key={index}
							text={item.name}
							icon={item.icon}
							onClick={() => go(item.link)}
						/>
					))}
				</LineBox>
				<Fill />
				<BottomCredit>
					<p style={{ color: 'white' }}>Powered By NextJS</p>
					<Spacer size={5} />
					<Icon name="lightning" size={16} color="white" />
				</BottomCredit>
				<br />
			</LineContainer>
		</MainBody>
	);
};

const MainBody = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LineContainer = styled.div`
	height: 100%;
	width: calc(100% - 20px);
	margin: 10px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: solid 1px #707070;
`;

const LineBox = styled.div`
	padding: 15px;
	border-radius: 5px;
	border: solid 1px #707070;
`;

const BackgroundImage = styled(Image)`
	position: absolute;
	top: 0px;
	left: 0px;

	height: 100%;
	z-index: 10;
	width: 100%;
`;

const SelectionEntry: React.FC<{
	text: string;
	icon: string;
	selected?: boolean;
	onClick?: () => void;
}> = (p) => {
	return (
		<SelectionEntryBody selected={p.selected} onClick={p.onClick}>
			<BackgroundLayer />
			<TextEntry>{p.text}</TextEntry>
			<Fill />
			<Icon
				name={p.icon}
				size={20}
				color={p.selected ? 'black' : '#ffffff'}
				style={{ position: 'relative', zIndex: 10 }}
			/>
		</SelectionEntryBody>
	);
};

const SelectionEntryBody = styled.div<{ selected?: boolean }>`
	display: flex;
	flex-direction: row;
	cursor: pointer;
	user-select: none;
	min-width: 300px;
	max-width: 300px;
	width: 300px;
	padding: 3px 5px;
	border-radius: 3px;
	position: relative;
	margin-bottom: 3px;

	&:hover {
		div:nth-child(1) {
			width: 100%;
		}
		p:nth-child(2) {
			color: black;
		}

		div:nth-child(4) {
			svg {
				path {
					transition: fill 0.3s ease-in-out;
					fill: black;
				}
			}
		}
	}

	@keyframes blinking {
		0%,
		49% {
			background-color: white;
			color: black;
			width: 0%;
		}
		50%,
		100% {
			background-color: black;
			color: white;
			width: 100%;
		}
	}
`;

const BackgroundLayer = styled.div`
	background-color: white;
	width: 0%;
	margin: -3px -5px;
	height: 100%;
	position: absolute;
	transition: width 0.5s ease;
	border-radius: 3px;
`;

const TextEntry = styled.p`
	z-index: 10;
	color: white;
	font-variant-caps: all-small-caps;
	font-weight: 600;
	letter-spacing: 1.2px;
	user-select: none;
	transition: color 0.2s ease;
`;

const BottomCredit = styled(Row)`
	opacity: 0.3;
	cursor: default;

	transition: opacity 0.3s ease;
	&:hover {
		opacity: 1;
	}
`;

export default Main;
