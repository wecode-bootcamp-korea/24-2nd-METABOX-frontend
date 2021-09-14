import React from 'react';
import PostMap from './PostMap';
import styled from 'styled-components';

function Posts({ clickPost, movieList, searchInputValue, pagination }) {
  return (
    <CenterPost>
      <PostNav>
        <AllCountPost>
          전체 <BlueCountNum>{pagination.totalCount}</BlueCountNum>건
        </AllCountPost>
        <SearchBar
          type="text"
          placeholder="제목을 검색하세요"
          onChange={searchInputValue}
        ></SearchBar>
        <SearchIcon>
          <i class="fas fa-search"></i>
        </SearchIcon>
      </PostNav>
      <AllPost>
        <PostMap movieList={movieList} clickPost={clickPost} />
      </AllPost>
    </CenterPost>
  );
}

const CenterPost = styled.div`
  width: 1130px;
  margin: 0 auto;
`;

const PostNav = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 10px 18px 0;
`;

const AllCountPost = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const BlueCountNum = styled.span`
  color: ${({ theme }) => theme.main};
`;

const SearchBar = styled.input`
  width: 177px;
  padding-left: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #d0d0d0;
  font-size: 15px;
  ::placeholder {
    color: #d0d0d0;
    font-weight: 300;
  }
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.gray};
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  top: 0;
  right: 2px;
  font-size: 15px;
  color: #b0b0b0;
`;

const AllPost = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px auto 10px;
`;

export default Posts;
