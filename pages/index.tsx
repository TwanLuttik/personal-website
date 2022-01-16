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
			<Spacer size={30} />
			<BoxWrapper>
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
				<Spacer size={20} />
				<p style={{ color: 'white', opacity: 0.3, marginBottom: 15 }}>
					My work/projects:
				</p>
				<Row>
					<Icon name="mobile" size={22} color="white" />
					<Spacer size={5} h />
					<TextLink
						onClick={() => window.open('https://twitter.com/yourstatusapp')}
					>
						YourStatus App
					</TextLink>
				</Row>
				<Spacer size={10} />
				<Row>
					<Icon name="globe" size={22} color="white" />
					<Spacer size={5} h />
					<TextLink onClick={() => window.open('https://publicwork.space')}>
						publicwork.space
					</TextLink>
				</Row>
				<Spacer size={10} />
				<Row>
					<Icon name="magic" size={22} color="white" />
					<Spacer size={5} h />
					<TextLink onClick={() => window.open('https://ohsnapmagic.com')}>
						ohsnapmagic.com
					</TextLink>
				</Row>

				<Spacer size={40} />
				<p style={{ fontSize: 17, opacity: 0.4, fontStyle: 'italic' }}>
					You can follow my social at @twanluttik
				</p>
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

const HomeBody = styled.div`
	color: white;
	height: 100%;
	background-color: #090e1c;
`;

const ProfileImg = styled.img`
	height: 200px;
	width: 200px;
	border-radius: 8px;
	box-shadow: 0px 0px 14px 5px #ffffff12;
`;

export default Home;
