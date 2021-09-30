import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import Calendar from './components/Calendar/Calendar';
import Movie from './components/Movie/Movie';
import Theater from './components/Theater/Theater';
import Time from './components/Time/Time';

export const BookingContext = createContext({
  movieID: '',
});
function Booking() {
  const [movieID, setMovieID] = useState('');
  const [movieValue, setMovieValue] = useState('');
  const [locationID, setLocationID] = useState();
  const [locationValue, setLocationValue] = useState('');
  const [bookingActive, setBookingActive] = useState(false);
  const [movieStartTime, setMovieStartTime] = useState([]);
  const [movieEndTime, setMovieEndTime] = useState([]);
  const contextValue = {
    movieValue,
    setMovieValue,
    movieID,
    setMovieID,
    locationID,
    setLocationID,
    locationValue,
    setLocationValue,
    bookingActive,
    setBookingActive,
    movieStartTime,
    setMovieStartTime,
    movieEndTime,
    setMovieEndTime,
  };
  return (
    <BookingContext.Provider value={contextValue}>
      <BookingWrapper primary bg>
        <BookingCategoryList>
          <Category>
            <BookingIcon className="fas fa-home" primary />
          </Category>
          <Category>
            <BookingIcon className="fas fa-chevron-right" />
            <span>예매</span>
          </Category>
          <Category>
            <BookingIcon className="fas fa-chevron-right" />
            <span>빠른예매</span>
          </Category>
        </BookingCategoryList>
      </BookingWrapper>
      <BookingWrapper primary>
        <BookingTitle primary>빠른예매</BookingTitle>
        <Calendar />
        <BookingInnerWrapper>
          <Movie />
          <Theater />
          <Time />
        </BookingInnerWrapper>
      </BookingWrapper>
    </BookingContext.Provider>
  );
}

const BookingWrapper = styled.div`
  padding: ${({ primary }) => (primary ? '0  20%' : '0  0 ')};
  background: ${({ bg }) => bg && '#f8f8fa'};
`;

const BookingInnerWrapper = styled.div`
  display: flex;
  height: 530px;
`;

const BookingTitle = styled.h1`
  padding: ${({ primary }) => (primary ? '2% 0.5%' : '0')};
  font-size: 22px;
`;

const BookingCategoryList = styled.ul`
  display: flex;
  padding: 5px 0;
  font-size: 15px;
  color: #aaa;
`;

const Category = styled.li`
  margin-right: 9px;
  :first-of-type {
    margin-right: 3px;
    padding-top: 4px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const BookingIcon = styled.i`
  margin-right: 5px;
  font-size: ${({ primary }) => (primary ? '13px' : '10px')};
`;

export default Booking;
