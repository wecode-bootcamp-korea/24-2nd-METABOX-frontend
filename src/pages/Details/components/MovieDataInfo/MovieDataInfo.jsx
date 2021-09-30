import React from 'react';
import styled from 'styled-components';
import PointRating from './PointRating';
import NumberOfAudienceByDate from './NumberOfAudienceByDate';
import TicketingRate from './TicketingRate';
import AverageScore from './AverageScore';

function MovieDataInfo() {
  return (
    <MovieInfoListWrapper>
      {movieInfo.map((info, index) => (
        <Wrapper key={index}>
          <MovieInfoWrapper>
            <MovieInfo>{info.title}</MovieInfo>
            <InfoNumber>{info.data}</InfoNumber>
          </MovieInfoWrapper>
          {info.component}
        </Wrapper>
      ))}
    </MovieInfoListWrapper>
  );
}

const movieInfo = [
  { title: '관람포인트', data: '연출·영상미', component: <PointRating /> },
  {
    title: '실관람 평점',
    data: 9.5,
    component: <AverageScore score={9.5} />,
  },
  { title: '예매율', data: '24%', component: <TicketingRate /> },
  {
    title: '일자별관객수',
    data: '36,853',
    component: <NumberOfAudienceByDate />,
  },
];

const MovieInfoListWrapper = styled.div`
  display: flex;
  width: 1100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 28px 45px;
  border: 1px solid #eaeaea;
`;

const MovieInfoWrapper = styled.dl`
  width: 1100px;
  flex-direction: column;
  text-align: center;
  font-weight: 400;
  margin-bottom: 50px;
`;

const MovieInfo = styled.dt`
  font-size: 0.97em;
  font-weight: 400;
  color: #555;
`;

const InfoNumber = styled.dd`
  font-weight: 400;
  font-size: 2em;
  color: #503396;
  margin-top: 3px;
`;

export default MovieDataInfo;
