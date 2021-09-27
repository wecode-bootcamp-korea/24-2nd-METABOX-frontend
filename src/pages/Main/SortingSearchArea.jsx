import React from 'react';
import styled from 'styled-components';

function SortingSearchArea({
  onMovieSortingClick,
  getMovieList,
  setSearchWords,
  searchWords,
  sortActive,
  sorters,
}) {
  return (
    <SortingSearchWrapper>
      <MovieSortingWrapper onClick={onMovieSortingClick}>
        {sorters.map((sorter, index) => (
          <MovieSorter key={index}>
            <SortingButton
              isActive={sortActive === index}
              value={index}
              className={sorter.orderBy}
            >
              {sorter.name}
            </SortingButton>
          </MovieSorter>
        ))}
      </MovieSortingWrapper>
      <MovieSearchWrapper>
        <MovieSearch
          placeholder="영화명 검색"
          onChange={e => setSearchWords(e.target.value)}
          onKeyPress={e => {
            if (e.code === 'Enter') {
              getMovieList();
            }
          }}
          value={searchWords}
        ></MovieSearch>
        <SearchIcon onClick={getMovieList}>
          <i className="fas fa-search"></i>
        </SearchIcon>
      </MovieSearchWrapper>
    </SortingSearchWrapper>
  );
}

const SortingSearchWrapper = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MovieSortingWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const MovieSorter = styled.li`
  &:last-child {
    &::after {
      content: '';
    }
  }
  &::after {
    content: '|';
    color: #aaa;
  }
`;

const SortingButton = styled.button`
  color: ${props => (props.isActive ? '#333' : '#aaa')};
  font-weight: ${props => (props.isActive ? 'bold' : '400')};
  cursor: pointer;
`;

const MovieSearchWrapper = styled.div`
  position: relative;
  width: 230px;
`;

const MovieSearch = styled.input`
  width: 230px;
  height: 34px;
  margin: 0;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  ::placeholder {
    color: #aaa;
    font-size: 1.1em;
    font-weight: 500;
    font-family: NanumBarunGothic, Dotum, '돋움', sans-serif;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 5px;
  left: 200px;
  color: #aaa;
  font-size: 1.1em;
  cursor: pointer;
`;

export default SortingSearchArea;
