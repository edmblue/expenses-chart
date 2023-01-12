import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useEffect } from 'react';

const Chart = ({ Data }) => {
  const backgroundSet = () => {
    const maxArg = Data.map((x, i) => [x.amount, i]).reduce((r, a) =>
      a[0] > r[0] ? a : r
    )[1];

    return Data.map((x, i) => {
      if (i === maxArg) {
        return 'hsl(186, 34%, 60%)';
      } else {
        return 'hsl(10, 79%, 65%)';
      }
    });
  };

  const backgroundSetHover = () => {
    const maxArg = Data.map((x, i) => [x.amount, i]).reduce((r, a) =>
      a[0] > r[0] ? a : r
    )[1];

    return Data.map((x, i) => {
      if (i === maxArg) {
        return 'hsl(186, 34%, 60%,0.5)';
      } else {
        return 'hsl(10, 79%, 65%,0.5)';
      }
    });
  };

  useEffect(() => {
    console.log(backgroundSet());
  });

  const [options, setOptions] = useState({
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: 'none',
        displayColors: false,
        backgroundColor: 'hsl(25, 47%, 15%)',
        callbacks: {
          title: () => null,
          label: function (context) {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
          drawBorder: false,
        },
        display: false,
        ticks: {
          display: false,
        },
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = 'pointer';
      } else if (chartElement.length == 0) {
        event.native.target.style.cursor = 'default';
      }
    },
  });

  const [dayData, setDayData] = useState({
    labels: Data.map((item) => item.day),
    datasets: [
      {
        data: Data.map((item) => item.amount),
        backgroundColor: backgroundSet(),
        borderRadius: 3,
        borderSkipped: false,
        hoverBackgroundColor: backgroundSetHover(),
      },
    ],
  });

  return <Bar data={dayData} options={options} />;
};

export default Chart;
