import { createTheme } from "@mui/material";

// This is where we define our themes, each has a mode and a palette
// We can then reference colours from the palette in our components
// And MUI will style the components based on the colours in the theme palette
export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#ccdabc", },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#90caf9", },
    },
});