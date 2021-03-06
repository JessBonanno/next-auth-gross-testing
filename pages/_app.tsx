import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Provider } from '../context/RootContext';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<SessionProvider session={pageProps.session}>
			<Provider >
				<Component {...pageProps} />
			</Provider>
		</SessionProvider>
	);
};

export default App;