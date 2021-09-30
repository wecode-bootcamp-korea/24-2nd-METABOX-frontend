import { useContext } from 'react';
import { CalendarContext } from '../Calendar';
import { createDateTypes, formatDateAdd } from '../utils';
import { isToday } from 'date-fns';

const calendarDateBtnSize = 880 / 14;
const useCalendar = () => {
  const {
    calendarDate,
    setCalendarDate,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setIsLeft,
  } = useContext(CalendarContext);

  const handleCalendarPrev = () => {
    const newStartDate = createDateTypes(formatDateAdd(startDate.fullDate, -1));
    const newEndDate = createDateTypes(formatDateAdd(endDate.fullDate, -1));

    setStartDate(newStartDate);
    setEndDate(newEndDate);
    setIsLeft(prev => prev + calendarDateBtnSize);

    if (!isToday(new Date(startDate.fullDate))) {
      return;
    }
    setCalendarDate(prev => [newStartDate].concat(prev));
  };

  const handleCalendarNext = () => {
    const newStartDate = createDateTypes(formatDateAdd(startDate.fullDate, 1));
    const newEndDate = createDateTypes(formatDateAdd(endDate.fullDate, 1));

    setStartDate(newStartDate);
    setEndDate(newEndDate);
    setIsLeft(prev => prev - calendarDateBtnSize);

    if (!calendarDate.find(it => it.fullDate === newEndDate.fullDate)) {
      setCalendarDate(prev => prev.concat(newEndDate));
    }
  };

  return { prev: handleCalendarPrev, next: handleCalendarNext };
};

export default useCalendar;
