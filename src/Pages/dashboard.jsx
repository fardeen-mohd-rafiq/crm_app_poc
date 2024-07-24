import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion from framer-motion  
import TicketUpdates from '../Components/TicketUpdate';
import TableView from '../Components/TableView';
import TicketStatus from '../Components/TicketStatus';
import { dashboardTableColumns, dashboardTableData, containerVariants } from "../Data/data";


export default function Dashboard() {
    const [selectedRows, setSelectedRows] = useState({});

    const handleRowSelect = (isChecked, row) => {
        setSelectedRows((prevSelected) => ({
            ...prevSelected,
            [row.ticketId]: isChecked,
        }));
    };

    const handleSelectAll = (isChecked) => {
        const newSelectedRows = {};
        dashboardTableData.forEach((row) => {
            newSelectedRows[row.ticketId] = isChecked;
        });
        setSelectedRows(newSelectedRows);
    };

    return (
        <Stack direction="row" bgcolor="white">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ width: '500px' }}
            >
                <TicketUpdates />
            </motion.div>
            <Box width='100%' borderLeft='2px solid #d8dcde'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ padding: '1rem' }}
                >
                    <TicketStatus />
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ padding: '1rem' }}
                >
                    <TableView
                        columns={dashboardTableColumns}
                        data={dashboardTableData}
                        onRowSelect={handleRowSelect}
                        onSelectAll={handleSelectAll}
                        selectedRows={selectedRows}
                    />
                </motion.div>
            </Box>
        </Stack>
    );
}