import React, { useState, useEffect } from 'react';
import { LOCAL_URL } from '../../config';
import WriteFirstStep from './WriteFirstStep';
import WriteSecondStep from './WriteSecondStep';
import styled from 'styled-components';

function MoviePostWrite({ history }) {
  const [myMovies, setMyMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState([]);
  const [isEnroll, setIsEnroll] = useState(false);

  const onClickEnroll = () => {
    selectMovie.length < 1
      ? alert('등록할 영화를 골라주세요')
      : setIsEnroll(prev => !prev);
  };

  useEffect(() => {
    fetch(`${LOCAL_URL}/data/harry.json`)
      .then(response => response.json())
      .then(data => {
        setMyMovies(data.MOVIE_LIST);
      });
  }, []);

  const onClickMovie = movie => {
    if (selectMovie.length < 1) {
      setSelectMovie([...selectMovie, movie]);
      return;
    }
    if (selectMovie.find(select => select === movie)) {
      setSelectMovie(selectMovie.filter(select => select !== movie));
    }
  };

  return (
    <AllPost>
      <PostTitle>무비포스트 작성</PostTitle>
      {!isEnroll ? (
        <WriteFirstStep
          myMovies={myMovies}
          selectMovie={selectMovie}
          onClickEnroll={onClickEnroll}
          onClickMovie={onClickMovie}
          history={history}
        />
      ) : (
        <WriteSecondStep
          selectMovie={selectMovie[0]}
          setSelectMovie={setSelectMovie}
          onClickEnroll={onClickEnroll}
          history={history}
          isEnroll={isEnroll}
          setIsEnroll={setIsEnroll}
        />
      )}
    </AllPost>
  );
}

const AllPost = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  min-width: 900px;
  margin: 50px auto;
`;

const PostTitle = styled.h1`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};

  :after {
    content: '';
    position: absolute;
    width: 100%;
    margin-top: 40px;
    left: 0;
    top: 0;
    border-bottom: 1px solid ${({ theme }) => theme.black};
  }
`;

export default MoviePostWrite;
