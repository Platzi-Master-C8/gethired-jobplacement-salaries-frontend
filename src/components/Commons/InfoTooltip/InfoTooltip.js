import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { Typography } from '@mui/material';

export const InfoTooltip = ({ title, texts, infoLink }) => {
    const [open, setOpen] = useState(false);

    const htmlTitle = () => {
        return (
            <React.Fragment>
                <Typography color="inherit">{title}</Typography>
                {texts.map(({ level, description }) => <p key={level}> <b>{level}:</b> {description}</p>)}
                {infoLink && <b><a rel="noreferrer" target="_blank" style={{ color: 'white' }} href={infoLink}>more info...</a></b>}
            </React.Fragment>
        )
    }

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title={
                            htmlTitle()
                        }
                    >
                        <InfoRoundedIcon
                            onClick={handleTooltipOpen}
                            color="primary"
                            fontSize="large"
                        />
                    </Tooltip>
                </div>
            </ClickAwayListener>
        </div>
    );
}


InfoTooltip.propTypes = {
    title: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.shape({
        level: PropTypes.string,
        description: PropTypes.string,
    })),
    infoLink: PropTypes.string

}

InfoTooltip.defaultProps = {
    texts: [],
    infoLink: null
}

