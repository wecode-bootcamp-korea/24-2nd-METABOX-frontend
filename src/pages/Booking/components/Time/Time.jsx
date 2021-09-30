import React, { createContext, useState, useContext } from 'react';
import { BookingContext } from './../../Booking';
import TimePartList from './TimePartList';
import TimeList from './TimeList';
import { createDayDateTimes, setDateTime, today } from './utils';
import styled from 'styled-components';

const time = createDayDateTimes(setDateTime(today, 0), setDateTime(today, 9));
export const TimeContext = createContext({
  timeList: [],
});

function Time() {
  const {
    movieValue,
    movieStartTime,
    locationValue,
    bookingActive,
    movieEndTime,
  } = useContext(BookingContext);
  const [timeList, setTimeList] = useState(time);
  const [timeActive, setTimeActive] = useState(false);
  const contextValue = {
    timeList,
    setTimeList,
  };

  const handleTimeClick = () => {
    setTimeActive(true);
    alert(`
    수도권 사회적 거리두기 4단계 지침에 따라 영화종료 시간 기준 18시 전/후로 이용가능 인원이 변경됩니다.
    - 18시 이전 종료 영화 4인까지 관람가능 (1회 2매씩 예매가능)
    - 18시 이후 종료 영화 2인까지 관람가능
    - 거주공간이 동일 가족은 사적모임 기준을 예외적으로 허용
    (단, 주민등록등본 등 서류 지참시)
    
    정부거리두기 지침에 따라 극장 이용가능 인원은 변경 될 수 있습니다. 사회적 거리두기에 따라 띄어앉기 좌석이 변경될 수 있습니다.
    
    [검단지점 주차안내]
    건물 내 주차장이 협소하여 지점 이용에 어려움이 있을 수 있습니다.
    원활한 영화관람을 위하여 가급적 대중교통 이용을 부탁드립니다.
    
    ※ 만차 시 인근 제휴주차장 및 공영주차장 이용을 부탁드립니다.`);
  };
  return (
    <TimeContext.Provider value={contextValue}>
      <TimeWrapper>
        <TimeTitleWrapper>
          <TimeTitle>시간</TimeTitle>
          <TimePartList />
        </TimeTitleWrapper>
        <TimeList />
        {bookingActive && (
          <ShowMovieDataList>
            {movieStartTime.map((item, key) => {
              return (
                <ShowMovieBtn role="button" key={key} onClick={handleTimeClick}>
                  <ShowTimeWrapper>
                    <StartTime>{item}</StartTime>
                    <EndTime>~{movieStartTime[key]}</EndTime>
                  </ShowTimeWrapper>
                  <ShowTitle>{movieValue}</ShowTitle>
                  <ShowLoaction>{locationValue}</ShowLoaction>
                </ShowMovieBtn>
              );
            })}
          </ShowMovieDataList>
        )}
      </TimeWrapper>
    </TimeContext.Provider>
  );
}

const TimeWrapper = styled.div`
  width: 435px;
  height: 530px;
  border-right: 1px solid #d8d9db;
  border-bottom: 1px solid #d8d9db;
`;

const TimeTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #d8d9db;
`;

const TimeTitle = styled.h3`
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #444;
`;

const ShowMovieDataList = styled.ul`
  width: 100%;
  height: 100%;
`;

const ShowMovieBtn = styled.li`
  display: flex;
  padding: 10px 3px 10px 20px;
  border-bottom: 1px solid #d8d9db;
  font-family: -apple-system, sans-serif;
  &:hover {
    color: #fff;
    background: #666;
  }
`;

const ShowTimeWrapper = styled.div``;

const StartTime = styled.div`
  font-weight: 700;
  font-size: 20px;
  font-family: system-ui;
`;
const EndTime = styled.div`
  font-size: 16px;
  font-family: system-ui;
  color: #bcbcbc;
`;

const ShowTitle = styled.div`
  margin-left: 10px;
  font-size: 16px;
`;

const ShowLoaction = styled.div`
  margin-left: auto;
  font-size: 13px;
`;
export default Time;
