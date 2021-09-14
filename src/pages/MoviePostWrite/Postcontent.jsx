import React from 'react';
import styled from 'styled-components';

function Postcontent({ isCount, textCount, selectedPic }) {
  return (
    <PostContent>
      <DeleteBtn>
        <i class="fas fa-times-circle"></i>
      </DeleteBtn>
      {selectedPic ? (
        <SelectedPic src={selectedPic.pic}></SelectedPic>
      ) : (
        <PostImage>
          <ImageText>
            <i class="fas fa-images"></i>
            <span>이미지를 등록해주세요!</span>
          </ImageText>
        </PostImage>
      )}
      <TextArea>
        <PostText
          placeholder="내용을 작성해 주세요 (50자 제한)"
          onKeyUp={isCount}
        />
        <TextCount>
          <TextCountNum color={textCount.textLen > 50 ? 'red' : 'black'}>
            {textCount ? textCount.textLen : 0}
          </TextCountNum>
          / 50
        </TextCount>
      </TextArea>
    </PostContent>
  );
}

const PostContent = styled.div`
  position: relative;
  max-height: 600px;
  padding: 30px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 21px;
  right: 15px;
  font-size: 20px;
  color: ${({ theme }) => theme.black};
  z-index: 2;
`;

const SelectedPic = styled.img`
  display: block;
  width: 435px;
  margin: auto;
  text-align: center;
  border: 20px solid #ffff;
`;

const PostImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: #ffff;
`;

const ImageText = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45%;
  left: 50%;
  align-items: center;
  color: #d8d9db;
  transform: translateX(-50%);

  & i {
    font-size: 20px;
    color: #d8d9db;
    margin-bottom: 5px;
  }
`;

const TextArea = styled.div`
  position: relative;
  margin: 10px 0 30px;
  font-size: 14px;
  background-color: #ffff;
`;

const PostText = styled.textarea`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 15px;
  text-align: left;
  overflow: auto;

  ::placeholder {
    letter-spacing: -0.07rem;
  }
`;

const TextCount = styled.div`
  position: absolute;
  width: 100%;
  padding: 7px 10px;
  text-align: right;
  background-color: #ffff;
`;

const TextCountNum = styled.span`
  margin-right: 2px;
  color: ${props => props.color}; ;
`;

export default Postcontent;
