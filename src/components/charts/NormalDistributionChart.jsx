import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { COLORS } from '@master-c8/theme';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Normal distribution of salaries',
        },
    },
};

const labels = ['10%', '25%', '50% (median)', '75%', '90%'];
const salaries1 = [10, 25, 50, 25, 10];
const salaries2 = [8, 23, 48, 23, 8];

export const data = {
    labels,
    datasets: [
        {
            label: 'Profile 1',
            data: labels.map((label, i) => salaries1[i]),
            borderColor: COLORS.contrast1,
            borderWidth: 4,
            tension: 0.4,
        },
        {
            label: 'Profile 2',
            data: labels.map((label, i) => salaries2[i]),
            borderColor: COLORS.secondary,
            borderWidth: 4,
            tension: 0.4,
        },
    ],
};

export const NormalDistributionChart = () => {
    return <Line options={options} data={data} />;
};
