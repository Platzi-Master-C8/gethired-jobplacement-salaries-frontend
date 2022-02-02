import React, { useState, useCallback, useEffect, Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { exchangeValueOfObject } from 'Libs/exchange';

import { getJobs } from 'Services/jobs';
import { selectVacancies } from 'App/CalculateSalary/selectors';
import JobCard from './JobCard';

const Jobs = () => {
    const [listJobs, setListJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getJobsList = useCallback(async () => {
        const jobs = await getJobs();
        setListJobs(jobs.map((job) => exchangeValueOfObject(job, 'salary', 2)));
    }, []);

    useEffect(() => {
        setLoading(true);
        getJobsList();
        setLoading(false);
    }, [getJobsList]);

    const handleClick = () => {
        // TODO: redirect to job detail
        console.log('clicked');
    };

    return (
        <Fragment>
            {!listJobs && !loading && (
                <Typography variant="h4" component="h4">
                    Loading...
                </Typography>
            )}
            {listJobs < 1 && loading && (
                <Typography variant="h4" component="h4">
                    No jobs found
                </Typography>
            )}
            {listJobs && listJobs.map((job) => <JobCard key={job.id} job={job} onClick={handleClick} />)}
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    vacancies: selectVacancies(state),
});

// const mapDispatchToProps = (dispatch) => ({
//     handleCalculate: (data) => dispatch(changesForm({ changes: data })),
//     clearForm: () => dispatch(clearFormMain()),
//     addChartData: (data) => dispatch(fetchChartData(data)),
// });

export default connect(mapStateToProps)(Jobs);
