import React, { useState, useEffect } from 'react';
import { MAIN_URL } from '../../config';
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
    fetch(`${MAIN_URL}movieposts/write`, {
      headers: {
        Authorization: localStorage.getItem('Kakao_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setMyMovies(res.RESULT);
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
    <>
      <BookingCategoryList>
        <CategoryBack>
          <Category>
            <BookingIcon className="fas fa-home" primary />
          </Category>
          <Category>
            <BookingIcon className="fas fa-chevron-right" />
            <span>무비포스트</span>
          </Category>
          <Category>
            <BookingIcon className="fas fa-chevron-right" />
            <span>무비포스트 작성</span>
          </Category>
        </CategoryBack>
      </BookingCategoryList>
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
    </>
  );
}

const BookingCategoryList = styled.ul`
  padding: 5px 0;
  font-size: 15px;
  color: #aaa;
  background-color: #f8f8fa;
`;

const CategoryBack = styled.div`
  display: flex;
  width: 1090px;
  margin: 0 auto;
`;

const Category = styled.li`
  margin-right: 9px;
  font-size: 13px;
  :first-of-type {
    margin-right: 3px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const BookingIcon = styled.i`
  margin-right: 5px;
  font-size: ${({ primary }) => (primary ? '13px' : '10px')};
`;

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
