import type { NextPage } from 'next';
import NextHead from 'next/head';
import styled from 'styled-components';
import TwanImg from '../public/twan.png';
import { BoxWrapper, Row, Spacer } from '../components';

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
					{emoijs.map((item, index) => <Row key={index}>
						<p>{item}</p>
						{emoijs?.length - 1 !== index && <p style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 5, opacity: 0.4 }}>/</p>}
					</Row>)}
				</Row>
				<Spacer size={10} />
				<p style={{ fontSize: 38 }}>Twan Luttik</p>
				<Spacer size={40} />
				<ProfileImg src={TwanImg.src} height={200} width={200} alt={'twan-picture'} />
				<Spacer size={40} />
				<p style={{ fontSize: 17, opacity: 0.4, fontStyle: 'italic' }}>You can follow my social at @twanluttik</p>

			</BoxWrapper>
		</HomeBody>
	);
};


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
