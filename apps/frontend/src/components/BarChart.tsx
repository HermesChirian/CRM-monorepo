import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

  const data = {
    labels: ['Material Desperdiciado', 'Material Utilizado'],
    datasets: [
      {
        label: 'Cantidad de material',
        data: [15, 85,],
        backgroundColor: [
          '#F44336',
          'green',
        ]
      }
    ]
  };

export default function BarChart() {

  return <Bar data={data} />;
}