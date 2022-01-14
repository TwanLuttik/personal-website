import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import styled from 'styled-components';
import Head from 'next/head';
import NextHead from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return <PageBody>
		<NextHead>
			<title>Twan Luttik</title>
			<meta name="theme-color" content="#090e1c" />
		</NextHead>
		<Component {...pageProps} />
		<Footer />
	</PageBody>;
}

const PageBody = styled.div`
  background-color: #090e1c;
  height: calc(100% - 60px);
`;

export default MyApp;
