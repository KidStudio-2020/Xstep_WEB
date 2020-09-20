import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type PageProps = {
	background: string;
	// children: any;
};

const Container = styled.div<{ background: string }>`
	height: 100vh;
	width: 100vw;
	position: relative;
	background-color: ${({ background }) => background};
`;

export const MobilePageContainer: FunctionComponent<PageProps> = ({ background, children }) => {
	return <Container background={background}>{children}</Container>;
};
