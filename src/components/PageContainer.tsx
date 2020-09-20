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
	min-width: 1440px;
	background-color: ${({ background }) => background};
`;
export const InnerContainer = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: auto;
	height: 100%;
`;
export const PageContainer: FunctionComponent<PageProps> = ({ background, children }) => {
	return <Container background={background}>{children}</Container>;
};
