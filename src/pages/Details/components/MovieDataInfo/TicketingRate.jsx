import React from 'react';
import styled from 'styled-components';

import { Bar } from 'react-chartjs-2';

function TicketingRate() {
  return (
    <ChartWrapper>
      <Bar data={data} options={options} />
    </ChartWrapper>
  );
}

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
        display: false,
        borderColor: '#A1A1A1',
      },
      ticks: {
        display: true,
        font: {
          size: 12,
        },
      },
    },
    y: {
      display: false,
      beginAtZero: true,
      ticks: {
        display: false,
      },
    },
  },
};

const data = {
  labels: ['10대', '20대', '30대', '40대', '50대'],
  datasets: [
    {
      label: '예매율',
      data: [120000, 190000, 30000, 50000, 20000, 30000],
      fill: false,
      backgroundColor: '#4FA2B8',
      borderColor: '#4FA2B8',
      borderWidth: 1,
    },
  ],
};

const ChartWrapper = styled.div`
  width: 100%;
  height: 180px;
`;
export default TicketingRate;
