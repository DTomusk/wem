import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
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
                    <Typography variant="h4"><Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>W</Link></Typography>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center", }}>
                        <Link href="/signup" sx={{ textDecoration: "none", color: "inherit" }}>Sign up</Link>
                        <ThemeToggle />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}