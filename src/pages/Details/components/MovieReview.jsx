import React, { Link } from 'react';
import styled from 'styled-components';

function MovieReview() {
  return (
    <>
      <BlockContainer>
        <ReviewIntro>
          {'"Movie"'}에 대한
          <ReviewIntroNumber>2,069</ReviewIntroNumber>
          개의 이야기가 있어요!
        </ReviewIntro>
        <Button>본 영화 등록</Button>
      </BlockContainer>
      <BlockContainer>
        <ReviewCount>
          전체 <MovieCountcolor>4</MovieCountcolor>건
        </ReviewCount>
        <SortList>
          <SortItem>최신순</SortItem>
          <SortItem>공감순</SortItem>
          <SortItem>평점순</SortItem>
        </SortList>
      </BlockContainer>

      <BlockContainer>
        <MegaboxContainer>
          <Logo
            src={process.env.PUBLIC_URL + '/image/logo_m_initial.png'}
            alt="logo_m_initial"
          />
          <ProfileName> {'MEGABOX'}</ProfileName>
        </MegaboxContainer>
        <ReviewIntroContainer>
          <ReviewIntroContent>
            007 노 타임 투 다이 재미있게 보셨나요? 영화의 어떤 점이 좋았는지
            이야기해주세요.
            <br />
            관람일 기준 7일 이내 등록 시 50P 가 적립됩니다.
          </ReviewIntroContent>
        </ReviewIntroContainer>
      </BlockContainer>

      <BlockContainer>
        <ListContainer>
          {reviewList.map((item, index) => (
            <ReviewContainerList key={index}>
              <ProfileContainer>
                <Profile>
                  <i className="fas fa-user-circle"></i>
                </Profile>
                <ProfileName>{item.userId.slice(0, 6) + '**'}</ProfileName>
              </ProfileContainer>
              <ReviewContainer>
                <NormalFont>관람평</NormalFont>
                <BigFont>{item.score}</BigFont>
                <NormalFontDiv>{item.cate}</NormalFontDiv>
                <ReviewContent>{item.content}</ReviewContent>
              </ReviewContainer>
            </ReviewContainerList>
          ))}
        </ListContainer>
      </BlockContainer>
    </>
  );
}

const reviewList = [
  {
    userId: 'BillShankley',
    score: 9,
    cate: 'OST',
    content: '재밌었습니당~~~~~~~~~~~~~~',
  },
  {
    userId: 'VanDijk',
    score: 8,
    cate: 'OST',
    content: '재밌네요 굿굿~~~',
  },
  {
    userId: 'StevenGerrard',
    score: 5,
    cate: 'OST',
    content: '잠옵니다....',
  },
  {
    userId: 'Lampard',
    score: 9,
    cate: 'OST',
    content: 'CGV로 오세요',
  },
];

const ReviewContent = styled.span`
  color: #666;
  font-size: 0.8em;
  font-weight: 500;
`;

const ProfileName = styled.span`
  font-size: 0.8em;
`;

const Logo = styled.img`
  width: 50px;
  border-radius: 100%;
  opacity: 0.9;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ReviewContainerList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin: 10px 0;
`;

const BigFont = styled.span`
  color: #503396;
  font-size: 2.2em;
  font-weight: 300;
  margin: 0 20px;
`;

const NormalFont = styled.span`
  color: #503396;
  margin: 0 30px;
`;

const NormalFontDiv = styled.div`
  display: flex;
  align-items: center;
  color: #503396;
  margin: 0 30px;
  padding-right: 30px;

  height: 65%;
  border-right: 1px solid #ddd;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  margin-top: 15px;
  background: #f8f8fa;
`;

const ReviewIntroContent = styled.span`
  font-size: 0.85em;
  font-weight: 500;
  color: #666;
`;

const ReviewIntroContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  background: #f8f8fa;
  //  margin-top: 15px;
  padding: 20px 30px;
  color: #666;
  border-left-bottom
  font-size: 0.8em;
`;

const ProfileUserId = styled.span``;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
`;

const MegaboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 6px;
`;

const Profile = styled.span`
  font-size: 55px;
  color: #d8d9db;
`;

const ReviewCount = styled.span`
  font-weight: 500;
`;

const SortList = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
`;

const SortItem = styled.li`
  display: inline-block;
  list-style: none;
  border-right: 1px solid #d8d9db;
  padding: 0 10px;
  :not(:first-child) {
    color: #747474;
  }

  :last-child {
    border-right: 0px solid #d8d9db;
  }
`;

const MovieCountcolor = styled.span`
  color: #01738b;
`;

const BlockContainer = styled.div`
  width: 1100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const ReviewIntro = styled.p`
  padding: 0;
  margin: 0;
  display: inline;
  font-size: 1.3em;
  color: #503396;
  font-weight: 500;
  font-family: NanumBarunGothic, Dotum, '돋움', sans-serif;
`;
const ReviewIntroNumber = styled.span`
  color: #01738b;
`;

const Button = styled.button`
  margin-top: 10px;
  border: 1px solid #503396;
  width: 110px;
  height: 36px;
  font-weight: 500;
  font-size: 0.9em;
  border-radius: 4px;
  background: white;
  color: #444;
`;

export default MovieReview;
