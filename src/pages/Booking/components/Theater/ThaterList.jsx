import React, { useContext } from 'react';
import { BookingContext } from '../../Booking';
import { TheaterContext } from './Theater';
import { url as URL } from '../../../../config';
import styled from 'styled-components';

const ThaterList = () => {
  const {
    theaterCityList,
    theaterLoaction,
    setTheaterLoaction,
    thaterActive,
    setThaterActive,
    theaterSelectList,
    setTheaterSelectList,
    locationActive,
    setLocationActive,
  } = useContext(TheaterContext);
  const {
    movieID,
    setLocationID,
    setBookingActive,
    setMovieStartTime,
    setLocationValue,
    setMovieEndTime,
  } = useContext(BookingContext);

  const handleCityClick = () => {
    setThaterActive(true);
  };
  const handleLocation = data => {
    const list = [...theaterLoaction];
    const clickIndex = clickSearchItem(data);
    data.click = true;
    list.splice(clickIndex, data);
    setTheaterLoaction(list);
    setLocationID(data.theater_id);
    setLocationValue(data.location);

    const selectList = [...theaterSelectList];
    const changeIndex = selectList.findIndex(item => item !== -1);
    selectList.splice(changeIndex, 0, data);
    selectList.pop();
    setLocationActive(true);
    setTheaterSelectList(selectList);
    setBookingActive(true);

    fetch(`${URL}/bookings?movie-id=${movieID}&theater-id=${data.theater_id}`)
      .then(res => res.json())
      .then(data => {
        setMovieStartTime(data.TIMETABLE.map(item => item.start_time));
        setMovieEndTime(data.TIMETABLE.map(item => item.end_time));
      });
  };

  const handleDelete = data => {
    data.click = false;
    const selectList = [...theaterSelectList];
    const deleteIndex = deleteSearchItem(data);
    selectList.splice(deleteIndex, 1);
    selectList.push(undefined);
    setTheaterSelectList(selectList);
  };

  const deleteSearchItem = data => {
    return theaterSelectList.findIndex(item => item === data);
  };
  const clickSearchItem = data => {
    return theaterLoaction.findIndex(item => item.location === data.location);
  };

  return (
    <>
      <TheaterTab>
        <TheaterTabBtn role="button">전체</TheaterTabBtn>
        <TheaterTabBtn role="button" primary>
          특별관
        </TheaterTabBtn>
      </TheaterTab>
      <TheaterListWrapper>
        <TheaterCityList>
          {theaterLoaction.map((data, idx) => {
            if (idx === 1) {
              return (
                <TheaterCityBtn
                  role="button"
                  key={idx}
                  onClick={() => handleCityClick(data)}
                  className={thaterActive && 'isActive'}
                >
                  {data.city}
                  {theaterCityList.map((data, idx) => {
                    return (
                      data.city !== '서울' && (
                        <TheaterCityBtn
                          className="notCity"
                          onClick={() => handleCityClick(data)}
                          role="button"
                          key={idx}
                          disabled={true}
                        >
                          {data.city}
                        </TheaterCityBtn>
                      )
                    );
                  })}
                </TheaterCityBtn>
              );
            }
          })}
        </TheaterCityList>
        {thaterActive && (
          <LocationList>
            {theaterLoaction.map((data, idx) => {
              return (
                <LocationItem
                  key={idx}
                  role="button"
                  className={data.click && 'isActive'}
                  onClick={() => handleLocation(data)}
                >
                  {data.location}
                </LocationItem>
              );
            })}
          </LocationList>
        )}
      </TheaterListWrapper>
      <TheaterSelectWrapper className={locationActive && 'isActive'}>
        {!locationActive && (
          <TheaterSelecContent>
            전체극장
            <br /> 목록에서 극장을 선택하세요
          </TheaterSelecContent>
        )}
        {locationActive && (
          <ThaterSelectList>
            {theaterSelectList.map((data, idx) => {
              return data ? (
                <CityItem
                  role="button"
                  key={idx}
                  onClick={() => handleDelete(data)}
                >
                  <CityContent>{data.location}</CityContent>
                  <CityIcon className="fas fa-times" />
                </CityItem>
              ) : (
                <CityItem role="button" key={idx} primary>
                  <CityIcon className="fas fa-plus" primary />
                </CityItem>
              );
            })}
          </ThaterSelectList>
        )}
      </TheaterSelectWrapper>
    </>
  );
};

const TheaterTab = styled.div`
  display: flex;
  width: 100%;
`;

const TheaterListWrapper = styled.div`
  display: flex;
  height: 60%;
  margin-top: 10px;
`;

const TheaterCityList = styled.ul`
  width: 125px;
  border-right: 1px solid #d8d9db;
`;

const TheaterTabBtn = styled.div`
  flex: 0 0 125px;
  height: 30px;
  border: 1px solid #666;
  border-bottom: ${({ primary }) => primary || '0'};
  border-right: ${({ primary }) => primary || '0'};
  font-size: 13px;
  text-align: center;
`;

const ThaterSelectList = styled.ul`
  width: 270px;
  display: flex;
`;
const CityItem = styled.li`
  position: relative;
  width: 90px;
  height: 90px;
  border: ${({ primary }) => primary && '1px solid #ebebeb'};
  border-radius: ${({ primary }) => primary && '50%'};
  margin-right: 5px;
`;

const TheaterCityBtn = styled.li`
  margin: 5px 0;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }

  &.notCity {
    margin: 0 0;
    color: #999;
    background: #f7f8f9;
    &:hover {
      cursor: not-allowed;
    }
  }
  &.isActive {
    color: #fff;
    background: #666;
  }
`;

const TheaterSelectWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin: 10px 0 0 0;
  border: 1px solid #ebebeb;
  &.isActive {
    border: 0;
  }
`;
const TheaterSelecContent = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 14px;
  text-align: center;
  color: #4c4c4c;
`;

const LocationList = styled.ul`
  width: 50%;
  margin: 5px 0 0 5px;
`;

const LocationItem = styled.li`
  height: 22px;
  font-size: 13px;
  color: #000;
  &.isActive {
    color: #fff;
    background: #666;
  }
`;

const CityContent = styled.div`
  width: 100%;
  height: 100%;
  line-height: 90px;
  border-radius: 50%;
  text-align: center;
  font-size: 12.5px;
  background: #ebebeb;
`;

const CityIcon = styled.i`
  width: 24px;
  height: 24px;
  position: absolute;
  top: ${({ primary }) => (primary ? '38%' : '0')};
  right: ${({ primary }) => (primary ? '36%' : '0')};
  border: ${({ primary }) => (primary ? '0' : '1px solid #d8d9db')};
  border-radius: 50%;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  background: #fff;
  text-align: center;

  &:hover {
    color: #fff;
    background: #444;
    cursor: pointer;
  }
  &.fa-plus {
    &:hover {
      color: #666;
      background: #fff;
    }
  }
`;

export default ThaterList;
