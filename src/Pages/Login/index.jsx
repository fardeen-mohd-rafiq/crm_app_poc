import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Box,
    Typography,
    CssBaseline,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/LoginForm";
import { containerVariants } from "../../Data/data";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const onSubmit = (data) => {
        console.log(data);
        navigate('/');
    };

    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
            <CssBaseline />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                    padding: '2rem',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                }}
            >
                <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Login to Your Account
                </Typography>
                <LoginForm
                    register={register}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    errors={errors}
                    showPassword={showPassword}
                    handleShowPassword={handleShowPassword}
                />
            </motion.div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                    background: `url(/loginBg.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    color: "#fff",
                    padding: '2rem',
                }}
            >
                <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
                    New Here?
                </Typography>
                <Typography component="h2" variant="subtitle1" sx={{ mb: 2 }}>
                    Sign Up and discover a great amount of new opportunities!
                </Typography>
            </motion.div>
        </Box>
    );
}

export default Login;