import React from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Checkbox,
    Box,
} from "@mui/material";

const TableView = ({
    columns,
    data,
    onRowSelect,
    onSelectAll,
    selectedRows,
}) => {

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                maxHeight: {
                    xs: '40vh',
                    sm: '50vh',
                    md: '60vh',
                    lg: '70vh',
                    xl: '80vh'
                },
                overflowY: "auto",
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                onChange={(e) => onSelectAll(e.target.checked)}
                                checked={data.length > 0 && data.every((row) => selectedRows[row.ticketId])}
                            />
                        </TableCell>
                        {columns.map((column) => (
                            <TableCell key={column.id} align={column.align}>
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={columns.length + 1} align="center">
                                No data available
                            </TableCell>
                        </TableRow>
                    ) : (
                        data.map((row) => (
                            <TableRow key={row.ticketId}>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={!!selectedRows[row.ticketId]}
                                        onChange={(e) => onRowSelect(e.target.checked, row)}
                                    />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align}>
                                        {row[column.id]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </Box>
    );
};

export default TableView;