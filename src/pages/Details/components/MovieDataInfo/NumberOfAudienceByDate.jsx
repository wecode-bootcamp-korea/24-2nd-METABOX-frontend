import React from 'react';
import styled from 'styled-components';

import { Line } from 'react-chartjs-2';

function NumberOfAudienceByDate() {
  return (
    <ChartWrapper>
      <Line data={data} options={options} />
    </ChartWrapper>
  );
}

const data = {
  labels: ['09.21', '09.22', '09.23', '09.24', '09.25'],
  datasets: [
    {
      label: '누적관객수',
      data: [20000, 45000, 95000, 150000, 180000, 250000],
      fill: false,
      backgroundColor: 'rgba(214,207,224,0.5)',
      borderColor: '#80CADA',
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: '#454545',
        borderColor: 'black',
        borderDash: [2, 5],
      },
      ticks: {
        display: true,
        font: {
          size: 10,
        },
      },
    },
    y: {
      display: false,
      gird: {
        color: '#fff',
      },
      beginAtZero: true,
      ticks: {
        display: false,
      },
    },
  },
};

const ChartWrapper = styled.div`
  width: 100%;
  height: 180px;
`;

export default NumberOfAudienceByDate;
