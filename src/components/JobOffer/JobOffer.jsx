import React, { useState, useCallback, useEffect } from 'react';
import { getJobs } from '../../services/jobs';
import JobCard from './JobCard';

const JobOffer = () => {
    const [listJobs, setListJobs] = useState([]);

    const getJobsList = useCallback(async () => {
        const jobs = await getJobs();
        setListJobs(jobs);
    }, []);

    useEffect(() => {
        getJobsList();
    }, [getJobsList]);

    const handleClick = () => {
        console.log('clicked');
    };

    return (
        listJobs &&
        listJobs.map((job) => {
            return <JobCard key={job.id} job={job} onClick={handleClick} />;
        })
    );
};

export default JobOffer;
