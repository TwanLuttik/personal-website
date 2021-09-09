import * as React from 'react';
import styled from 'styled-components';
import Script from 'next/script';
import { useEffect } from 'react';

export const GoogleAnalytics: React.FC = ({}) => {
	useEffect(() => {
		console.log('google anayltics');
	}, []);
	return (
		<>
			<Script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</>
	);
};

const GoogleAnalyticsBody = styled.div`
	flex: 1;
`;
