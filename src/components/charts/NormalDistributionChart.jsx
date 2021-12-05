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
import { Scatter } from 'react-chartjs-2';
import { COLORS } from '@master-c8/theme';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                display: false,
            },
        },
    },
    plugins: {
        title: {
            display: true,
            text: 'Normal distribution of salaries',
            fullSize: true,
            font: {
                size: 20,
            },
        },
        legend: {
            position: 'bottom',
        },
    },
};

export const NormalDistributionChart = ({ values }) => {
    const {
        salariesBottom20: salariesBottom20Profile1,
        salariesAverage: salariesAverageProfile1,
        salariesTop20: salariesTop20Profile1,
    } = values.profile1;
    const {
        salariesBottom20: salariesBottom20Profile2,
        salariesAverage: salariesAverageProfile2,
        salariesTop20: salariesTop20Profile2,
    } = values.profile2;

    const data = {
        datasets: [
            {
                label: 'Profile 1',
                showLine: true,
                borderColor: COLORS.secondary,
                borderWidth: 4,
                tension: 0.4,
                data: [
                    {
                        x: 500,
                        y: 0,
                    },
                    {
                        x: salariesBottom20Profile1,
                        y: 20,
                    },
                    {
                        x: salariesAverageProfile1,
                        y: 50,
                    },
                    {
                        x: salariesTop20Profile1,
                        y: 20,
                    },
                    {
                        x: 1700,
                        y: 0,
                    },
                ],
                backgroundColor: COLORS.secondary,
            },
            {
                label: 'Profile 2',
                showLine: true,
                borderColor: COLORS.contrast1,
                borderWidth: 4,
                tension: 0.4,
                data: [
                    {
                        x: 500,
                        y: 0,
                    },
                    {
                        x: salariesBottom20Profile2,
                        y: 20,
                    },
                    {
                        x: salariesAverageProfile2,
                        y: 50,
                    },
                    {
                        x: salariesTop20Profile2,
                        y: 20,
                    },
                    {
                        x: 1700,
                        y: 0,
                    },
                ],
                backgroundColor: COLORS.contrast1,
            },
        ],
    };

    return <Scatter options={options} data={data} />;
};

NormalDistributionChart.propTypes = {
    values: PropTypes.shape({
        profile1: PropTypes.shape({
            salariesBottom20: PropTypes.number.isRequired,
            salariesAverage: PropTypes.number.isRequired,
            salariesTop20: PropTypes.number.isRequired,
        }),
        profile2: PropTypes.shape({
            salariesBottom20: PropTypes.number.isRequired,
            salariesAverage: PropTypes.number.isRequired,
            salariesTop20: PropTypes.number.isRequired,
        }),
    }),
};

NormalDistributionChart.defaultProps = {
    values: PropTypes.shape({
        profile1: {
            salariesBottom20: 0,
            salariesAverage: 0,
            salariesTop20: 0,
        },
        profile2: {
            salariesBottom20: 0,
            salariesAverage: 0,
            salariesTop20: 0,
        },
    }),
};
