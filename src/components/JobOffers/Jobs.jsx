import React, { useState, useCallback, useEffect, Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { exchangeValueOfObject } from 'Libs/exchange';
import PropTypes from 'prop-types';

import { selectVacancies, selectCurrency } from 'App/CalculateSalary/selectors';
import { selectFilters } from 'App/Filters/selectors';
import { getJobs } from 'Services/jobs';
import useCurrency from 'Hooks/useCurrency';
import JobCard from './JobCard';
import GroupSkeleton from './JobSkeleton';

const Jobs = ({ currency, filters }) => {
    const [listJobs, setListJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const { currencyValue } = useCurrency(currency);

    const getJobsList = useCallback(
        async (fil) => {
            setLoading(true);
            try {
                const jobs = await getJobs(fil);
                setListJobs(jobs.map((job) => exchangeValueOfObject(job, 'salary', currencyValue)));
            } catch {
                console.log('');
            } finally {
                setLoading(false);
            }
        },
        [currencyValue],
    );

    useEffect(() => {
        getJobsList(filters);
    }, [getJobsList, filters]);

    return (
        <Fragment>
            {loading && <GroupSkeleton />}
            {listJobs.length < 1 && !loading && (
                <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
                    No jobs found 🥲
                </Typography>
            )}
            {listJobs?.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </Fragment>
    );
};

Jobs.propTypes = {
    currency: PropTypes.string.isRequired,
    filters: PropTypes.shape({
        typeWork: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        company: PropTypes.string,
        job_location: PropTypes.string,
        min_salary: PropTypes.number,
        max_salary: PropTypes.number,
    }).isRequired,
};

const mapStateToProps = (state) => ({
    vacancies: selectVacancies(state),
    currency: selectCurrency(state),
    filters: selectFilters(state),
});

export default connect(mapStateToProps)(Jobs);
