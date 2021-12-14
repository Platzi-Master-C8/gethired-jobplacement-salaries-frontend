import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import SelectMUI from '@mui/material/Select';

const Select = (props) => {
    const { helperText, options, id, label, value, onChange, multiple, disabled, name, ...otherProps } = props;
    return (
        <FormControl variant="filled" sx={{ my: 1 }} fullWidth disabled={disabled}>
            <InputLabel id={id}>{label}</InputLabel>
            <SelectMUI labelId={id} value={value} onChange={onChange} multiple={multiple} name={name} {...otherProps}>
                {options?.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </SelectMUI>
            {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

Select.propTypes = {
    onChange: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

Select.defaultProps = {
    helperText: '',
    multiple: false,
    disabled: false,
};

export default Select;
