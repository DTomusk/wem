"use client";
import { Switch } from "@mui/material";
import { useThemeMode } from "./ThemeRegistry";

export default function ThemeToggle() {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <Switch onClick={toggleTheme} checked={mode === 'dark'} />
    )
}