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
import { Scatter } from 'react-chartjs-2';
import { COLORS } from '@master-c8/theme';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Not sure yet if this value will change and if it  will be passed as a prop
const currencyName = 'USD';

const options = {
    scales: {
        y: {
            ticks: {
                display: false,
            },
        },
        x: {
            ticks: {
                callback: (tick, i, ticks) =>
                    i === Math.floor(ticks.length / 2) ? [`$${tick} `, '(~median)'] : `$${tick}`,
            },
        },
    },
    plugins: {
        title: {
            display: true,
            text: `Normal distribution of salaries (${currencyName})`,
            font: {
                size: 20,
            },
        },
        legend: {
            position: 'bottom',
            labels: {
                boxHeight: 3,
            },
        },
        tooltip: {
            callbacks: {
                title: ([{ dataIndex }]) => {
                    const percentage = [0, 20, 50, 80, 100];
                    return `Averege Salary for the ${percentage[dataIndex]}% range`;
                },
                label: ({ label }) => {
                    return `${currencyName}$ ${label}`;
                },
            },
        },
    },
    aspectRatio: 1.5,
};

export const NormalDistributionChart = ({ values }) => {
    const lineColors = [COLORS.secondary, COLORS.contrast1];

    const data = {
        datasets: values.map(({ salariesBottom20, salariesAverage, salariesTop20 }, i) => {
            return {
                label: `Profile ${i + 1}`,
                showLine: true,
                borderColor: lineColors[i] || COLORS.error,
                backgroundColor: lineColors[i] || COLORS.error,
                borderWidth: 4,
                tension: 0.4,
                data: [
                    {
                        x: salariesBottom20 - (salariesTop20 - salariesBottom20) * 0.6,
                        y: 0,
                    },
                    {
                        x: salariesBottom20,
                        y: 20,
                    },
                    {
                        x: salariesAverage,
                        y: 50,
                    },
                    {
                        x: salariesTop20,
                        y: 20,
                    },
                    {
                        x: salariesTop20 + (salariesTop20 - salariesBottom20) * 0.6,
                        y: 0,
                    },
                ],
            };
        }),
    };

    return <Scatter options={options} data={data} />;
};

NormalDistributionChart.propTypes = {
    values: PropTypes.arrayOf(PropTypes.object),
};

NormalDistributionChart.defaultProps = {
    values: [],
};
