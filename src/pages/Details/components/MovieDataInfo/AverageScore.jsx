import React from 'react';
import styled from 'styled-components';

function AverageScore({ score }) {
  return (
    <ScoreWrapper>
      <ScoreInCirCle>{score}</ScoreInCirCle>
      <TimeWhenScored>관람 후</TimeWhenScored>
    </ScoreWrapper>
  );
}

const TimeWhenScored = styled.span`
  margin-top: 10px;
  font-size: 0.8em;
  padding-top: 10px;
  font-weight: 400;
  color: #666;
`;
const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ScoreInCirCle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: #6648b1;
  border-radius: 100%;
  color: white;
  font-size: 1.8em;
`;

export default AverageScore;
