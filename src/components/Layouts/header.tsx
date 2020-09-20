import React from 'react';
import styled from 'styled-components';
import { logo } from '../../assets';

const Container = styled.div`
	position: fixed;
	background-color: #22232d;
	top: 0;
	left: 0;
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 1440px;
	z-index: 999;
`;

const InnerContainer = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1240px;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 92px;
		height: 25px;
	}
	p {
		cursor: pointer;
		margin: 0;
		margin-left: 60px;
		font-size: 13px;
		color: #fff;
		font-weight: 500;
	}
`;
export const Header = () => {
	const h = window.innerHeight;
	return (
		<Container>
			<InnerContainer>
				<img src={logo} alt='' />
				<div style={{ flex: 1 }} />
				<p
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
					}}
				>
					홈
				</p>
				<p
					onClick={() => {
						window.scrollTo({
							top: h,
							behavior: 'smooth',
						});
					}}
				>
					팀원
				</p>
				<p
					onClick={() => {
						window.scrollTo({
							top: h * 2,
							behavior: 'smooth',
						});
					}}
				>
					게임
				</p>
				<p
					onClick={() => {
						window.scrollTo({
							top: h * 5,
							behavior: 'smooth',
						});
					}}
				>
					다운로드
				</p>
			</InnerContainer>
		</Container>
	);
};
