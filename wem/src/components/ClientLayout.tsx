"use client";

import { Container } from "@mui/material";
import Nav from "./nav";
import ThemeRegistry from "./ThemeRegistry";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry defaultMode="light">
      <Nav />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Container>
    </ThemeRegistry>
  );
}
