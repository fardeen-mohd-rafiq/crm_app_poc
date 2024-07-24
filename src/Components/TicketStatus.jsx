import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TicketHolder from './Ticketholder';

const TicketStatus = () => {
    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center' }}>
            <Box>
                <Typography variant="p" fontSize="12px" gutterBottom>
                    Open Tickets (current)
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TicketHolder count={25} label="YOU" />
                    </Grid>
                    <Grid item xs={4}>
                        <TicketHolder count={25} label="GROUPS" />
                    </Grid>
                </Grid>
            </Box>
            <Box>

                <Typography variant="p" fontSize="12px" sx={{ marginTop: '20px' }}>
                    Ticket Statistics (this week)
                </Typography>
                <Grid container fontSize='15px'>
                    <Grid item xs={4}>
                        <TicketHolder count={0} label="GOOD" />
                    </Grid>
                    <Grid item xs={4}>
                        <TicketHolder count={0} label="BAD" />
                    </Grid>
                    <Grid item xs={4}>
                        <TicketHolder count={0} label="SOLVED" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default TicketStatus;