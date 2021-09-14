import React, { useEffect } from 'react';
import styled from 'styled-components';

function WriteFirstStep({
  onClickEnroll,
  myMovies,
  onClickMovie,
  selectMovie,
  history,
}) {
  const goBackPage = () => {
    history.push('/moviepost');
  };

  useEffect(() => {
    const unblock = history.block('페이지를 떠나실건가요?');
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <>
      <PostTexts>
        <PostText>무비포스트로 등록할 1편의 영화를 선택해주세요!</PostText>
        <PossibleMovies>
          등록 가능한 영화 <PossibleMovie>{myMovies.length}</PossibleMovie>건
        </PossibleMovies>
      </PostTexts>
      <AllMovies>
        {myMovies.map(movie => (
          <Poster
            img={movie.poster_image}
            onClick={() => onClickMovie(movie)}
            myMovies={myMovies}
            movie={movie}
            key={movie.id}
          >
            <SelectPoster
              movie={movie}
              selectMovie={selectMovie}
              isSelected={selectMovie.find(select => select === movie)}
            />
          </Poster>
        ))}
      </AllMovies>
      <AllBtns>
        <CancelBtn onClick={goBackPage}>취소</CancelBtn>
        <EnrollBtn onClick={onClickEnroll}>등록</EnrollBtn>
      </AllBtns>
    </>
  );
}

const PostTexts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const PostText = styled.h2`
  font-size: 22px;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.black};
`;

const PossibleMovies = styled.span`
  font-size: 15px;
  letter-spacing: -0.03rem;
`;

const PossibleMovie = styled.span`
  margin: 0 3px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
`;

const AllMovies = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Poster = styled.div`
  position: relative;
  width: 140px;
  height: 210px;
  margin: 40px 12px;
  padding: 10px;
  border-radius: 3px;
  background-image: url(${props => props.img});
  background-size: cover;
  cursor: pointer;

  :first-child {
    margin-left: 0;
  }
`;

const SelectPoster = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.7)
    url(https://img.megabox.co.kr/static/pc/images/common/bg/bg-chk-white.png)
    no-repeat center;
  z-index: 3;

  ${({ isSelected }) => {
    return isSelected ? null : `display: none`;
  }}
`;

const AllBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const EnrollBtn = styled.button`
  padding: 13px 28px;
  margin: 0 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #ffff;
  background-color: ${({ theme }) => theme.main};
  cursor: pointer;

  :hover {
    background-color: #351f67;
  }
`;

const CancelBtn = styled.button`
  padding: 13px 28px;
  margin: 0 5px;
  border: 1px solid ${({ theme }) => theme.main};
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  background-color: #ffff;
  cursor: pointer;

  :hover {
    background-color: #f1f4f8;
  }
`;

export default WriteFirstStep;
