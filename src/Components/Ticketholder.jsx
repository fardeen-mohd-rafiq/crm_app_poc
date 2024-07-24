import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const TicketHolder = ({ count, label }) => {
    return (
        <Box
            sx={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '80px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
            }}
        >
            <Typography variant="p" display='block' fontSize='15px'>{count}</Typography>
            <Typography variant="p" fontSize='15px'>
                {label}
            </Typography>
        </Box>
    );
};

TicketHolder.propTypes = {
    count: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

export default TicketHolder;