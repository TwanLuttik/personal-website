import type { NextPage } from 'next';
import NextHead from 'next/head';
import styled from 'styled-components';
import TwanImg from '../public/twan.png';
import { BoxWrapper, Icon, Row, Spacer } from '../components';

const Home: NextPage = () => {
	const emoijs = ['🙊', '🌮', '🎮', '🏢'];

	return (
		<HomeBody>
			<NextHead>
				<title>Twan Luttik</title>
				<meta name="theme-color" content="#090e1c" />
			</NextHead>

			<BoxWrapper>
				<Spacer size={30} />

				<Row>
					{emoijs.map((item, index) => (
						<Row key={index}>
							<p>{item}</p>
							{emoijs?.length - 1 !== index && (
								<p
									style={{
										paddingLeft: 12,
										paddingRight: 12,
										paddingTop: 5,
										opacity: 0.4,
									}}
								>
									/
								</p>
							)}
						</Row>
					))}
				</Row>
				<Spacer size={10} />
				<p style={{ fontSize: 38 }}>Twan Luttik</p>
				<Spacer size={40} />
				<ProfileImg
					src={TwanImg.src}
					height={200}
					width={200}
					alt={'twan-picture'}
				/>
				<Spacer size={60} />
				<p
					style={{
						color: 'white',
						marginBottom: 15,
						fontSize: 24,
						fontWeight: 700,
					}}
				>
					Projects:
				</p>
				<CardItem
					onClick={() => window.open('https://twitter.com/yourstatusapp')}
				>
					<Icon name="mobile" size={22} color="white" />
					<Spacer size={10} h />
					<p>yourstatus.app</p>
				</CardItem>
				<Spacer size={10} />
				<CardItem onClick={() => window.open('https://publicwork.space')}>
					<Icon name="globe" size={22} color="white" />
					<Spacer size={10} h />
					<p>publicwork.space</p>
				</CardItem>
				<Spacer size={10} />
				<CardItem onClick={() => window.open('https://ohsnapmagic.com')}>
					<Icon name="magic" size={22} color="white" />
					<Spacer size={10} h />
					<p>ohsnapmagic.com</p>
				</CardItem>

				<Spacer size={60} />
				<p
					style={{
						color: 'white',
						marginBottom: 15,
						fontSize: 24,
						fontWeight: 700,
					}}
				>
					My socials:
				</p>
				<TextLink
					onClick={() => window.open('https://instagram.com/twanluttik')}
				>
					instagram
				</TextLink>
				<Spacer size={2} />
				<TextLink onClick={() => window.open('https://twitter.com/twanluttik')}>
					twitter
				</TextLink>
				<Spacer size={2} />
				<TextLink onClick={() => window.open('https://github.com/twanluttik')}>
					github
				</TextLink>
				<Spacer size={2} />
				<TextLink
					onClick={() => window.open('https://linkedin.com/in/twanluttik')}
				>
					linkedin
				</TextLink>
				<Spacer size={40} />
			</BoxWrapper>
		</HomeBody>
	);
};

const TextLink = styled.p`
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

const CardItem = styled(Row)`
	border: solid 2px #132044;
	background-color: #0a1224;
	border-radius: 8px;
	padding: 10px 12px;
	cursor: pointer;
	transition: transform 0.1s ease-in-out;

	p {
		font-weight: 300;
		opacity: 0.7;
	}

	&:hover {
		transform: translateY(-2px);
		p {
			text-decoration: underline;
			font-weight: 300;
		}
	}
`;

const HomeBody = styled.div`
	color: white;
	background-color: #090e1c;
	display: flex;
	flex: 1;
	min-height: 100%;
`;

const ProfileImg = styled.img`
	height: 200px;
	width: 200px;
	border-radius: 8px;
	box-shadow: 0px 0px 14px 5px #ffffff12;
`;

export default Home;
