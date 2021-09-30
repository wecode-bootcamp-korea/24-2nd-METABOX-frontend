import React, { useState, useEffect, createContext } from 'react';
import MoiveList from './MovieList';
import { url as URL } from '../../../../config';
import styled from 'styled-components';

export const MovieContext = createContext({
  movieDataList: [],
});

function Movie() {
  const [movieTabName, setMovieTabName] = useState('');
  const [movieActive, setMovieActive] = useState(false);
  const [movieDataList, setMovieDataList] = useState([]);
  const [movieSelectList, setMovieSelectList] = useState([...Array(3)]);

  useEffect(() => {
    fetch(`${URL}/bookings`)
      .then(res => res.json())
      .then(data => {
        setMovieDataList(data.MOVIES);
      });
  }, []);

  const contextValue = {
    movieTabName,
    setMovieTabName,
    movieDataList,
    setMovieActive,
    setMovieDataList,
    movieSelectList,
    movieActive,
    setMovieSelectList,
  };
  return (
    <MovieContext.Provider value={contextValue}>
      <MovieWrapper>
        <MovieTitle>영화</MovieTitle>
        <MovieTab />
        <MoiveList />
      </MovieWrapper>
    </MovieContext.Provider>
  );
}

export default Movie;

const MovieWrapper = styled.div`
  width: 290px;
  padding: 0 20px 0 21px;
  border-right: 1px solid #d8d9db;
  border-left: 1px solid #d8d9db;
  border-bottom: 1px solid #d8d9db;
  font-family: -apple-system, sans-serif;
`;

const MovieTitle = styled.h3`
  margin: 10px 0;
  border-right: 1px solid transparent;
  font-size: 16px;
  font-weight: 600;
`;

const MovieTab = styled.div`
  display: flex;
  width: 100%;
`;
