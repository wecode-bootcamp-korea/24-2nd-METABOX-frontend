import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import {
  today,
  createTwoWeeks,
  createDateTypes,
  formatDateAdd,
  formatDateLocale,
  getDateKOR,
} from './utils';
import { isToday } from 'date-fns';
import TwoWeeksCaledar from './TwoWeeksCalendar';
import CalendarDatePicker from '../CalendarDatePicker/CalendarDatePicker';

export const CalendarContext = createContext({
  calendarDate: [],
});

const date = getDateKOR(createTwoWeeks(today, formatDateAdd(today, 13)));
function Calendar() {
  const [calendarDate, setCalendarDate] = useState(date);
  const [startDate, setStartDate] = useState(date[0]);
  const [endDate, setEndDate] = useState(date[date.length - 1]);
  const [isLeft, setIsLeft] = useState(0);

  const handleDatePickerChange = date => {
    const newEndDate = createDateTypes(formatDateAdd(endDate.fullDate, 1));
    if (!isToday(new Date(startDate.fullDate))) {
      return;
    }
    if (calendarDate.find(it => it.fullDate === newEndDate.fullDate)) {
      return;
    }
    setStartDate(createDateTypes(formatDateLocale(date)));
    setEndDate(createDateTypes(formatDateAdd(formatDateLocale(date), 13)));
    setCalendarDate(getDateKOR(createTwoWeeks(date, formatDateAdd(date, 13))));
    setIsLeft(0);
  };

  const contextValue = {
    calendarDate,
    setCalendarDate,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isLeft,
    setIsLeft,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      <CalendarWrapper>
        <TwoWeeksCaledar />
        <CalendarDatePicker onChange={handleDatePickerChange} />
      </CalendarWrapper>
    </CalendarContext.Provider>
  );
}

export default Calendar;

const CalendarWrapper = styled.div`
  width: 1000px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #d9d8dd;
`;
