import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Movie({
  movieId,
  moviePoster,
  description,
  movieRating,
  movieTitle,
  advanceRate,
  releaseDate,
  movieLikes,
}) {
  return (
    <MovieCard>
      <MovieOrder>{movieId}</MovieOrder>
      <a href="#">
        <MoviePoster moviePoster={moviePoster}>
          <MoviePosterImage src={moviePoster} alt="" max-width="100%" />
          <MoviePosterDescription>{description}</MoviePosterDescription>
        </MoviePoster>
      </a>
      <TitleWrapper>
        <MovieRating movieRating={movieRating}>
          {movieRating === 0 ? 'All' : movieRating}
        </MovieRating>
        <MovieTitle>{movieTitle}</MovieTitle>
      </TitleWrapper>
      <RateDateWrapper>
        <Rate>예매율 {advanceRate + '%'}</Rate>
        <span>개봉일 {releaseDate.split('-').join('.')}</span>
      </RateDateWrapper>
      <LikesTicketWrapper>
        <LikesButton>
          <LikesIcon>
            <i className="far fa-heart"></i>
          </LikesIcon>
          <LikesCount>
            {parseInt(movieLikes / 1000) > 0
              ? (movieLikes / 1000).toFixed(1) + 'k'
              : movieLikes}
          </LikesCount>
        </LikesButton>
        <TicketingButton to="">예매</TicketingButton>
      </LikesTicketWrapper>
    </MovieCard>
  );
}

const MoviePosterDescription = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px 25px;
  color: white;
  top: 0;
  opacity: 0;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
  transition: 0.3s;
`;

const MoviePosterImage = styled.img`
  position: relative;
  max-width: 100%;
  height: 330px;
  background-image: url(${props => props.moviePoster});
  background-size: cover;
  margin-bottom: 15px;
`;

const MoviePoster = styled.div`
  position: relative;
  max-width: 100%;
  height: 330px;
  margin-bottom: 15px;
`;

const MovieRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #eee;
  background-color: ${props =>
    props.movieRating === 12
      ? '#1D8EF7'
      : props.movieRating === 15
      ? '#EBA010'
      : props.movieRating === 19
      ? '#E54D05'
      : '#64A90E'};
  border-radius: 100%;
  padding: 11px;
  font-size: 0.7em;
  font-weight: 400;
  font-family: NanumBarunGothic, Dotum, '돋움', sans-serif;
  margin-right: 7px;
  margin-top: 2px;
`;

const LikesCount = styled.span`
  font-size: 0.79em;
  color: #503396;
`;

const LikesTicketWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LikesIcon = styled.span`
  font-size: 1em;
  color: #b1b1b1;
  margin-right: 8px;
`;

const Rate = styled.span`
  margin-right: 8px;
  &: after {
    content: '';
    font-size: 3px;
    border-right: 1px solid #d8d9db;
    padding-left: 8px;
  }
`;

const RateDateWrapper = styled.div`
  margin-bottom: 10px;
  font-size: 0.95em;
  color: #444;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LikesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 36px;
  font-size: 0.9em;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  margin-right: 5px;
`;

const TicketingButton = styled(Link)`
  display: inline-block;
  width: 153px;
  height: 36px;
  font-size: 0.9em;
  background-color: #523b96;
  border: 1px solid #523b96;
  border-radius: 5px;
  color: white;
  line-height: 32px;
  text-align: center;
`;

const MovieOrder = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  font-size: 2em;
  font-style: italic;
  font-family: Roboto, Dotum, '돋움', sans-serif;
  z-index: 2;
`;

const MovieCard = styled.li`
  position: relative;
  width: 230px;
  height: 450px;
  flex-shrink: 0;
`;

const MovieTitle = styled.p`
  width: 100%;
  color: #444;
  overflow: hidden;
  margin-bottom: 5px;
  text-overflow: ellipsis '···';
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.2em;
  font-weight: 400;
  font-family: NanumBarunGothic, Dotum, '돋움', sans-serif;
`;

export default Movie;
