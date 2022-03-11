/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Chip, IconButton, Typography } from '@mui/material';
import { helpColor, sum, helpCurrency } from '../../helpers';

// import RegisterApplicantForm from '../RegisterApplicantForm';

const JobDetailsModal = ({ showDetail, handleOpenClose, vacancyInfo }) => {
    const {
        // id,
        // company_id,
        company,
        job_location,
        description,
        skills,
        name,
        salary,
        typeWork,
        hours_per_week,
        minimum_experience,
        postulation_status,
        applicant_evaluations,
    } = vacancyInfo;

    // const [openApplyModal, setOpenApplyModal] = useState(false);
    // const navigate = useNavigate();

    return (
        <Dialog open={showDetail} onClose={handleOpenClose}>
            <IconButton
                aria-label="close"
                onClick={handleOpenClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon />
            </IconButton>
            <Box component="div" sx={{ padding: '20px', minWidth: 550 }}>
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginTop: '15px',
                    }}
                >
                    <Typography variant="h3" component="h3" sx={{ fontSize: '13px' }}>
                        {company?.name}
                    </Typography>
                    <DialogTitle sx={{ textAlign: 'center', padding: '5px', fontWeight: 600 }}>{name}</DialogTitle>
                    <Typography variant="h3" component="h3" sx={{ fontSize: '13px' }}>
                        {job_location}
                    </Typography>
                </Box>
                <Box component="div">
                    <DialogContent>
                        <Typography variant="h2" component="h2">
                            Description
                        </Typography>
                        <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                            {description}
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ marginTop: '20px' }}>
                            Skills and abilities
                        </Typography>
                        <Box sx={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {skills?.map((skill) => (
                                <Chip label={skill} key={skill} variant="outlined" color="secondary" />
                            ))}
                        </Box>
                        <Typography variant="h2" component="h2" sx={{ marginTop: '20px' }}>
                            Offer Details
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                                    <b>Type of Work: </b>
                                    {typeWork}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                                    <b>Hours per week: </b>
                                    {hours_per_week}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                                    <b>Salary: </b>
                                    {helpCurrency(salary)}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" sx={{ marginTop: '10px' }}>
                                    <b>Minimum experience: </b>
                                    {minimum_experience}
                                </Typography>
                            </li>
                            {postulation_status && (
                                <li>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: '10px',
                                            alignItems: 'center',
                                            marginTop: '10px',
                                        }}
                                    >
                                        <Typography variant="p" component="p">
                                            <b>Offer Status: </b>
                                        </Typography>
                                        <Chip
                                            label={postulation_status?.name}
                                            color={helpColor(postulation_status?.id)}
                                        />
                                    </div>
                                </li>
                            )}
                        </ul>
                        {!!applicant_evaluations?.length && (
                            <div
                                style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography variant="h2" component="h2">
                                    Final Review
                                </Typography>
                                <Chip color="primary" size="large" label={`${sum(applicant_evaluations[0])} / 5`} />
                            </div>
                        )}
                    </DialogContent>
                    {/* {!tracking_code && (
                        <DialogActions sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
                            <Button onClick={() => console.log("Apply!")} size="large" variant="contained">
                                Apply
                            </Button>
                            <Button
                                size="large"
                                variant="contained"
                                type="button"
                                onClick={() =>console.log("Company Details!")}
                            >
                                Company details
                            </Button>
                        </DialogActions>
                    )} */}
                </Box>
            </Box>
            {/* <RegisterApplicantForm open={openApplyModal} setOpen={setOpenApplyModal} id={id} /> */}
        </Dialog>
    );
};

JobDetailsModal.propTypes = {
    handleOpenClose: PropTypes.func.isRequired,
    showDetail: PropTypes.bool.isRequired,
    vacancyInfo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        companyName: PropTypes.string,
        location: PropTypes.string,
        company: PropTypes.shape({
            name: PropTypes.string,
        }),
        postulation_status: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number,
        }),
        applicant_evaluations: PropTypes.arrayOf(
            PropTypes.shape({
                company_id: PropTypes.number,
                applicant_name: PropTypes.string,
            }),
        ),
        description: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.string,
        postulation_deadline: PropTypes.string,
        status: PropTypes.bool,
        salary: PropTypes.number,
        company_id: PropTypes.number,
        typeWork: PropTypes.string,
        job_location: PropTypes.string,
        hours_per_week: PropTypes.number,
        minimum_experience: PropTypes.number,
        created_at: PropTypes.string,
        updated_at: PropTypes.string,
        tracking_code: PropTypes.string,
    }).isRequired,
};

export default JobDetailsModal;
