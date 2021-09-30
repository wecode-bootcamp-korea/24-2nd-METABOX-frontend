import React, { useContext } from 'react';
import styled from 'styled-components';
import { CalendarContext } from './Calendar';
import useCalendar from './hooks/useCalendar';
import { isToday, isTomorrow } from 'date-fns';

const calendarDateBtnSize = 880 / 14;

const TwoWeeksCalendar = () => {
  const { calendarDate, startDate, isLeft } = useContext(CalendarContext);

  const { prev, next } = useCalendar();

  return (
    <>
      <TwoWeeksActionBtn
        type="button"
        action="prev"
        onClick={prev}
        disabled={isToday(new Date(startDate.fullDate))}
      >
        <i className="fas fa-chevron-left" />
      </TwoWeeksActionBtn>
      <TwoWeeksListWrapper>
        <TwoWeeksList isLeft={isLeft}>
          {calendarDate.map((data, idx) => (
            <CalendarBtn
              role="button"
              key={idx}
              className={isToday(new Date(data.fullDate)) && 'today'}
            >
              {calendarDate[idx].fullDate === startDate.fullDate && (
                <YearMonthTag>
                  {startDate.year}.{startDate.month}
                </YearMonthTag>
              )}
              {data.fullDate !== startDate.fullDate && data.date === '01' && (
                <YearMonthTag>
                  {data.year}.{data.month}
                </YearMonthTag>
              )}
              <CalendarDate>{data.date}</CalendarDate>
              <CalendarIcon className="fas fa-circle" />
              {isToday(new Date(data.fullDate)) && (
                <CalendarDate primary>오늘</CalendarDate>
              )}
              {isTomorrow(new Date(data.fullDate)) && (
                <CalendarDate primary>내일</CalendarDate>
              )}
              {!isToday(new Date(data.fullDate)) &&
                !isTomorrow(new Date(data.fullDate)) && (
                  <CalendarDate primary>{data.name}</CalendarDate>
                )}
            </CalendarBtn>
          ))}
        </TwoWeeksList>
      </TwoWeeksListWrapper>
      <TwoWeeksActionBtn type="button" action="next" onClick={next}>
        <i className="fas fa-chevron-right" />
      </TwoWeeksActionBtn>
    </>
  );
};

export default TwoWeeksCalendar;

const TwoWeeksListWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  overflow-x: hidden;
`;

const TwoWeeksActionBtn = styled.button`
  flex: 0 0 40px;
  height: 40px;
  line-height: 22px;
  border-top: 1px solid #444;
  border-left: ${({ action }) => action === 'prev' && '1px solid #d8d9db'};
  font-size: 11.5px;
  color: #1010104d;

  &:hover:not(:disabled) {
    color: #444;
  }

  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    cursor: pointer;
  }
`;

const TwoWeeksList = styled.ul`
  display: flex;
  width: 100%;
  height: 40px;
  margin-left: ${({ isLeft }) => `${isLeft}px`};
`;

const CalendarBtn = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 ${calendarDateBtnSize}px;
  height: 100%;
  border-top: 1px solid #444;
  border-bottom: 2px solid transparent;
  &.today {
    background: #f7f8f9;
    border-bottom: 2px solid #503396;
  }
  &:hover {
    border-bottom: 2px solid #503396;
    cursor: pointer;
  }
`;

const CalendarDate = styled.span`
  display: block;
  letter-spacing: -1px;
  font-size: ${({ primary }) => (primary ? '11px' : '14px')};
  font-family: system-ui;
`;

const CalendarIcon = styled.i`
  display: block;
  padding: 0 1.5px;
  font-size: 2px;
`;

const YearMonthTag = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  width: ${880 / 14}px;
  border: 1px solid #d8d9db;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  background: #fff;
  color: #444;
  z-index: 30;
`;
