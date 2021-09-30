import { format, add, eachDayOfInterval } from 'date-fns';
import ko from 'date-fns/locale/ko';

const DATE_FORMAT = 'yyyy-MM-dd';

export const today = new Date();

export const formatDateLocale = (date, formatString = DATE_FORMAT) => {
  return format(new Date(date), formatString, { locale: ko });
};

export const formatDateAdd = (date, day) => {
  const twoWeeks = add(new Date(date), { days: day });
  return formatDateLocale(twoWeeks, DATE_FORMAT);
};

export const createTwoWeeks = (startDate, endDate) => {
  return eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  });
};

export const createDateTypes = date => {
  return {
    fullDate: formatDateLocale(date, DATE_FORMAT),
    year: formatDateLocale(date, 'yyyy'),
    month: formatDateLocale(date, 'MM'),
    date: formatDateLocale(date, 'dd'),
    name: formatDateLocale(date, 'ccc'),
  };
};

export const getDateKOR = date => {
  return date.map(item => createDateTypes(item));
};
