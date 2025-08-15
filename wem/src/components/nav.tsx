import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Nav() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4">WEM</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}