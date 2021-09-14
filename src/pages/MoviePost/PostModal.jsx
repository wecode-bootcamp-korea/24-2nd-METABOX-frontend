import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function PostModal({ modalPost, toggleModal, onClickWindow }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Container onClick={onClickWindow}>
      <ContainerBox className="modal">
        <TitleWrapper>
          <Title>무비포스트 상세</Title>
          <CloseBtn onClick={toggleModal}>&times;</CloseBtn>
        </TitleWrapper>
        <PostContainer>
          <PostHeadText>{modalPost.movieTitle}</PostHeadText>
          <OnePost>
            <ProfileContents>
              <Profile>
                <Profileimg src={'../../image/cat.jpeg'} />
                {modalPost.userId}
              </Profile>
              <HeartBtn>
                <i class="far fa-heart"></i> {modalPost.movieLikes}
              </HeartBtn>
            </ProfileContents>
            <PosterBg>
              <PostPoster img={modalPost.moviePoster} />
              <PostText>{modalPost.postText}</PostText>
            </PosterBg>
          </OnePost>
        </PostContainer>
      </ContainerBox>
    </Container>
  );
}

const ModalBgShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -20px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  animation: ${ModalBgShow} 0.1s;
  z-index: 99;
`;

const ContainerBox = styled.div`
  position: fixed;
  top: 48%;
  left: 50%;
  width: 520px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  animation: ${ModalShow} 0.2s;
  z-index: 1;
`;

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  color: #ffff;
  background-color: ${({ theme }) => theme.main};
`;

const Title = styled.span`
  margin: 12px 25px 10px;
  font-size: 18px;
  color: #ffff;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 15px;
  outline: none;
  cursor: pointer;
  border: 0;
  font-size: 30px;
  color: #ffff;
`;

const PostContainer = styled.div`
  height: 650px;
  padding: 18px;
  background: white;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const OnePost = styled.article`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  margin: 10px 18px 25px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
`;

const PostHeadText = styled.h3`
  margin: 0 20px 10px;
  font-size: 25px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.black};
`;

const PosterBg = styled.div`
  background-color: #ecf0f4;
  margin-bottom: 20px;
`;

const PostPoster = styled.div`
  width: 400px;
  height: 400px;
  margin: 15px auto;
  background: no-repeat center url(${props => props.img});
  background-size: cover;
  border-radius: 5px;
`;

const ProfileContents = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 20px;
  padding: 0 25px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 20 px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

const Profileimg = styled.img`
  width: 40px;
  margin-right: 5px;
  border-radius: 25px;
`;

const HeartBtn = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.black};
`;

const PostText = styled.p`
  margin: 8px 0 15px;
  padding: 0 25px;
  font-size: 15px;
  text-align: center;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.black};
`;

// const TimeText = styled.p`
//   font-size: 11px;
//   letter-spacing: -0.03rem;
//   color: ${({ theme }) => theme.gray};
// `;

export default PostModal;
