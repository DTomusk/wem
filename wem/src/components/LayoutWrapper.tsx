"use client";

import { NextIntlClientProvider } from "next-intl";
import NavBar from "./NavBar";
import { Container } from "@mui/material";

export default function LayoutWrapper({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NavBar />
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
    </NextIntlClientProvider>
  );
}