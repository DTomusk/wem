"use client";
import { Button, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h2" sx={{
        textAlign: "center",
        marginTop: 4,
        marginBottom: 4,
      }}>You have to click the <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>wem</Box> button!</Typography>
      <Button variant="contained" color="primary" sx={{
        width: "60%",
        height: "100px",
        fontSize: "2rem",
        fontWeight: "bold",
        borderRadius: "10px",
      }}>
        W
      </Button>
    </>
  );
}
