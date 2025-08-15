"use client";
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h2" sx={{
        textAlign: "center",
        marginBottom: 4,
      }}>You have to click the wem button!</Typography>
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
