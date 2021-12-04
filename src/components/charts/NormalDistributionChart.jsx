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
};

export const NormalDistributionChart = ({ values }) => {
    const labels = [
        '0%',
        ['20%', `$${values.salariesBottom20}`],
        ['50%', `$${values.salariesAverage}`],
        ['80%', `$${values.salariesTop20}`],
        '100%',
    ];
    const salaries1 = [0, 25, 50, 25, 0];
    const salaries2 = [0, 23, 48, 23, 0];

    const data = {
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

    return <Line options={options} data={data} />;
};

// PropTypes TODO

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
