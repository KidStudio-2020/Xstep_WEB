import React from 'react';
import styled from 'styled-components';
import { PageContainer, InnerContainer, MobilePageContainer } from '../components';
import { yong, shim, hun, facebook_white } from '../assets';
import { isMobile } from 'react-device-detect';

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 80px 0;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.title {
		font-weight: bold;
		font-size: 36px;
		margin-top: 0;
		margin-bottom: 15vh;
	}
	.profileBox {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 3vh;
		.profile {
			display: flex;
			flex-direction: column;
			align-items: center;
			a {
				display: block;
				background-image: url(${facebook_white});
				background-size: cover;
				width: 36px;
				height: 36px;
				margin-top: 16px;
			}
			p {
				margin: 0;
			}
			.job {
				margin-top: 8px;
				font-size: 24px;
			}
			.name {
				margin-top: 30px;
				font-size: 24px;
				font-weight: bold;
			}
			img {
				min-width: 280px;
				width: 16.7vw;
				max-width: 320px;
			}
		}
	}
`;
const MobileContentContainer = styled.div`
	.title {
		font-weight: bold;
		font-size: 32px;
		margin-top: 0;
		margin-bottom: 8vh;
		color: #fff;
	}
	width: 100vw;
	height: 100vh;
	padding: 15% 12%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.profile {
		display: flex;
		align-items: center;
		color: #fff;
		width: 100%;
		justify-content: center;
		a {
			display: block;
			background-image: url(${facebook_white});
			background-size: cover;
			width: 36px;
			height: 36px;
			margin-top: 16px;
		}
		p {
			margin: 0;
		}
		.job {
			margin-top: 4px;
			font-size: 20px;
		}
		.name {
			font-size: 22px;
			font-weight: bold;
		}
		img {
			min-width: 0;
			width: 29.2vw;
			max-width: 140px;
		}
	}
`;
export const MainTeamPage = () => {
	return (
		<div id='team'>
			{isMobile ? (
				<MobilePageContainer background={'#22232d'}>
					<MobileContentContainer>
						<p className='title'>함께하는 사람들</p>
						<div className='profile'>
							<img src={yong} alt='' />
							<div style={{ flex: 1 }} />
							<div style={{ width: '108px' }}>
								<p className='name'>정용우</p>
								<p className='job'>팀장</p>
								<a href='https://www.facebook.com/profile.php?id=100014166107759' target='_blank' />
							</div>
						</div>
						<div style={{ flex: 1, maxHeight: '80px' }} />
						<div className='profile'>
							<img src={shim} alt='' />
							<div style={{ flex: 1 }} />
							<div style={{ width: '108px' }}>
								<p className='name'>심효근</p>
								<p className='job'>서버/웹 개발</p>
								<a href='https://www.facebook.com/shimhg02' className='fb' target='_blank' />
							</div>
						</div>
						<div style={{ flex: 1, maxHeight: '80px' }} />
						<div className='profile'>
							<img src={hun} alt='' />
							<div style={{ flex: 1 }} />
							<div style={{ width: '108px' }}>
								<p className='name'>전세훈</p>
								<p className='job'>게임 개발</p>
								<a href='https://www.facebook.com/twilivez' className='fb' target='_blank' />
							</div>
						</div>
					</MobileContentContainer>
				</MobilePageContainer>
			) : (
				<PageContainer background={'#22232d'}>
					<InnerContainer>
						<ContentContainer>
							<div style={{ flex: 1 }} />
							<p className='title'>함께하는 사람들</p>
							<div className='profileBox'>
								<div className='profile'>
									<img src={yong} alt='' />
									<p className='name'>정용우</p>
									<p className='job'>팀장</p>
									<a href='https://www.facebook.com/profile.php?id=100014166107759' target='_blank' />
								</div>
								<div style={{ flex: 1, maxWidth: '160px' }} />
								<div className='profile'>
									<img src={shim} alt='' />
									<p className='name'>심효근</p>
									<p className='job'>서버/웹 개발</p>
									<a href='https://www.facebook.com/shimhg02' className='fb' target='_blank' />
								</div>
								<div style={{ flex: 1, maxWidth: '160px' }} />
								<div className='profile'>
									<img src={hun} alt='' />
									<p className='name'>전세훈</p>
									<p className='job'>게임 개발</p>
									<a href='https://www.facebook.com/twilivez' className='fb' target='_blank' />
								</div>
							</div>
							<div style={{ flex: 1 }} />
						</ContentContainer>
					</InnerContainer>
				</PageContainer>
			)}
		</div>
	);
};
