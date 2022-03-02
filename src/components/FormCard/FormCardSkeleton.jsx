import React, { Fragment } from 'react';

import Skeleton from '@mui/material/Skeleton';

const FormCardSkeleton = () => {
    return (
        <Fragment>
            <Skeleton sx={{ mb: 3, ml: 4 }} variant="rectangular" height={56} />
            <Skeleton sx={{ mb: 3, ml: 4 }} variant="rectangular" height={56} />
            <Skeleton sx={{ mb: 3, ml: 4 }} variant="rectangular" height={56} />
            <Skeleton sx={{ mb: 3, ml: 4 }} variant="rectangular" height={56} />
            <Skeleton sx={{ mb: 3, ml: 4 }} variant="rectangular" height={56} />
            <Skeleton sx={{ mb: 3, ml: 4 }} variant="rectangular" height={56} />
        </Fragment>
    );
};

export default FormCardSkeleton;
