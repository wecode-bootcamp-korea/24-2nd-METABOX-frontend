import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import URL from '../../config';

const LIMIT = 5;
const SORT = '-releaseDate';

function SearchBar({ isDisplayed }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${URL}:8001/movies/list?limit=${LIMIT}&orderby=${SORT}`)
      .then(response => response.json())
      .then(result => {
        setMovies(result['results']);
      });
  }, []);

  return (
    <DropDown isDisplayed={isDisplayed}>
      <SubWrapper>
        <SortingWrapper>
          <SortingOrder>예매율 순</SortingOrder>
          <SortingOrder>메가박스 관객순</SortingOrder>
        </SortingWrapper>
        <HeaderSearchWrapper>
          <ImageWrapper>
            {/* <MovieImage src={movies[0].image_url} alt="movie-poster" /> */}
          </ImageWrapper>
          <MovieList>
            {movies.map((movie, index) => (
              <Movie>
                <MovieRank>{index}</MovieRank>
                <MovieTitle to="">{movie.title}</MovieTitle>
              </Movie>
            ))}
          </MovieList>
          <SearchWrapper>
            <SearchBarInput placeholder={'영화를 검색하세요'}></SearchBarInput>
            <SearchIcon>
              <i className="fas fa-search"></i>
            </SearchIcon>
          </SearchWrapper>
        </HeaderSearchWrapper>
      </SubWrapper>
    </DropDown>
  );
}

const DropDown = styled.div`
  position: absolute;
  top: 90px;
  width: 100%;
  border: 1px solid black;
  display: ${props => (props.isDisplayed ? 'flex' : 'none')};
  justify-content: center;
  padding: 50px 400px;
  background-color: #372667;
`;

const SubWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const SortingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const SortingOrder = styled.span`
  flex-shrink: 0;
  color: white;
  margin-right: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid white;
  font-size: 15px;
`;

const HeaderSearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 214px;
  margin-right: 50px;
`;
const MovieImage = styled.img`
  max-width: 100%;
  flex-shrink: 0;
`;

const MovieRank = styled.span`
  font-style: italic;
  font-size: 25px;
  margin-right: 10px;
  font-family: Roboto;
`;

const MovieTitle = styled(Link)`
  flex-shrink: 0;
  font-size: 15px;
`;

const Movie = styled.li`
  color: white;
  display: flex;
  align-items: center;
`;

const MovieList = styled.ul`
  padding-right: 80px;
  flex-shrink: 0;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 450px;
`;

const SearchBarInput = styled.input`
  width: 450px;
  padding: 20px 10px;
  font-size: 18px;
  border: 0;
  color: white;
  border-bottom: 2px solid white;
  background-color: #372667;
  ::placeholder {
    color: white;
    opacity: 1;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 92%;
  top: 25%;
  font-size: 22px;
  color: white;
`;

export default SearchBar;
