import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('ko', ko);

function CalendarDatePicker({ onChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = date => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <Styles>
      <DatePicker
        dateFormat="yyyy.MM.dd(eee)"
        locale="ko"
        todayButton="오늘"
        customInput={
          <CalendarDatePickerBtn type="button" name="datePicker">
            <i className="far fa-calendar-alt" />
          </CalendarDatePickerBtn>
        }
        selected={selectedDate}
        onChange={handleChange}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          return (
            <Wrapper>
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <Icon className="fas fa-chevron-left" primary />
              </button>
              <div className="custom-month">
                <CustomText>
                  {date.getFullYear()}년 {date.getMonth() + 1}월
                </CustomText>
              </div>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <Icon className="fas fa-chevron-right" />
              </button>
            </Wrapper>
          );
        }}
      />
    </Styles>
  );
}

const Styles = styled.div`
  .react-datepicker {
    width: 215px;
    &__header {
      padding: 0;
      &--custom {
        border-bottom: 0;
      }
    }

    &__month {
      margin: 0 1px;
      text-align: initial;
    }

    &__month-container {
      float: initial;
    }

    &__day-names {
      display: flex;
      justify-content: space-around;
      padding-bottom: 5px;
      font-size: 12px;
      font-weight: 600;
      background-color: #fff;
    }

    &__day {
      margin: 0 1.5px;
      font-size: 12px;
      color: #777;
      &:hover {
        border: 1px solid #01738b;
        border-radius: 20px;
        background: #01738b;
        color: #fff;
      }

      &--today {
        border: 1px solid #01738b;
        border-radius: 15px;
        background: #01738b;
        color: #fff;

        &:hover {
          border: 1px solid #01738b;
          border-radius: 20px;
          background: #01738b;
          color: #fff;
        }
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 214px;
  margin-left: -1px;
  display: flex;
  justify-content: space-between;
  padding: 5px 3px;
  border-radius: 3px;
  background: #351f66;
`;

const CustomText = styled.span`
  color: #fff;
  font-size: 12px;
`;

const Icon = styled.i`
  font-size: 11px;
  color: ${({ primary }) => (primary ? '#493575' : '#fff')};
`;

const CalendarDatePickerBtn = styled.button`
  width: 40px;
  height: 40px;
  border-top: 1px solid #444;
  border-left: 1px solid #d8d9db;
  border-right: 1px solid #d8d9db;
  color: #444;
  &:hover {
    color: #1010104d;
  }
`;

export default CalendarDatePicker;
