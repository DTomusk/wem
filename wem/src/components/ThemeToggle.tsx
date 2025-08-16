"use client";
import { FormControlLabel, Switch } from "@mui/material";
import { useThemeMode } from "./ThemeRegistry";
import { useTranslations } from "next-intl";

export default function ThemeToggle() {
    const t = useTranslations("Common");
    const { mode, toggleTheme } = useThemeMode();

    return (
        <FormControlLabel control={
            <Switch onClick={toggleTheme} checked={mode === 'dark'} />} 
            label={mode === 'dark' ? t("lightMode") : t("darkMode")} 
            labelPlacement="start"
            />
    )
}