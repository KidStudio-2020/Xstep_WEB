import React from 'react';
import styled from 'styled-components';
import { PageContainer, InnerContainer, MobilePageContainer } from '../components';
import { path3, logo, MPath3 } from '../assets';
import { isMobile } from 'react-device-detect';
const info_mockup = 'https://firebasestorage.googleapis.com/v0/b/xstep-dd16e.appspot.com/o/src%2Fmockup%2Fmockup-xstep-3-1-copy%402x.png?alt=media&token=44a846f0-0ce0-4274-9b41-5db8aa1f1bfd'
const Path1 = styled.div`
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background-color: #d31b96;
	position: absolute;
	left: 26.5%;
	top: 85px;
`;
const Path2 = styled.div`
	width: 142px;
	height: 142px;
	background-color: #d31b96;
	position: absolute;
	border-radius: 50%;
	bottom: 10%;
	left: 2.7%;
`;
const Path3 = styled.img`
	position: absolute;
	right: 0;
	width: 13.6vw;
	top: -70px;
	bottom: 0;
	margin: auto 0;
`;
const Path4 = styled.div`
	width: 18vw;
	height: 18vw;
	background-color: #0081dd;
	position: absolute;
	left: -16vw;
	border-radius: 0 100% 100% 0;
	top: -70px;
	bottom: 0;
	margin: auto 0;
`;

const ContentContainer = styled.div`
	/* padding-top: 70px; */
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	.mockup {
		width: 330px;
		margin-right: 20px;
		z-index: 998;
	}
	.textBox {
		.des {
			font-weight: 500;
			font-size: 20px;
		}
		button {
			cursor: pointer;
			width: 220px;
			display: block;
			height: 64px;
			border-radius: 16px;
			border: solid 2px #0081dd;
			background-color: #0081dd;
			font-size: 20px;
			line-height: 64px;
			text-align: center;
			color: #fff;
			margin-top: 48px;
		}
		p {
			margin: 0;
			font-size: 48px;
			color: #fff;
			font-weight: bold;
			span {
				color: #0081dd;
			}
		}
		.line {
			width: 67px;
			height: 9px;
			border-radius: 6px;
			background-color: #0081dd;
			margin: 32px 0;
		}
	}
`;

const MPath1 = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background-color: #d31b96;
	position: absolute;
	left: 45.8%;
	top: 40px;
`;
const MPath2 = styled.img`
	height: 60%;
	/* height: 50%; */
	position: absolute;
	top: 10px;
	right: 0%;
`;
const MPath4 = styled.div`
	width: 38px;
	height: 38px;
	background-color: #d31b96;
	position: absolute;
	left: -10px;
	top: 35%;
	border-radius: 50%;
`;
const MobileContainer = styled.div`
	padding: 0 10.4%;
	padding-top: 40px;
	.logo {
		width: 92px;
		height: 25px;
	}
	.mock {
		width: 35vw;
		max-width: 150px;
		z-index: 100;
		margin: 7% 0;
	}
	.innerBox {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.textBox {
		.des {
			margin-top: 20px;
			font-weight: 500;
			font-size: 14px;
		}
		button {
			cursor: pointer;
			width: 220px;
			display: block;
			height: 64px;
			border-radius: 16px;
			border: solid 2px #0081dd;
			background-color: #0081dd;
			font-size: 20px;
			line-height: 64px;
			text-align: center;
			color: #fff;
			margin-top: 48px;
		}
		p {
			margin: 0;
			text-align: center;
			font-size: 28px;
			color: #fff;
			font-weight: bold;
			span {
				color: #0081dd;
			}
		}
	}
`;

export const MainInfoPage = () => {
	return (
		<div id='info'>
			{isMobile ? (
				<MobilePageContainer background='#22232d'>
					<MPath1 />
					<MPath2 src={MPath3} />
					<MPath4 />
					<MobileContainer>
						<img className='logo' src={logo} alt='' />
						<div className='innerBox'>
							<img className='mock' src={info_mockup} alt='' />
							<div className='textBox'>
								<p>
									<span>세로로</span> 즐기는 완전히
								</p>
								<p>
									<span>새로운</span> 리듬게임<span style={{ color: '#d31b96' }}>!</span>
								</p>
								<p className='des'>
									세로로 잡고 플레이하기 간편한 리듬 게임,
									<br />
									Play Store와 App Store에서 만나보세요!
								</p>
								<button
									onClick={() => {
										window.scrollTo({
											top: window.innerHeight,
											behavior: 'smooth',
										});
									}}
									style={{ marginTop: '30px' }}
								>
									더 알아보기
								</button>
							</div>
						</div>
					</MobileContainer>
				</MobilePageContainer>
			) : (
				<PageContainer background='#22232d'>
					<Path1 />
					<Path2 />
					<Path3 src={path3} alt='' />
					<Path4 />
					<InnerContainer>
						<ContentContainer>
							<div className='textBox'>
								<p>
									<span>세로로</span> 즐기는 완전히
								</p>
								<p>
									<span>새로운</span> 리듬게임<span style={{ color: '#d31b96' }}>!</span>
								</p>
								<div className='line'></div>
								<p className='des'>
									세로로 잡고 플레이하기 간편한 리듬 게임,
									<br />
									Play Store와 App Store에서 만나보세요!
								</p>
								<button
									onClick={() => {
										window.scrollTo({
											top: window.innerHeight,
											behavior: 'smooth',
										});
									}}
								>
									더 알아보기
								</button>
							</div>
							<div style={{ flex: 1 }} />
							<img className='mockup' src={info_mockup} alt='' />
						</ContentContainer>
					</InnerContainer>
				</PageContainer>
			)}
		</div>
	);
};
