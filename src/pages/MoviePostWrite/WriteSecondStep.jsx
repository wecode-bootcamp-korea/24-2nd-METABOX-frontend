import React, { useState } from 'react';
import Postcontent from './Postcontent';
import styled from 'styled-components';

const commentVal = {
  스틸컷: true,
  포스터: false,
};

function WriteSecondStep({ selectMovie, setIsEnroll }) {
  const [commentInput, setCommentInput] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [selectedPic, setSelectedPic] = useState(null);
  const [commentImg, setCommentImg] = useState(true);

  const moviePic = selectMovie.still_image.slice(1);
  const moviePoster = selectMovie.still_image[0];

  const selectPic = pic => {
    if (!commentImg) {
      setSelectedPic({ ...selectedPic, pic: moviePoster });
    }
    if (commentImg) {
      setSelectedPic({ ...selectedPic, pic });
    }
  };

  const isCount = e => {
    const maxByte = 50;
    const textVal = e.target.value;
    const textLen = textVal.length;
    setTextCount({ ...textCount, textLen });
    setCommentInput({ ...commentInput, comment: textVal });

    if (textLen > maxByte) {
      alert('최대 50자 까지만 입력가능합니다.');
    }
  };

  const replacePage = () => {
    setIsEnroll(prev => !prev);
  };

  const onChangeImg = e => {
    e.preventDefault();
    let comment = e.currentTarget.attributes['value'].value;
    setCommentImg(commentVal[comment]);
  };

  // 나중에 post로 넘겨줄 항목들 검사
  // console.log(commentInput.comment);
  // console.log(selectMovie.movie_name);
  // console.log(selectPic.pic !== null && selectedPic.pic);

  return (
    <>
      <PostTexts>
        <MovieTitle>{selectMovie.movie_name}</MovieTitle>
        <ReturnBtn onClick={replacePage}>
          <i class="fas fa-undo"></i> 다시선택
        </ReturnBtn>
      </PostTexts>
      <MovieSelect>원하시는 스틸컷/ 포스터를 선택해주세요.</MovieSelect>
      <AllContents>
        <SelectPic>
          <SelectKindPic>
            <a href="/" value="스틸컷" onClick={onChangeImg}>
              스틸컷
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/" value="포스터" onClick={onChangeImg}>
              포스터
            </a>
          </SelectKindPic>
          <CenterAll>
            <AllKindPic>
              {commentImg ? (
                moviePic.map(pic => (
                  <MoviePic
                    src={pic}
                    key={pic.id}
                    onClick={() => selectPic(pic)}
                  />
                ))
              ) : (
                <MoviePic src={moviePoster} onClick={selectPic} />
              )}
            </AllKindPic>
          </CenterAll>
        </SelectPic>
        <PostContents>
          <Postcontent
            isCount={isCount}
            selectMovie={selectMovie}
            selectedPic={selectedPic}
            textCount={textCount}
          />
        </PostContents>
      </AllContents>
      <WarningText>
        ※ 고의적인 영업방해 또는 운영원칙에 어긋나는 게시물은 관리자의 제재 또는
        형사적 책임이 수반될 수 있습니다.
      </WarningText>
      <AllBtns>
        <EnrollBtn>등록</EnrollBtn>
        <CancelBtn onClick={replacePage}>취소</CancelBtn>
      </AllBtns>
    </>
  );
}

const PostTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 5px;
`;

const MovieTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.black};
`;

const ReturnBtn = styled.button`
  padding: 8px 15px;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 3px;
  font-size: 16px;
  color: ${({ theme }) => theme.blue};
  cursor: pointer;

  :hover {
    background-color: #f1f4f8;
  }
`;

const MovieSelect = styled.h2`
  font-size: 18px;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.black};
`;

const AllContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const SelectPic = styled.article`
  border: 1px solid #d8d9db;
  border-radius: 5px;
`;

const SelectKindPic = styled.div`
  padding: 30px 130px;
  margin: 0 25px;
  border-bottom: 1px solid #d8d9db;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  background-color: #ffff;
  color: ${({ theme }) => theme.gray};

  & a {
    font-weight: 500;
    color: ${({ theme }) => theme.black};

    :hover {
      opacity: 0.7;
    }
  }
`;

const CenterAll = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const AllKindPic = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 540px;
  margin: 30px 0;
  overflow: auto;
`;

const MoviePic = styled.img`
  position: relative;
  width: 300px;
  margin: 10px 0.6rem;
  border-radius: 3px;
  cursor: pointer;
`;

const PostContents = styled.article`
  width: 500px;
  border: 1px solid #d8d9db;
  border-radius: 5px;
  background-color: #ecf0f4;
`;

const WarningText = styled.span`
  margin: 20px auto 10px;
  color: ${({ theme }) => theme.gray};
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

export default WriteSecondStep;
