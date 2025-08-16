"use client";
import { Button, Paper, TextField, Typography } from "@mui/material";

export default function SignupForm() {
    return (
        <Paper sx={{
            padding: 3,
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
        }}
        elevation={8}>
            <Typography variant="h5">Sign up</Typography>
            <TextField label="Email" type="email" sx={{
                width: "100%",
            }}/>
            <TextField label="Password" type="password" sx={{
                width: "100%",
            }}/>
            <TextField label="Confirm Password" type="password" sx={{
                width: "100%",
            }}/>
            <Button variant="contained" color="primary" sx={{
                width: "100%",
                height: "50px",
                marginY: 2,
            }}>Sign up</Button>
        </Paper>
    )
}