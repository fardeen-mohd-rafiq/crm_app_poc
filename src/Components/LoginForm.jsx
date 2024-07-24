import React from "react";
import {
    Button,
    TextField,
    Box,
    InputAdornment,
    SvgIcon,
} from "@mui/material";
import { motion } from "framer-motion";
import OpenedEyeIcon from "../Components/Icons/OpenedEyeIcon"
import ClosedEyeIcon from "../Components/Icons/ClosedEyeIcon";

const LoginForm = ({ register, handleSubmit, onSubmit, errors, showPassword, handleShowPassword }) => {
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: "100%", textAlign: "center" }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                        },
                    })}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    sx={{ mb: 2, borderRadius: "4px", bgcolor: '#f6f9fc' }}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                    sx={{ mb: 2, bgcolor: '#f6f9fc' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SvgIcon
                                    cursor="pointer"
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
                                </SvgIcon>
                            </InputAdornment>
                        ),
                    }}
                />
            </motion.div>
            <Button
                type="submit"
                variant="contained"
                sx={{
                    mt: 3,
                    mb: 2,
                    px: 8,
                    py: 2,
                    bgcolor: '#03363d',
                    '&:hover': { bgcolor: '#054b49' },
                    color: '#ffffff',
                    borderRadius: "30px"
                }}
            >
                Login
            </Button>
        </Box>
    );
};

export default LoginForm;