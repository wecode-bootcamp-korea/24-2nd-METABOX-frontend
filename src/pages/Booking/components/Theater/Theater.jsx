import React, { useState, useEffect, createContext } from 'react';
import ThaterList from './ThaterList';
import { url } from '../../../../config';
import styled from 'styled-components';

export const TheaterContext = createContext({
  theaterCityList: [],
});

function Theater() {
  const [theaterTabName, setTheaterTabName] = useState('');
  const [theaterCityList, setTheaterCityList] = useState([]);
  const [theaterLoaction, setTheaterLoaction] = useState([]);
  const [thaterActive, setThaterActive] = useState(false);
  const [locationActive, setLocationActive] = useState(false);
  const [theaterSelectList, setTheaterSelectList] = useState([...Array(3)]);
  useEffect(() => {
    fetch('/data/movieCity.json')
      .then(res => res.json())
      .then(data => setTheaterCityList(data));

    fetch(`${url}/bookings`)
      .then(res => res.json())
      .then(data =>
        setTheaterLoaction(
          data.THEATERS.map(item => ({ ...item, city: '서울', click: false }))
        )
      );
  }, []);

  const contextValue = {
    theaterTabName,
    setTheaterTabName,
    theaterCityList,
    setTheaterCityList,
    theaterLoaction,
    setTheaterLoaction,
    thaterActive,
    setThaterActive,
    theaterSelectList,
    setTheaterSelectList,
    locationActive,
    setLocationActive,
  };
  return (
    <TheaterContext.Provider value={contextValue}>
      <TheaterWrapper>
        <TheaterTitle>극장</TheaterTitle>
        <ThaterList />
      </TheaterWrapper>
    </TheaterContext.Provider>
  );
}

const TheaterTitle = styled.h3`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 600;
`;

const TheaterWrapper = styled.div`
  width: 290px;
  padding: 0 20px 0 18px;
  border-right: 1px solid #d8d9db;
  border-bottom: 1px solid #d8d9db;
`;

export default Theater;
