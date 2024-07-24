import { Stack, Typography, Box } from '@mui/material'
import React from 'react'
import MessageIcon from './Icons/MessageIcon'
import PhoneIcon from './Icons/PhoneIcon'
import BellIcon from './Icons/BellIcon'
import QuestionIcon from './Icons/QuestionIcon'
import MenuIcon from './Icons/QuestionIcon'

export default function Header() {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" borderBottom="2px solid grey" height="70px">
            <Typography mx={2}>+Add</Typography>
            <Stack direction="row" alignItems="center" gap={3.5} pr={4}>
                <MessageIcon />
                <PhoneIcon />
                <BellIcon />
                <QuestionIcon />
                <Box
                    sx={{
                        backgroundImage: `url(/user.png)`,
                        backgroundSize: "100% 100%",
                        width: 30,
                        height: 30,
                        borderRadius: "50%"
                    }}
                />
            </Stack>
        </Stack>
    )
}
