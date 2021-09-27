import React from 'react';
import styled from 'styled-components';

import { Radar } from 'react-chartjs-2';

function PointRating() {
  return (
    <ChartWrapper>
      <Radar data={data} options={options} />
    </ChartWrapper>
  );
}

const data = {
  labels: ['연출', '배우', 'OST', ' 영상미', '스토리'],
  datasets: [
    {
      label: '관람포인트',
      data: [3.5, 2, 3.7, 4, 2],
      pointBorderColor: 'rgba(0,0,0,0)',
      backgroundColor: 'rgba(154,107,254,0)',
      borderColor: '#9A6BFE',
      borderWidth: 3,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      grid: {
        color: '#CDCDCD',
        lineWidth: 2,
      },
      ticks: {
        stepSize: 1,
        display: false,
      },
      min: 1,
      max: 4,
      angleLines: {
        display: true,
        color: '#CDCDCD',
        lineWidth: 2,
      },
    },
  },
};

const ChartWrapper = styled.div`
  width: 120%;
  height: 150px;
  margin-top: -20px;
`;

export default PointRating;
