import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import SortingSearchArea from './SortingSearchArea';
import AddMovieButton from './AddMovieButton';
import { MAIN_URL } from '../../config';

const LIMIT = 4;

function Main() {
  const sorters = [
    { name: '평점 순', orderBy: 'rating' },
    { name: '개봉일 순', orderBy: 'release_date' },
    { name: '보고싶어요 순', orderBy: 'likes' },
  ];
  const [movieList, setMovieList] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: LIMIT,
    totalPage: 0,
    currentPage: 1,
  });
  const [sortActive, setSortActive] = useState(0);
  const [sortOrderBy, setSortOrderBy] = useState(sorters[0]['orderBy']);
  const [searchWords, setSearchWords] = useState('');

  const onMovieSortingClick = e => {
    if (e.target.nodeName === 'BUTTON') {
      const idx = Number(e.target.value);
      console.log(sorters);
      setSortActive(idx);
      setSortOrderBy(sorters[idx]['orderBy']);
      setPagination({
        ...pagination,
        currentPage: 1,
        offset: 0,
      });
    }
  };

  useEffect(() => {
    if (pagination.offset !== 0)
      fetch(
        `${MAIN_URL}movies/list?limit=${pagination.limit}&offset=${pagination.offset}&orderby=${sortOrderBy}&search=${searchWords}`
      )
        .then(response => response.json())
        .then(result => {
          setMovieList(movieList.concat(result['Result']));
          setPagination({
            ...pagination,
            totalPage: Math.ceil(result['Total_Count'] / pagination.limit),
          });
        });
  }, [pagination.offset]);

  useEffect(() => {
    getMovieList();
  }, [sortOrderBy]);

  const getMovieList = () => {
    fetch(
      `${MAIN_URL}movies/list?limit=${pagination.limit}&offset=${pagination.offset}&orderby=${sortOrderBy}&movie_name=${searchWords}`
    )
      .then(response => response.json())
      .then(result => {
        setMovieList(result['Result']);
        setPagination({
          ...pagination,
          totalPage: Math.ceil(result['Total_Count'] / pagination.limit),
          currentPage: 1,
          offset: 0,
        });
      });
  };

  const onAddMovieListClick = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
      offset: pagination.offset + pagination.limit,
    });
  };

  return (
    <ContentWrapper>
      <SortingSearchArea
        onMovieSortingClick={onMovieSortingClick}
        getMovieList={getMovieList}
        searchWords={searchWords}
        setSearchWords={setSearchWords}
        sortActive={sortActive}
        sortOrderBy={sortOrderBy}
        sorters={sorters}
      />
      <MovieList>
        {movieList.map((movie, index) => (
          <Movie
            key={index}
            movieId={index + 1}
            movieTitle={movie.ko_name}
            movieRating={movie.age_grade}
            advanceRate={movie.rating} //ticketing
            releaseDate={movie.release_date}
            movieLikes={movie.like_count}
            moviePoster={movie.image_url}
            description={movie.description}
          ></Movie>
        ))}
      </MovieList>
      <AddMovieButton
        display={pagination.currentPage < pagination.totalPage}
        onAddMovieListClick={onAddMovieListClick}
      />
    </ContentWrapper>
  );
}

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const MovieList = styled.ol`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 60px;
  width: 1100px;
  list-style: none;
`;

export default Main;
