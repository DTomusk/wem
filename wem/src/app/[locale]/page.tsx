"use client";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("WemPage");
  return (
    <>
      <Typography variant="h2" sx={{
        textAlign: "center",
        marginTop: 4,
        marginBottom: 4,
      }}>{t("CTA")}</Typography>
      <Button variant="contained" color="primary" sx={{
        width: "60%",
        height: "100px",
        fontSize: "3rem",
        fontWeight: "bold",
        borderRadius: "10px",
      }}>
        W
      </Button>
    </>
  );
}
