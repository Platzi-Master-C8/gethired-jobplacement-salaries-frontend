import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import SelectMUI from '@mui/material/Select';

const Select = forwardRef((props, ref) => {
    const {
        helperText,
        options,
        id,
        label,
        value,
        onChange,
        multiple,
        disabled,
        name,
        fullWidth,
        width,
        children,
        ...otherProps
    } = props;
    return (
        <FormControl variant="filled" sx={{ my: 1, width }} fullWidth={fullWidth} disabled={disabled}>
            <InputLabel id={id}>{label}</InputLabel>
            <SelectMUI
                labelId={id}
                value={value}
                onChange={onChange}
                multiple={multiple}
                name={name}
                {...otherProps}
                ref={ref}
            >
                {children ||
                    options?.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
            </SelectMUI>
            {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
});

Select.propTypes = {
    onChange: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number]),
    width: PropTypes.number,
    children: PropTypes.node,
};

Select.defaultProps = {
    helperText: '',
    multiple: false,
    disabled: false,
    value: '',
    fullWidth: true,
    width: null,
    children: null,
    options: [],
};

export default Select;
