import React from 'react';
import styled from 'styled-components';
import { PageContainer, InnerContainer, MobilePageContainer } from '../components';
import { download_logo, apple, android } from '../assets';
import { isMobile } from 'react-device-detect';

const ContentHeader = styled.div`
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
	img {
		width: 540px;
		margin-bottom: 64px;
	}
	.des {
		margin: 0;
		font-size: 48px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 64px;
	}
	.downloadLink {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		width: 270px;
		border: solid 1.5px #ffffff;
		border-radius: 4px;
		font-size: 20px;
		font-weight: 500;
		img {
			width: 23px;
			margin: 0;
			margin-right: 20px;
		}
	}
	margin-bottom: 3vh;
`;

const MobileContainer = styled.div`
	width: 100%;
	height: 100%;
	color: #fff;
	padding: 10% 0 12% 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.title {
		font-weight: bold;
		font-size: 30px;
		margin: 0;
	}
	img {
		width: 62.5vw;
		max-width: 300px;
	}
	.des {
		margin: 0;
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 64px;
	}
	.downloadLink {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		width: 270px;
		border: solid 1.5px #ffffff;
		border-radius: 4px;
		font-size: 20px;
		font-weight: 500;
		img {
			width: 23px;
			margin: 0;
			margin-right: 20px;
		}
	}
`;
export const MainDownloadPage = () => {
	return (
		<div id='download'>
			{isMobile ? (
				<MobilePageContainer background='#22232d'>
					<MobileContainer>
						<p className='title'>다운로드</p>
						<div style={{ flex: 1, maxHeight: '100px' }} />
						<img src={download_logo} alt='' />
						<div style={{ flex: 1 }} />
						<p className='des'>
							이젠, 리듬 게임을 세로로
							<br />
							플레이해보세요!
						</p>
						<a
							href='https://play.google.com/store/apps/details?id=com.Idiots.XStep&fbclid=IwAR1AUsMDSIsShrgyl_ZDrpp2joY7_9lRWPi9tCXAuJ1a9hJTIHAIDfRJO28'
							className='downloadLink'
							style={{ marginBottom: '21px' }}
						>
							<img src={android} alt='' />
							Android
						</a>
						<a 
							onClick={
								function (event){
								alert('IOS 버전은 스토어에 올라가는중입니다! 잠시만 기다려주세요!.')
							   }
			    			   }
							className='downloadLink'>
							<img src={apple} alt='' />
							iOS
						</a>
					</MobileContainer>
				</MobilePageContainer>
			) : (
				<PageContainer background='#22232d'>
					<InnerContainer>
						<ContentHeader>
							<p className='title'>다운로드</p>
							<img src={download_logo} alt='' />
							<p className='des'>
								이젠, 리듬 게임을 세로로
								<br />
								플레이해보세요!
							</p>
							<div style={{ display: 'flex' }}>
								<a
									href='https://play.google.com/store/apps/details?id=com.Idiots.XStep&fbclid=IwAR1AUsMDSIsShrgyl_ZDrpp2joY7_9lRWPi9tCXAuJ1a9hJTIHAIDfRJO28'
									target='_blank'
									className='downloadLink'
									style={{ marginRight: '70px' }}
								>
									<img src={android} alt='' />
									Android
								</a>
								<a 
									onClick={function (event){
										alert('IOS 버전은 스토어에 올라가는중입니다! 잠시만 기다려주세요!.')
									   }
								   }
									className='downloadLink'>
									<img src={apple} alt='' />
									iOS
								</a>
							</div>
						</ContentHeader>
					</InnerContainer>
				</PageContainer>
			)}
		</div>
	);
};
