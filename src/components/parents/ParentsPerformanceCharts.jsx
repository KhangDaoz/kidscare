import {
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Tooltip,
  CategoryScale,
} from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
);

const radarData = {
  labels: ['Nguy hiểm', 'Xử lý tại nhà', 'Giao tiếp', 'Ứng phó', 'Cảm xúc'],
  datasets: [
    {
      label: 'Bé An',
      data: [78, 61, 58, 50, 72],
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      borderColor: '#0ea5e9',
      pointBackgroundColor: '#0ea5e9',
      borderWidth: 3,
    },
    {
      label: 'Chuẩn',
      data: [56, 54, 48, 41, 61],
      borderColor: '#cbd5e1',
      borderDash: [5, 5],
      borderWidth: 1,
      pointRadius: 0,
    },
  ],
};

const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: { display: false },
      angleLines: { color: '#e2e8f0' },
      grid: { color: '#e2e8f0' },
      pointLabels: {
        color: '#64748b',
        font: { weight: 700, size: 11 },
      },
    },
  },
  plugins: {
    legend: { display: false },
  },
};

const lineData = {
  labels: ['T1', 'T2', 'T3', 'T4', 'T5'],
  datasets: [
    {
      data: [52, 58, 63, 68, 72],
      borderColor: '#0ea5e9',
      tension: 0.4,
      borderWidth: 4,
      fill: true,
      pointBackgroundColor: '#0ea5e9',
      backgroundColor: 'rgba(14, 165, 233, 0.05)',
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: '#e2e8f0' },
      ticks: { color: '#94a3b8', font: { weight: 700 } },
    },
    x: {
      grid: { display: false },
      ticks: { color: '#94a3b8', font: { weight: 700 } },
    },
  },
  plugins: {
    legend: { display: false },
  },
};

function ChartCard({ title, children }) {
  return (
    <div className="parents-card-shadow rounded-[2.5rem] border border-slate-100 bg-white p-7">
      <h3 className="mb-8 text-sm font-black uppercase text-slate-800">{title}</h3>
      {children}
    </div>
  );
}

export default function ParentsPerformanceCharts() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ChartCard title="Ma trận Năng lực (Digital DNA)">
        <div className="h-[250px]">
          <Radar data={radarData} options={radarOptions} />
        </div>
      </ChartCard>

      <ChartCard title="Hành trình tiến bộ (Tuần)">
        <div className="h-[250px]">
          <Line data={lineData} options={lineOptions} />
        </div>
      </ChartCard>
    </div>
  );
}
