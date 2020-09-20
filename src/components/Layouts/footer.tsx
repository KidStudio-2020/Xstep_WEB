import React from 'react';
import styled, { css } from 'styled-components';
import { logo, facebook, github, youtube } from '../../assets';

import { isMobile } from 'react-device-detect';
const Container = styled.div<{ isMobile: boolean }>`
	width: 100%;
	height: ${({ isMobile }) => (isMobile ? '80px' : '200px')};
	min-width: ${({ isMobile }) => (isMobile ? 0 : '1440px')};
	background-color: #f0f0f0;
`;
const InnerContainer = styled.div<{ isMobile: boolean }>`
	${({ isMobile }) =>
		isMobile
			? css`
					padding: 6%;
					img {
						width: 59px;
						height: 16px;
						margin-bottom: 8px;
						margin-right: 10px;
					}
					p {
						margin: 0;
						color: #22232d;
						font-weight: bold;
						font-size: 10px;
					}
					.circle {
						width: 32px;
						margin-left: 19px;
						height: 32px;
						display: flex;
						align-items: center;
						border-radius: 50%;
						background-color: #fff;
						justify-content: center;
						img {
							height: 14px;
							margin: 0;
						}
					}
			  `
			: css`
					img {
						width: 92px;
						height: 25px;
						margin-bottom: 8px;
					}
					p {
						margin: 0;
						color: #22232d;
						font-weight: bold;
						font-size: 12px;
					}
					.circle {
						width: 42px;
						margin-left: 32px;
						height: 42px;
						display: flex;
						align-items: center;
						border-radius: 50%;
						background-color: #fff;
						justify-content: center;
						img {
							height: 22px;
							margin: 0;
						}
					}
			  `}
	width: 100%;
	height: 100%;
	max-width: 1240px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Footer = () => {
	return (
		<Container isMobile={isMobile}>
			<InnerContainer isMobile={isMobile}>
				<div style={isMobile ? { display: 'flex' } : {}}>
					<img src={logo} alt='' />
					<p>
						© 2020 Xstep
						<br /> All Rights Reserved.
					</p>
				</div>
				<div style={{ flex: 1 }} />
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<a href='' className='circle'>
						<img src={github} alt='' />
					</a>
					<a href='' className='circle'>
						<img src={facebook} alt='' />
					</a>
					<a href='' className='circle'>
						<img src={youtube} alt='' />
					</a>
				</div>
			</InnerContainer>
		</Container>
	);
};
