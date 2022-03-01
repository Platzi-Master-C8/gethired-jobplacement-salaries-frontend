import React from 'react';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Select from 'Components/Commons/Select';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

import { selectAllList } from 'App/ListData/selectors';
import { changeFilter, resetFilters } from 'App/Filters/slice';

const defaultValues = {
    typeWork: null ?? '',
    min_salary: null,
    max_salary: null,
    job_location: null,
    company: null,
};

const Filter = ({ list, setFilters, resetFilter }) => {
    const { register, handleSubmit, formState, control, getValues, reset } = useForm({
        defaultValues,
    });
    const { errors } = formState;

    const onSubmitFilter = (data) => {
        const { company, ...rest } = data;
        const info = {
            ...rest,
            'company[]': company?.id,
        };
        setFilters(info);
    };

    const handleReset = () => {
        reset(defaultValues);
        resetFilter();
    };

    const disabledButton = () => {
        return Object.entries(getValues()).every(([, value]) => value === null || value === '');
    };

    return (
        <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
            <Box component="form" onSubmit={handleSubmit(onSubmitFilter)}>
                <Typography sx={{ mb: 2 }} variant="h2">
                    Filters Offers
                </Typography>
                <Controller
                    name="typeWork"
                    control={control}
                    render={({ field }) => (
                        <Select label="Type Work" {...field} id="Type Work">
                            {list.TypeWork?.map(({ id, name }) => (
                                <MenuItem key={id} value={id}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                />
                <Controller
                    name="company"
                    onChange={([, data]) => data}
                    control={control}
                    defaultValue={{ id: '', name: '' }}
                    render={({ field: { onChange, ...field } }) => (
                        <Autocomplete
                            {...field}
                            freeSolo
                            onChange={(e, data) => onChange(data)}
                            disableClearable
                            options={list.Companies}
                            getOptionLabel={(option) => option?.name}
                            renderInput={(params) => <TextField variant="filled" {...params} label="Companies" />}
                        />
                    )}
                />
                <Controller
                    name="job_location"
                    control={control}
                    onChange={([, data]) => data}
                    defaultValue=""
                    render={({ field: { value, onChange, ...field } }) => (
                        <Autocomplete
                            {...field}
                            onChange={(e, data) => onChange(data)}
                            freeSolo
                            sx={{ mt: 1 }}
                            disableClearable
                            options={list.Locations?.map((location) => location.job_location)}
                            renderInput={(params) => <TextField variant="filled" {...params} label="Job Location" />}
                        />
                    )}
                />
                <FormControl sx={{ my: 2, display: 'flex', gap: '10px', flexDirection: 'inherit' }}>
                    <TextField
                        fullWidth
                        label="Min Price"
                        InputProps={{ inputProps: { min: '0' } }}
                        type="number"
                        variant="filled"
                        error={!!errors?.min_salary}
                        helperText={errors?.min_salary && 'Minimum price less at max price'}
                        {...register('min_salary', {
                            validate: () =>
                                Number(getValues('max_salary'))
                                    ? Number(getValues('max_salary')) >= Number(getValues('min_salary'))
                                    : true,
                        })}
                    />
                    <TextField
                        fullWidth
                        label="Max Price"
                        InputProps={{ inputProps: { min: '0' } }}
                        type="number"
                        variant="filled"
                        error={!!errors?.max_salary}
                        helperText={errors?.max_salary && 'Max price greater at minimum price'}
                        {...register('max_salary', {
                            validate: () =>
                                !Number(getValues('min_salary'))
                                    ? Number(getValues('min_salary')) <= Number(getValues('max_salary'))
                                    : true,
                        })}
                    />
                </FormControl>
                <Button
                    sx={{ mb: 2 }}
                    disabled={!formState.isDirty}
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                >
                    Filter
                </Button>
                <Button disabled={disabledButton()} fullWidth onClick={handleReset}>
                    Clear Filters
                </Button>
            </Box>
        </Card>
    );
};

Filter.propTypes = {
    list: PropTypes.shape({
        TypeWork: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
            }),
        ),
        Companies: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
            }),
        ),
        Locations: PropTypes.arrayOf(
            PropTypes.shape({
                job_location: PropTypes.string,
            }),
        ),
    }).isRequired,
    setFilters: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    list: selectAllList(state),
});

const mapDispatchToProps = (dispatch) => ({
    setFilters: (data) => dispatch(changeFilter(data)),
    resetFilter: () => dispatch(resetFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
