import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography variant="h4">WEM</Typography>
                    <ThemeToggle />
                </Toolbar>
            </AppBar>
        </Box>
    )
}