import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { throttle } from 'lodash';
import { PageContainer, InnerContainer } from '../components';
import { isMobile } from 'react-device-detect';
const content_play = 'https://firebasestorage.googleapis.com/v0/b/xstep-dd16e.appspot.com/o/src%2Fmockup%2Fplay-mockup%402x.png?alt=media&token=659c0f77-471f-407f-9796-184be2bbcee5'
const content_home = 'https://firebasestorage.googleapis.com/v0/b/xstep-dd16e.appspot.com/o/src%2Fmockup%2Fhome-mockup%402x.png?alt=media&token=9729e6e3-970e-40ff-a5e8-4c6e12ffb187'
const content_splash = 'https://firebasestorage.googleapis.com/v0/b/xstep-dd16e.appspot.com/o/src%2Fmockup%2Fsplash-mockup%402x.png?alt=media&token=88cb5c49-f7f0-4659-b68a-b55a07a25a70'
const Container = styled.div`
	width: 100%;
	height: 300vh;
	background-color: #d8e2eb;
	min-width: 1440px;
`;

const MobileContainer = styled.div`
	width: 100vw;
	background-color: #d8e2eb;
	height: 300vh;
`;

const ContentContainer = styled.div<{ isFixed: boolean }>`
	width: 100%;
	height: 40%;
	display: flex;
	align-items: center;
	${({ isFixed }) =>
		isFixed &&
		css`
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
		`}
	background-color: #d8e2eb;
	justify-content: center;
	padding-right: 20px;
	p {
		margin: 0;
	}
	img {
		transition: 0.2s;
		width: 20vw;
		max-width: 462px;
	}
	.title {
		color: #22232d;
		font-size: 48px;
		letter-spacing: 1px;
		white-space: pre;
		line-height: 1.25;
		margin: 32px 0;
		font-weight: bold;
	}
	.des {
		white-space: pre;
		font-size: 20px;
		line-height: 1.5;
		font-weight: 500;
		color: #666;
	}
	.buttonList {
		button {
			transition: 0.2s;

			border: 0;
			width: 90px;
			height: 48px;
			font-size: 16px;
			font-weight: bold;
			color: #888;
			cursor: pointer;
		}
		.left {
			border-radius: 10px 0 0 10px;
		}
		.right {
			border-radius: 0 10px 10px 0;
		}
	}
`;

const MobileContentContainer = styled.div<{ isFixed: boolean }>`
	width: 100%;
	padding: 10%;
	height: 100%;
	/* height: 40%; */
	${({ isFixed }) =>
		isFixed &&
		css`
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
		`}
	display :flex;
	flex-direction: column;
	align-items: center;
	background-color: #d8e2eb;
	p {
		margin: auto;
		text-align: center;
	}
	img {
		transition: 0.2s;
		width: 40vw;
		max-width: 181px;
		margin-left: -8%;
	}
	.title {
		color: #22232d;
		font-size: 24px;
		letter-spacing: 1px;
		white-space: pre;
		line-height: 1.25;
		margin: 32px 0;
		font-weight: bold;
	}
	.des {
		white-space: pre;
		font-size: 16px;
		line-height: 1.5;
		font-weight: 500;
		color: #666;
	}
	.buttonList {
		button {
			transition: 0.2s;
			border: 0;
			width: 90px;
			height: 48px;
			font-size: 16px;
			font-weight: bold;
			color: #888;
			cursor: pointer;
		}
		.left {
			border-radius: 10px 0 0 10px;
		}
		.right {
			border-radius: 0 10px 10px 0;
		}
	}
`;

const contentData = [
	{
		img: content_splash,
		title: '세로로 즐기는 완전히\n새로운 리듬게임!',
		des:
			'엄지 플레이 유저 및 태블릿이 아닌 일반 디바이스라도 실력의 차이가\n없도록 특이한 게임 메카닉을 적용하였습니다. 디바이스를 들고\n플레이하는 엄지 플레이의 이점이 충분하도록 설계했고,\n디바이스를 내려놓고 플레이할 수 없는 환경에서도 \n최상의 플레이가 가능하도록 하였습니다.',
	},
	{
		img: content_home,
		title: '세로로 즐기는 완전히\n새로운 리듬게임!',
		des:
			'엄지 플레이 유저 및 태블릿이 아닌 일반 디바이스라도 실력의 차이가\n없도록 특이한 게임 메카닉을 적용하였습니다. 디바이스를 들고\n플레이하는 엄지 플레이의 이점이 충분하도록 설계했고,\n디바이스를 내려놓고 플레이할 수 없는 환경에서도 \n최상의 플레이가 가능하도록 하였습니다.',
	},
	{
		img: content_play,
		title: '세로로 즐기는 완전히\n새로운 리듬게임!',
		des:
			'엄지 플레이 유저 및 태블릿이 아닌 일반 디바이스라도 실력의 차이가\n없도록 특이한 게임 메카닉을 적용하였습니다. 디바이스를 들고\n플레이하는 엄지 플레이의 이점이 충분하도록 설계했고,\n디바이스를 내려놓고 플레이할 수 없는 환경에서도 \n최상의 플레이가 가능하도록 하였습니다.',
	},
];

const MobileContentData = [
	{
		img: content_splash,
		title: '세로로 즐기는 완전히\n새로운 리듬게임!',
		des:
			'엄지 플레이 유저 및 태블릿이 아닌\n 일반 디바이스라도 실력의 차이가\n없도록 특이한 게임 메카닉을 \n적용하였습니다.',
	},
	{
		img: content_home,
		title: '세로로 즐기는 완전히\n새로운 리듬게임!',
		des:
			'엄지 플레이 유저 및 태블릿이 아닌\n 일반 디바이스라도 실력의 차이가\n없도록 특이한 게임 메카닉을 \n적용하였습니다.',
	},
	{
		img: content_play,
		title: '세로로 즐기는 완전히\n새로운 리듬게임!',
		des:
			'엄지 플레이 유저 및 태블릿이 아닌\n 일반 디바이스라도 실력의 차이가\n없도록 특이한 게임 메카닉을 \n적용하였습니다.',
	},
];
// 외부 스크롤 판별하여 fixed
const useScroll = (handler: any) => {
	const callback = useCallback(handler, []);
	useEffect(() => {
		const windowH = window.innerHeight;
		const updateScroll = (e: any) => {
			if (!e.target.scrollingElement) return;
			const { scrollTop } = e.target.scrollingElement;
			return scrollTop <= windowH * 2 || scrollTop >= windowH * 4.2 ? callback(false) : callback(true);
		};
		const scrollListener = throttle(updateScroll, 20);
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, [callback]);
};
// 내부 스크롤 위치 판별하여 이미지 교체
const useScroll2 = (handler: any) => {
	const callback = useCallback(handler, []);
	useEffect(() => {
		const windowH = window.innerHeight;
		const updateScroll = (e: any) => {
			if (!e.target.scrollingElement) return;
			const { scrollTop } = e.target.scrollingElement;
			if (scrollTop >= windowH * 3.3) callback(2);
			else if (scrollTop >= windowH * 2.3) callback(1);
			else callback(0);
			// return scrollTop <= windowH * 2 || scrollTop >= windowH * 4.2 ? callback(false) : callback(true);
		};
		const scrollListener = throttle(updateScroll, 20);
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	}, [callback]);
};

export const MainContentPage = () => {
	const [page, setPage] = useState(0);
	const [isFixed, setFixed] = useState(false);
	useScroll((flag: boolean) => {
		setFixed(flag);
	});
	useScroll2((flag: number) => {
		setPage(flag);
	});
	return (
		<>
			{isMobile ? (
				<MobileContainer>
					<MobileContentContainer isFixed={isFixed}>
						<div className='buttonList'>
							<button
								className='left'
								style={page === 0 ? { backgroundColor: '#0081dd', color: '#fff' } : { fontWeight: 'normal' }}
								onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
							>
								Splash
							</button>
							<button
								style={page === 1 ? { backgroundColor: '#0081dd', color: '#fff' } : { fontWeight: 'normal' }}
								onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
							>
								Home
							</button>
							<button
								className='right'
								style={page === 2 ? { backgroundColor: '#0081dd', color: '#fff' } : { fontWeight: 'normal' }}
								onClick={() => window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' })}
							>
								Play
							</button>
						</div>
						<div style={{ flex: 1, maxHeight: '120px' }} />
						<img src={MobileContentData[page].img} />
						<div>
							<p className='title'>{MobileContentData[page].title}</p>
							<p className='des'>{MobileContentData[page].des}</p>
						</div>
					</MobileContentContainer>
				</MobileContainer>
			) : (
				<Container>
					<InnerContainer>
						<ContentContainer isFixed={isFixed}>
							<img src={contentData[page].img} />
							<div style={{ flex: 1, maxWidth: '240px' }} />
							<div>
								<div className='buttonList'>
									<button
										className='left'
										style={page === 0 ? { backgroundColor: '#0081dd', color: '#fff' } : { fontWeight: 'normal' }}
										onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
									>
										Splash
									</button>
									<button
										style={page === 1 ? { backgroundColor: '#0081dd', color: '#fff' } : { fontWeight: 'normal' }}
										onClick={() => window.scrollTo({ top: window.innerHeight * 2.7, behavior: 'smooth' })}
									>
										Home
									</button>
									<button
										className='right'
										style={page === 2 ? { backgroundColor: '#0081dd', color: '#fff' } : { fontWeight: 'normal' }}
										onClick={() => window.scrollTo({ top: window.innerHeight * 3.7, behavior: 'smooth' })}
									>
										Play
									</button>
								</div>
								<p className='title'>{contentData[page].title}</p>
								<p className='des'>{contentData[page].des}</p>
							</div>
						</ContentContainer>
					</InnerContainer>
				</Container>
			)}
		</>
	);
};
