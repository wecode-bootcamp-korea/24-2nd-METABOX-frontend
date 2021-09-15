import React from 'react';
import styled from 'styled-components';
import Calendar from './components/Calendar/Calendar';
import Movie from './components/Movie/Movie';

// [컴포넌트 분리]
// 1. 달력(월, 달력 아이콘)
// 2. 영화
// 3. 극장
// 4. 시간

function Booking() {
  return (
    <div>
      <Wrapper primary bg>
        <TopCategory>
          <TopItems>
            <Icon className="fas fa-home" primary></Icon>
          </TopItems>
          <TopItems>
            <Icon className="fas fa-chevron-right"></Icon>
            <span>예매</span>
          </TopItems>
          <TopItems>
            <Icon className="fas fa-chevron-right"></Icon>
            <span>빠른예매</span>
          </TopItems>
        </TopCategory>
      </Wrapper>
      <Wrapper primary>
        <Title primary>빠른예매</Title>
        <Calendar />
        <Movie />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  padding: ${props => (props.primary ? '0  20%' : '0  0 ')};
  background: ${props => props.bg && '#f8f8fa'};
`;

const TopCategory = styled.ul`
  display: flex;
  padding: 5px 0;
  font-size: 15px;
  color: #aaa;
`;

const TopItems = styled.li`
  margin-right: 9px;
  :first-of-type {
    margin-right: 3px;
    padding-top: 4px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.i`
  margin-right: 5px;
  font-size: ${props => (props.primary ? '13px' : '10px')};
`;

const Title = styled.h1`
  padding: ${props => (props.primary ? '1% 0' : '0')};
  font-size: 18px;
`;
export default Booking;
