import React, { useContext } from 'react';
import { TimeContext } from './Time';
import { formatDateLocale } from './utils';
import styled from 'styled-components';

const TimeList = () => {
  const { timeList } = useContext(TimeContext);
  return (
    <TimeListWrapper>
      <TimeListActionBtn type="button" action="prev">
        <i className="fas fa-chevron-left" />
      </TimeListActionBtn>
      {timeList.map((data, idx) => (
        <TimeBtn key={idx} role="button">
          {formatDateLocale(data)}
        </TimeBtn>
      ))}
      <TimeListActionBtn type="button" action="next">
        <i className="fas fa-chevron-right" />
      </TimeListActionBtn>
    </TimeListWrapper>
  );
};

const TimeListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #d8d9db;
`;
const TimeBtn = styled.li`
  font-size: 17px;
  font-family: system-ui;
  color: #a2a2a2;

  &:hover {
    cursor: pointer;
  }
`;
const TimeListActionBtn = styled.button`
  width: 20px;
  height: 24px;
  color: #1010104d;

  &:hover {
    color: #444;
    cursor: pointer;
  }
`;
export default TimeList;
