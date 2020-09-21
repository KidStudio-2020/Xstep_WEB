import React from 'react';
import { MainContainer } from './pages';
import { Helmet } from 'react-helmet';
import { default as og_image } from './styles/image.png';
function App() {
	return (
		<>
			<Helmet>
				<meta property='og:image' content={og_image} />
			</Helmet>
			<MainContainer />
		</>
	);
}

export default App;
