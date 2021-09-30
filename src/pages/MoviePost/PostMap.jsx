import React from 'react';
import styled from 'styled-components';

function PostMap({ movieList, clickPost }) {
  return (
    <>
      {movieList !== [] &&
        movieList.map(data => (
          <OnePost onClick={() => clickPost(data)} key={data.key}>
            <PostHeadText>{data.movieTitle}</PostHeadText>
            <PostPoster img={data.moviePoster} />
            <ProfileContents>
              <Profile>
                <Profileimg src={'../../image/cat.jpeg'}></Profileimg>
                {data.userId}
              </Profile>
              <HeartBtn>
                <i class="far fa-heart"></i> {data.movieLikes}
              </HeartBtn>
            </ProfileContents>
            <PostText>{data.postText}</PostText>
            <TimeText>15분 전</TimeText>
          </OnePost>
        ))}
    </>
  );
}

const OnePost = styled.article`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 10px 18px 25px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  &:hover {
    border: 1px solid #b0b0b0;
  }
  cursor: pointer;
`;

const PostHeadText = styled.h3`
  width: 220px;
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.black};
`;

const PostPoster = styled.div`
  width: 220px;
  height: 220px;
  background: no-repeat center url(${props => props.img});
  background-size: cover;
  border-radius: 3px;
`;

const ProfileContents = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  &:after {
    content: '';
    position: absolute;
    width: 210px;
    border-bottom: 1px solid #d0d0d0;
    margin-top: 33px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

const Profileimg = styled.img`
  width: 23px;
  margin-right: 5px;
  border-radius: 15px;
`;

const HeartBtn = styled.button`
  font-size: 13px;
  color: ${({ theme }) => theme.black};
`;

const PostText = styled.p`
  width: 210px;
  margin: 8px 0;
  padding: 0 1px;
  font-size: 13px;
  letter-spacing: -0.03rem;
  line-height: 0.95rem;
  color: ${({ theme }) => theme.black};
  /* 줄 자르기 */
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 두줄용 */
  white-space: normal;
  line-height: 1.2;
  height: 2.5em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TimeText = styled.p`
  font-size: 11px;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.gray};
`;

export default PostMap;
