import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MAIN_URL } from '../../config';
import Posts from './Posts';
import PostModal from './PostModal';
import backimg from '../../image/sdf.jpeg';
import AllRankMovies from './AllRankMovies';
import styled from 'styled-components';

const LIMIT = 8;

function MoviePost() {
  const [rankMovies, setRankMoives] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [modalPost, setModalPost] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: LIMIT,
    totalPage: 0,
    totalCount: 0,
    currentPage: 1,
  });
  const history = useHistory();

  useEffect(() => {
    if (pagination.offset !== 0)
      fetch(
        `${MAIN_URL}movieposts?limit=${pagination.limit}&offset=${pagination.offset}`
      )
        .then(response => response.json())
        .then(data => {
          setMovieList(movieList.concat(data.result));
          setPagination({
            ...pagination,
            totalPage: Math.ceil(data.total_count / pagination.limit),
          });
        });
  }, [pagination.offset]);

  useEffect(() => {
    fetch(
      `${MAIN_URL}movieposts?limit=${pagination.limit}&offset=${pagination.offset}`
    )
      .then(response => response.json())
      .then(data => {
        setRankMoives(data.movie_posting_count);
      });

    fetch(
      `${MAIN_URL}movieposts?limit=${pagination.limit}&offset=${pagination.offset}`
    )
      .then(response => response.json())
      .then(data => {
        setPagination({
          ...pagination,
          totalPage: Math.ceil(data.total_count / pagination.limit),
          totalCount: data.total_count,
        });
        setMovieList(...movieList, data.result);
      });
  }, []);

  const onMoreClick = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + 1,
      offset: pagination.offset + pagination.limit,
    });
  };

  const goToWritePage = () => {
    history.push('/moviepost/write');
  };

  const clickPost = data => {
    setModalPost(data);
    toggleModal();
  };

  const onClickWindow = e => {
    const clicked = e.target.closest('.modal');

    if (clicked) {
      return;
    }
    toggleModal();
  };

  const toggleModal = () => {
    setShowPostModal(prev => !prev);
  };

  const searchInputValue = e => {
    const inputval = e.target.value;
    setSearchValue({ ...searchValue, comment: inputval });
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
        </CategoryBack>
      </BookingCategoryList>
      <HeaderBackground>
        <HeaderContents>
          <HeaderTexts>
            <HeaderText>무비포스트</HeaderText>
            <MyPostBtn onClick={goToWritePage}>무비포스트 작성</MyPostBtn>
          </HeaderTexts>
          <AllPosters>
            <AllRankMovies rankMovies={rankMovies} />
          </AllPosters>
        </HeaderContents>
      </HeaderBackground>
      <MovieSection>
        <Section>
          <Text>최신순</Text>
        </Section>
        <Section>
          <Text>공감순</Text>
        </Section>
      </MovieSection>
      <Posts
        clickPost={clickPost}
        movieList={movieList}
        searchInputValue={searchInputValue}
        pagination={pagination}
      />
      {showPostModal && (
        <PostModal
          onClickWindow={onClickWindow}
          modalPost={modalPost}
          showPostModal={showPostModal}
          toggleModal={toggleModal}
        />
      )}
      <MoreBtn
        display={
          pagination.currentPage < pagination.totalPage ? 'block' : 'none'
        }
        onClick={onMoreClick}
      >
        더보기 <i class="fas fa-chevron-down"></i>
      </MoreBtn>
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

const HeaderBackground = styled.div`
  position: relative;
  width: 100%;
  background-image: linear-gradient(to right, #6d48c2, #503396);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: no-repeat url(${backimg});
    background-size: cover;
    z-index: 0;
    opacity: 0.06;
  }
`;

const HeaderContents = styled.header`
  width: 1100px;
  padding: 45px 0;
  margin: 0 auto;
  z-index: 1;
`;

const HeaderTexts = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 0 5px;
  z-index: 2;
`;

const HeaderText = styled.h1`
  font-size: 28px;
  color: #ffff;
`;

const MyPostBtn = styled.button`
  border: 1px solid #ffff;
  border-radius: 5px;
  padding: 5px 8px;
  font-size: 16px;
  font-weight: 600;
  color: #ffff;
  cursor: pointer;
  opacity: 0.8;

  :hover {
    color: #ffff;
    background-color: ${({ theme }) => theme.main};
    opacity: 1;
  }
`;

const AllPosters = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovieSection = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px auto;
`;

const Section = styled.button`
  position: relative;
  margin-left: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.gray};

  ::before {
    position: absolute;
    bottom: 3px;
    left: -7px;
    content: '|';
  }

  :first-child {
    margin-left: 0;

    &::before {
      content: '';
    }
  }
`;

const Text = styled.span`
  font-weight: 500;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.main};
    border-bottom: 1.5px solid ${({ theme }) => theme.main};
  }
`;

const MoreBtn = styled.button`
  display: ${props => props.display};
  width: 1100px;
  padding-bottom: 10px;
  margin: 10px auto;
  border-bottom: 1px solid #d8d9db;
  font-size: 15px;
  color: ${({ theme }) => theme.gray};
  cursor: pointer;

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.gray};
  }
`;

export default MoviePost;
