import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography variant="h4">W</Typography>
                    <ThemeToggle />
                </Toolbar>
            </AppBar>
        </Box>
    )
}