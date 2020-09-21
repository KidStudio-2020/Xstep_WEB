import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { throttle } from 'lodash';
import { PageContainer, InnerContainer } from '../components';
import { isMobile } from 'react-device-detect';
const content_play =
	'https://firebasestorage.googleapis.com/v0/b/xstep-dd16e.appspot.com/o/src%2Fmockup%2Fplay-mockup%402x.png?alt=media&token=659c0f77-471f-407f-9796-184be2bbcee5';
const content_home =
	'https://firebasestorage.googleapis.com/v0/b/xstep-dd16e.appspot.com/o/src%2Fmockup%2Fhome-mockup%402x.png?alt=media&token=9729e6e3-970e-40ff-a5e8-4c6e12ffb187';
const content_splash =
	'https://firebasestorage.googleapis.com/v0/b/xstep-dd16e.appspot.com/o/src%2Fmockup%2Fsplash-mockup%402x.png?alt=media&token=88cb5c49-f7f0-4659-b68a-b55a07a25a70';
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
		isFixed
			? css`
					position: sticky;
					top: 0;
					left: 0;
					/* height: 100%;
					position: fixed;
					top: 0;
					left: 0; */
			  `
			: css`
					position: sticky;
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
		title: '리듬 게임은 \n역시 음악!',
		des:
			'Xstep만을 위해 직접 제작된 오리지널 수록곡과, \n유명 DJ의 리듬 게임 상용곡까지 다양한 곡들이 수록되고 있습니다. \n손바닥 위에서 하드코어 테크노를 즐겨보세요!',
	},
	{
		img: content_home,
		title: '뉴비부터 \n고인물까지!',
		des:
			'초심자부터 숙련자를 위한 5가지 난이도가 곡마다 준비되어 있습니다. \n꾸준히 플레이해보며 Extream 난이도까지 정복해보세요!',
	},
	{
		img: content_play,
		title: '엄지만으로도 문제 \n없는 세상 쉬운 조작!',
		des: '터치와 홀드, 슬라이드만 익히면 끝! \n중앙에서 날아오는 노트들을 잘 보고 \n리듬에 맞춰 처리하세요!',
	},
];

const MobileContentData = [
	{
		img: content_splash,
		title: '리듬 게임은 \n역시 음악!',
		des:
			'엄지 플레이 유저 및 태블릿이 아닌\n 일반 디바이스라도 실력의 차이가\n없도록 특이한 게임 메카닉을 \n적용하였습니다.',
	},
	{
		img: content_home,
		title: '뉴비부터 \n고인물까지',
		des:
			'엄지 플레이 유저 및 태블릿이 아닌\n 일반 디바이스라도 실력의 차이가\n없도록 특이한 게임 메카닉을 \n적용하였습니다.',
	},
	{
		img: content_play,
		title: '엄지만으로도 문제 \n없는 세상 쉬운 조작',
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
							<div style={{ width: '550px', height: '340px' }}>
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
