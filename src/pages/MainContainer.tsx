import React, { useState } from 'react';
import styled from 'styled-components';
import { Footer, Header } from '../components';

import { MainInfoPage } from './MainInfoPage';
import { MainTeamPage } from './MainTeamPage';
import { MainDownloadPage } from './MainDownloadPage';
import { MainContentPage } from './MainContentPage';
import { isMobile } from 'react-device-detect';
const Container = styled.div`
	width: 100%;
	position: relative;
`;

export const MainContainer = () => {
	return (
		<Container>
			{!isMobile && <Header />}
			<MainInfoPage />
			<MainTeamPage />
			<MainContentPage />
			<MainDownloadPage />
			<Footer />
		</Container>
	);
};
