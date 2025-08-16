"use client";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function SignupForm() {
    const t = useTranslations("SignupForm");
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
            <Typography variant="h5">{t("signup")}</Typography>
            <TextField label={t("email")} type="email" sx={{
                width: "100%",
            }}/>
            <TextField label={t("password")} type="password" sx={{
                width: "100%",
            }}/>
            <TextField label={t("confirmPassword")} type="password" sx={{
                width: "100%",
            }}/>
            <Button variant="contained" color="primary" sx={{
                width: "100%",
                height: "50px",
                marginY: 2,
            }}>{t("signup")}</Button>
        </Paper>
    )
}