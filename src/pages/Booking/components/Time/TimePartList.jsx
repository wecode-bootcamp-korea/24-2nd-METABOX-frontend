import styled from 'styled-components';

const timePartList = [
  {
    part: '조조',
    name: 'far fa-sun',
  },
  {
    part: '브런치',
    name: 'fas fa-mug-hot',
  },
  {
    part: '심야',
    name: 'far fa-moon',
  },
];

const TimePartList = () => {
  return (
    <TimePartListWrapper>
      {timePartList.map((time, idx) => (
        <TimePartBtn role="button" key={idx}>
          <TimePartIcon className={time.name} />
          {time.part}
        </TimePartBtn>
      ))}
    </TimePartListWrapper>
  );
};

const TimePartListWrapper = styled.ul`
  display: flex;
  margin-left: auto;
`;

const TimePartIcon = styled.i`
  font-size: 12px;
  padding-left: 10px;
  &.fa-sun {
    color: #ffc35a;
  }
  &.fa-mug-hot {
    color: #916d43;
  }
  &.fa-moon {
    color: #78d4ef;
  }
`;

const TimePartBtn = styled.li`
  font-size: 14px;
  color: #444;
`;

export default TimePartList;
