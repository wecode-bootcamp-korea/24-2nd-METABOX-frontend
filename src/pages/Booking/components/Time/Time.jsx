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
    movieID,
    movieValue,
    locationID,
    movieStartTime,
    locationValue,
    bookingActive,
    movieEndTime,
  } = useContext(BookingContext);

  const [timeMovieData, setTimeMovieData] = useState([]);
  const [timeList, setTimeList] = useState(time);
  const contextValue = {
    timeList,
    setTimeList,
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
            <ShowMovieBtn role="button">
              <ShowTimeWrapper>
                <StartTime>08:10</StartTime>
                <EndTime>~01:00</EndTime>
              </ShowTimeWrapper>
              <ShowTitle>용서는 없다</ShowTitle>
              <ShowLoaction>홍대</ShowLoaction>
            </ShowMovieBtn>
          </ShowMovieDataList>
        )}
      </TimeWrapper>
    </TimeContext.Provider>
  );
}

const TimeWrapper = styled.div`
  width: 420px;
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
