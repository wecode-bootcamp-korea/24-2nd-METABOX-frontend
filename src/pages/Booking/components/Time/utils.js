import { eachHourOfInterval, format, set } from 'date-fns';
import ko from 'date-fns/locale/ko';

const DATE_FORMAT = 'HH';

export const today = new Date();

export const setDateTime = (date, hour) => {
  return set(date, { hours: hour });
};

export const createDayDateTimes = (startDate, endDate) => {
  return eachHourOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  });
};

export const formatDateLocale = (data, formatString = DATE_FORMAT) => {
  return format(new Date(data), formatString, { locale: ko });
};
