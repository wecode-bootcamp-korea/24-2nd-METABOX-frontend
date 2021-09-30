import React, { useContext } from 'react';
import { MovieContext } from './Movie';
import useMovieData from './hooks/useMovieData';
import styled from 'styled-components';

const MovieList = () => {
  const { movieTabName, movieDataList, movieSelectList, movieActive } =
    useContext(MovieContext);

  const { all, curation, movieClicked, movieDelete } = useMovieData();

  return (
    <>
      <MovieTab>
        <MovieTabActionBtn role="button" onClick={all}>
          전체
        </MovieTabActionBtn>
        <MovieTabActionBtn
          role="button"
          action={'curation'}
          onClick={curation}
          primary
        >
          큐레이션
        </MovieTabActionBtn>
      </MovieTab>
      {movieTabName === 'curation' && (
        <MovieCurationList>
          <div>
            <img src="https://i.postimg.cc/6QK15Cvh/logo2.png" alt="logo" />
            죄송합니다. 현재 큐레이션 영화는 준비중 입니다.
          </div>
        </MovieCurationList>
      )}
      <MovieDateListWrapper
        className={movieTabName === 'curation' && 'movieChangeList'}
      >
        <MovieDataList>
          {movieDataList.map(data => {
            return (
              <MovieBtn
                role="button"
                key={data.movie_id}
                onClick={() => movieClicked(data)}
                className={data.like && 'isLiked'}
              >
                <MovieTitle>{data.movie_title}</MovieTitle>
                <MovieIcon className="far fa-heart" />
              </MovieBtn>
            );
          })}
        </MovieDataList>
        <MovieSelectDataWrapper className={movieActive && 'isActive'}>
          {!movieActive && (
            <MovieSelectContent>
              모든 영화
              <br />
              목록에서 영화를 선택하세요
            </MovieSelectContent>
          )}
          {movieActive && (
            <MovieSelectList>
              {movieSelectList.map((data, idx) => {
                if (data) {
                  return (
                    <MovieSelectItem key={idx}>
                      <MovieSelectImg
                        src={data.movie_poster}
                        alt={data.title}
                      />
                      <MovieDeleteBtn onClick={() => movieDelete(data)}>
                        <i className="fas fa-times" />
                      </MovieDeleteBtn>
                    </MovieSelectItem>
                  );
                } else {
                  return (
                    <MovieSelectItem key={idx}>
                      <MovieTitle primary>
                        <MovieIcon primary className="fas fa-plus" />
                      </MovieTitle>
                    </MovieSelectItem>
                  );
                }
              })}
            </MovieSelectList>
          )}
        </MovieSelectDataWrapper>
      </MovieDateListWrapper>
    </>
  );
};
export default MovieList;

const MovieTab = styled.div`
  display: flex;
  width: 100%;
`;

const MovieTabActionBtn = styled.div`
  flex: 0 0 124px;
  height: 30px;
  margin-bottom: 6.5px;
  border: 1px solid #666;
  border-bottom: ${({ primary }) => primary || '0'};
  border-right: ${({ primary }) => primary || '0'};
  font-size: 13px;
  text-align: center;
  background: ${({ action }) => action === 'curation' && '#f7f8f9'};
  &:hover {
    cursor: pointer;
  }
`;

const MovieDateListWrapper = styled.div`
  &.movieChangeList {
    display: none;
  }
`;

const MovieDataList = styled.ul`
  height: 320px;
  font-size: 15px;
  padding: 15px 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #555555;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ebebeb;
  }
`;

const MovieBtn = styled.li`
  display: flex;
  padding: 5px 10px;
  &.isLiked {
    color: #fff;
    background: #666;
  }

  &:hover {
    cursor: pointer;
  }
`;
const MovieTitle = styled.div`
  width: 100%;
  height: 100%;
  border: ${({ primary }) => primary && '1px solid #ebebeb'};
`;

const MovieIcon = styled.i`
  position: ${({ primary }) => primary && 'absolute'};
  top: ${({ primary }) => primary && '40%'};
  left: ${({ primary }) => primary && '42%'};
  font-size: 12px;
  margin-left: ${({ primary }) => (primary ? '0' : 'auto')};
  color: #d8d9db;
`;

const MovieSelectDataWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin: 10px 0 0 0;
  border: 1px solid #ededed;
  &.isActive {
    border: 0;
  }
`;

const MovieSelectContent = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  text-align: center;
  color: #4c4c4c;
`;

const MovieSelectList = styled.ul`
  display: flex;
`;

const MovieSelectItem = styled.li`
  position: relative;
  width: 60px;
  height: 100px;
  margin-left: 30px;
  &:first-of-type {
    margin-left: 0;
  }
`;
const MovieSelectImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MovieDeleteBtn = styled.button`
  position: absolute;
  right: 0;
  font-size: 12px;
  background: #444;
  color: #fff;
  &:hover {
    cursor: pointer;
    color: #444;
    background: #fff;
  }
`;

const MovieCurationList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  color: #4c4c4c;
  div {
    width: 190px;
    height: 80px;
    margin: 0 auto;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
