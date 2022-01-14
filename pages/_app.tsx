import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import styled from 'styled-components';
import { Head } from 'next/document';

function MyApp({ Component, pageProps }: AppProps) {
	return <PageBody>
		<Head>
			<title>Twan Luttik</title>
			<meta name="theme-color" content="#090e1c" />
		</Head>
		<Component {...pageProps} />
		<Footer />
	</PageBody>;
}

const PageBody = styled.div`
  background-color: #090e1c;
  height: calc(100% - 60px);
  //height: 100%;
`;

export default MyApp;
