import React from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { COLORS } from '@master-c8/theme';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const NormalDistributionChart = ({ values, currencyName }) => {
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

    const lineColors = [COLORS.secondary, COLORS.contrast1];

    const data = {
        datasets: values.map(({ bottom, average, top }, i) => {
            return {
                label: values.length === 1 ? `Your Profile` : `Profile ${i + 1}`,
                showLine: true,
                borderColor: lineColors[i] || COLORS.error,
                backgroundColor: lineColors[i] || COLORS.error,
                borderWidth: 4,
                tension: 0.4,
                data: [
                    {
                        x: bottom - (top - bottom) * 0.6,
                        y: 0,
                    },
                    {
                        x: bottom,
                        y: 20,
                    },
                    {
                        x: average,
                        y: 50,
                    },
                    {
                        x: top,
                        y: 20,
                    },
                    {
                        x: top + (top - bottom) * 0.6,
                        y: 0,
                    },
                ],
            };
        }),
    };

    return (
        <React.Fragment>
            <h2>{`Normal distribution of salaries (${currencyName})`}</h2>
            <Scatter options={options} data={data} />
        </React.Fragment>
    );
};

NormalDistributionChart.propTypes = {
    values: PropTypes.arrayOf(PropTypes.object),
    currencyName: PropTypes.string,
};

NormalDistributionChart.defaultProps = {
    values: [],
    currencyName: 'USD',
};

export default NormalDistributionChart;
