import React from 'react';
import PropTypes from 'prop-types';
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
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Normal distribution of salaries',
            fullSize: true,
            font: {
                size: 20,
            },
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Eje X',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Eje Y',
            },
        },
    },
};

export const NormalDistributionChart = () => {
    const labels = [0.5, 0.6, 0.7, 0.8, 0.9, 1.1, 1.2, 1.3, 1.4, 1.5];

    const data = {
        labels,
        datasets: [
            {
                label: 'Profile 1',
                borderColor: COLORS.contrast1,
                borderWidth: 4,
                tension: 0.4,
                data: [
                    {
                        x: 0,
                        y: 0,
                    },
                    {
                        x: 0.7,
                        y: 20,
                    },
                    {
                        x: 0.9,
                        y: 50,
                    },
                    {
                        x: 1.2,
                        y: 20,
                    },
                    {
                        x: 1.4,
                        y: 0,
                    },
                ],
            },
            {
                label: 'Profile 2',
                borderColor: COLORS.secondary,
                borderWidth: 4,
                tension: 0.4,
                data: [
                    {
                        x: 0,
                        y: 0,
                    },
                    {
                        x: 0.8,
                        y: 20,
                    },
                    {
                        x: 1.1,
                        y: 50,
                    },
                    {
                        x: 1.3,
                        y: 20,
                    },
                    {
                        x: 1.5,
                        y: 0,
                    },
                ],
            },
        ],
    };

    return <Line options={options} data={data} />;
};

NormalDistributionChart.propTypes = {
    values: PropTypes.shape({
        salariesBottom20: PropTypes.number.isRequired,
        salariesAverage: PropTypes.number.isRequired,
        salariesTop20: PropTypes.number.isRequired,
    }),
};

NormalDistributionChart.defaultProps = {
    values: PropTypes.shape({
        salariesBottom20: 0,
        salariesAverage: 0,
        salariesTop20: 0,
    }),
};
