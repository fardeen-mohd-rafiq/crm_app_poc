import React from "react";
import { Box, Typography } from "@mui/material";
import { ticketUpdates } from "../Data/data";

const TicketUpdates = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                maxWidth: 600,
                margin: "auto",
                padding: 2,
                paddingRight: 0,
                bgcolor: "#f8f9f9",
            }}
        >
            <Typography variant="h6">Updates to your tickets</Typography>
            <Box
                sx={{
                    marginTop: "20px",
                    width: "100%",
                    height: "auto",
                    maxHeight: {
                        xs: "40vh",
                        sm: "50vh",
                        md: "60vh",
                        lg: "70vh",
                        xl: "80vh",
                    },
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "0.25rem",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#C0C0C0",
                        borderRadius: "5px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#A0A0A0",
                    },
                }}
            >
                {ticketUpdates.map((update, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            padding: 2,
                            marginBottom: 2,
                            marginRight: 2,
                            border: "1px solid #D8DCDE",
                            borderRadius: "6px",
                            transition: "border-color 0.3s ease",
                            "&:hover": {
                                borderColor: "#78a300",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(/user.png)`,
                                backgroundSize: "cover",
                                width: 30,
                                height: 30,
                                borderRadius: "5px",
                            }}
                        />
                        <Box sx={{ ml: 1 }}>
                            <Typography variant="body1">
                                {update.name}
                                <span style={{ fontWeight: "bold" }}>{` commented `}</span>
                                on "SAMPLE TICKET:
                                <span style={{ color: "#68737D", display: "block" }}>
                                    {update.comment}"
                                </span>
                            </Typography>
                            <Typography variant="body2" color="#C2C8CC">
                                {update.time}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TicketUpdates;
