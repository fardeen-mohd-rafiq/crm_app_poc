import React, { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion for animation  
import TableView from '../Components/TableView';
import { viewTableHeader, viewTableData, viewsList, containerVariants } from "../Data/data";


export default function Views() {
    const [selectedRows, setSelectedRows] = useState({});

    const handleRowSelect = (isChecked, row) => {
        setSelectedRows((prevSelected) => ({
            ...prevSelected,
            [row.ticketId]: isChecked,
        }));
    };

    const handleSelectAll = (isChecked) => {
        const newSelectedRows = {};
        viewTableData.forEach((row) => {
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
                style={{
                    width: "500px",
                    padding: '30px 10px 0 10px',
                    marginX: '16px'
                }}
            >
                <Typography variant='h6'>Views</Typography>
                <hr />
                {viewsList.map((item) => (
                    <Stack direction='row' key={item.id} justifyContent='space-between' paddingY='8px' paddingLeft='16px'>
                        <Typography>{item.title}</Typography>
                        <Typography>{item.count}</Typography>
                    </Stack>
                ))}
            </motion.div>
            <Box width='100%' borderLeft='1px solid #d8dcde'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ padding: '40px' }}
                >
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='h5'>Your Unsolved Tickets</Typography>
                        <Stack direction='row' alignItems='center'>
                            <Button sx={{ border: '1px solid #1f73b7' }}>
                                Action
                            </Button>
                            <Button>
                                Play
                            </Button>
                        </Stack>
                    </Stack>
                    {/* Wrap TableView in motion.div for animation */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <TableView
                            columns={viewTableHeader}
                            data={viewTableData}
                            onRowSelect={handleRowSelect}
                            onSelectAll={handleSelectAll}
                            selectedRows={selectedRows}
                        />
                    </motion.div>
                </motion.div>
            </Box>
        </Stack>
    );
}