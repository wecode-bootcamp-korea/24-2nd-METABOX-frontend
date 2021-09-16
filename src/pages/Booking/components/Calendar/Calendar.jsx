import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const year = dayjs().get('year');
const month = dayjs().format('MM');

const addDate = day => dayjs().add(day, 'days').toDate();
const formatDate = (date, formatString) => dayjs(date).format(formatString);
const twoWeeks = [...Array(12)]
  .map((_, idx) => addDate(idx))
  .map(date => [formatDate(date, 'DD'), formatDate(date, 'ddd')]);
const DAY_OF_THE_WEEK_ENG_TO_KR = {
  Mon: '월',
  Tue: '화',
  Wed: '수',
  Thu: '목',
  Fri: '금',
  Sat: '토',
  Sun: '일',
};

function Calendar() {
  return (
    <Wrapper>
      <Year>
        {year}.{month}
      </Year>
      <InnerWrapper>
        <LeftBtn>
          <i className="fas fa-chevron-left" />
        </LeftBtn>
        <DayList>
          {twoWeeks.map(([date, day]) => (
            <li>
              <Btn>
                <Text>{date}</Text>
                <Icon className="fas fa-circle" />
                <Text primary>{DAY_OF_THE_WEEK_ENG_TO_KR[day]}</Text>
              </Btn>
            </li>
          ))}
          <li>
            <Btn primary>
              <Text>17</Text>
              <Icon className="fas fa-circle" />
              <Text primary>오늘</Text>
            </Btn>
          </li>
          <li>
            <Btn>
              <Text>18</Text>
              <Icon className="fas fa-circle" />
              <Text primary>일</Text>
            </Btn>
          </li>
        </DayList>
        <RightBtn primary>
          <i className="fas fa-chevron-right" />
        </RightBtn>
        <CalendarBtn>
          <i className="far fa-calendar-alt" />
        </CalendarBtn>
      </InnerWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  overflow: hidden;
`;
const InnerWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 4px 0;
  height: 32px;
  border-top: 1px solid #444;
  border-left: 1px solid #d9d8dd;
  border-right: 1px solid #d9d8dd;
  border-bottom: 1px solid #d9d8dd;
`;

const Year = styled.div`
  position: relative;
  top: 8px;
  left: 16px;
  width: 53px;
  border: 1px solid #d8d9db;
  border-radius: 20px;
  font-size: 12px;
  text-align: center;
  background: #fff;
  color: #444;
  z-index: 30;
`;

const DayList = styled.ul`
  display: -webkit-box;
  width: 835px;
`;

const LeftBtn = styled.button`
  -webkit-appearance: button;
  margin-left: -5px;
  width: 30px;
  line-height: 22px;
  font-size: 11.5px;
  color: #1010104d;
`;

const RightBtn = styled.button`
  -webkit-appearance: button;
  width: ${props => (props.primary ? '26px' : '60px')};
  line-height: 22px;
  font-size: 11.5px;
  color: #1010104d;
`;

const Text = styled.span`
  letter-spacing: -1px;
  font-size: ${props => (props.primary ? '11px' : '13.5px')};
  font-family: system-ui;
`;

const Icon = styled.i`
  position: relative;
  bottom: 3px;
  padding: 0 1.5px;
  font-size: 2px;
`;

const Btn = styled.button`
  -webkit-appearance: button;
  position: relative;
  bottom: 4px;
  right: 7px;
  height: 30.5px;
  border-bottom: 2px solid ${props => (props.primary ? '#503396' : '0')};
  background: ${props => (props.primary ? '#f7f8f9' : '#fff')};
`;

const CalendarBtn = styled.button`
  -webkit-appearance: button;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 0 10px;
  border-left: 1px solid #d8d9db;
  color: #444;
`;

export default Calendar;
