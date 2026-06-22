import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


  const data = {
    labels: ['Material Desperdiciado', 'Material Utilizado'],
    datasets: [
      {
        data: [15, 85,],
        backgroundColor: [
          '#F44336',
          'green',
        ]
      }
    ]
  };

export default function PieChart() {

  return <Pie data={data} />;
}