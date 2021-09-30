import React, { useState } from 'react';
import styled from 'styled-components';

import MovieDataInfo from './components/MovieDataInfo/MovieDataInfo';

function Details() {
  const [isClicked, setIsClicked] = useState(1);

  const onListClick = (e, input) => {
    setIsClicked(e.target.value);
  };

  return (
    <DetailsOuterWrapper>
      <PosterSectionOuterWrapper>
        <PosterInfoWrapper>
          <PosterSectionWrapper>
            <EventTitle>#빵원티켓+</EventTitle>
            <MovieTitle>샹치와 텐 링즈의 전설</MovieTitle>
            <MovieTitleDescription>
              Shang-Chi and the Legend of the Ten Rings
            </MovieTitleDescription>

            <ButtonWrapper>
              <Button>
                <ButtonIcon>
                  <i className="far fa-heart"></i>
                </ButtonIcon>
                729
              </Button>
              <Button>
                <ButtonIcon>
                  <i className="fas fa-share-alt"></i>
                </ButtonIcon>
                공유하기
              </Button>
            </ButtonWrapper>
          </PosterSectionWrapper>

          <PosterMovieInfoWrapper>
            <PosterMovieInfo>
              <PosterKey>실관람 평점</PosterKey>
              <ColouredPosterBigNumber>8.4</ColouredPosterBigNumber>
            </PosterMovieInfo>
            <PosterMovieInfo>
              <PosterKey>예매율</PosterKey>

              <InfoWrapper>
                <PosterBigNumber>8</PosterBigNumber>
                <PosterSmallNumber>위 (2%)</PosterSmallNumber>
              </InfoWrapper>
            </PosterMovieInfo>
            <PosterMovieInfo>
              <PosterKey>누적관객수</PosterKey>
              <PosterBigNumber>1,682,843</PosterBigNumber>
            </PosterMovieInfo>
          </PosterMovieInfoWrapper>
        </PosterInfoWrapper>

        <MoviePosterWrapper>
          <MoviePoster>
            <MoviePosterImage src="https://img.megabox.co.kr/SharedImg/2021/08/25/8ca6osu5ERkgXqG4E36Qpjo2foQag8VK_420.jpg" />
          </MoviePoster>
          <TicketingButton>예매</TicketingButton>
        </MoviePosterWrapper>
      </PosterSectionOuterWrapper>
      <PosterWrapper>
        <ForWardBackgroundWrapper />
        <Poster></Poster>
        <BackwardBackgroundWrapper />
      </PosterWrapper>
      <MovieInfoList>
        {movieInfoList.map((item, index) => {
          return isClicked === index ? (
            <MovieInfoClicked value={index} key={index} onClick={onListClick}>
              {item}
            </MovieInfoClicked>
          ) : (
            <MovieInfo value={index} key={index} onClick={onListClick}>
              {item}
            </MovieInfo>
          );
        })}
      </MovieInfoList>

      <DetailsInfoWrapper>
        <Description>
          가장 강력한 운명의 적과 마주하게된 제임스 본드의 마지막 미션이
          시작된다
        </Description>
      </DetailsInfoWrapper>

      <MovieDataInfo />
    </DetailsOuterWrapper>
  );
}

const movieInfoList = ['주요정보', '실관람평', '무비포스트', '예고편/스틸컷'];

const MovieInfoList = styled.ul`
  display: flex;
  width: 1100px;
  margin: 30px 0;
`;

const MovieInfoClicked = styled.li`
  display: inline-block;
  width: 25%;

  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  border: 1px solid #503396;
  border-bottom: 0;
`;

const MovieInfo = styled.li`
  display: inline-block;
  width: 25%;

  border-top: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  border-bottom: 1px solid #503396;
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  &:first-child {
    border: 1px solid #503396;
    border-bottom: 0;
  }
`;

const Description = styled.span`
  font-size: 1.6em;
  color: #444;
  font-weight: 500;
  mamrgin-bottom: 30px;
`;

const ButtonIcon = styled.span`
  margin-right: 10px;
`;

const EventTitle = styled.span`
  color: #ccc;
`;

const TicketingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 45px;
  border-radius: 8px;
  background: #329eb1;
  color: white;
  font-weight: 700;
  z-index: 9999;
`;

const MoviePosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;

const PosterSectionOuterWrapper = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  flex-direction: row;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MoviePosterImage = styled.img`
  max-width: 100%;
  margin-bottom: 15px;
  z-index: 99999;
`;

const MoviePoster = styled.div`
  position: relative;
  width: 260px;
  z-index: 999999999;
`;

const PosterMovieInfo = styled.div`
  display: flex;
  width: 120px;
  flex-direction: column;
`;

const ColouredPosterBigNumber = styled.div`
  font-size: 2.3em;
  font-family: Roboto, Dotum, '돋움', sans-serif;
  color: #329eb1;
`;
const PosterKey = styled.div`
  font-size: 15px;
  color: #ccc;
`;

const PosterSmallNumber = styled.span`
  font-size: 14px;
  color: #ccc;
  margin-bottom: -15px;
`;

const PosterBigNumber = styled.span`
  font-size: 2.3em;
  font-family: Roboto, Dotum, '돋움', sans-serif;
  color: white;
`;

const PosterMovieInfoWrapper = styled.div`
  display: flex;
`;

const PosterSectionWrapper = styled.div`
  width: 500px;
`;

const ButtonWrapper = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  border: 1px solid #706f72;
  border-radius: 4px;
  color: white;
  margin-right: 10px;
  font-size: 0.7em;
`;

const MovieTitle = styled.div`
  font-size: 3em;
  font-weight: 400;
  line-height: 1.2;
  color: white;
  padding-bottom: 10px;
`;

const MovieTitleDescription = styled.div`
  font-size: 1.3em;
  font-family: Roboto;
  color: white;
  margin-bottom: 10px;
`;

const PosterInfoWrapper = styled.div`
  position: relative;
  width: 500px;
  padding-top: 50px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: 520px;
  flex-shrink: 0;
  z-index: 900;
`;

const DetailsOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsInfoWrapper = styled.div`
  width: 1100px;
  margin-bottom: 30px;
`;

const Poster = styled.div`
  width: 1100px;
  flex-shirink: 0;
  height: 520px;
  background-image: url('https://img.megabox.co.kr/SharedImg/2021/08/25/8ca6osu5ERkgXqG4E36Qpjo2foQag8VK_420.jpg');
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: 80% auto;
  opacity: 0.65;
  z-index: 10;
`;

const ForWardBackgroundWrapper = styled.div`
  z-index: 90;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #0f0f0f 20%,
    rgba(15, 15, 15, 30%) 50%,
    #0f0f0f 80%
  );
`;

const BackwardBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #0f0f0f 20%,
    rgba(125, 125, 125, 1) 50%,
    #0f0f0f 80%
  );
`;

const PosterWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 520px;
  flex-shrink: 0;
`;

export default Details;
