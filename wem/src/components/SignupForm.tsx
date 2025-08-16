"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function SignupForm() {
    
  const t = useTranslations("SignupForm");

  const schema = z.object({
    email: z.email({error: t("invalidEmail")}),
    password: z.string().min(6, t("passwordTooShort")),
    confirmPassword: z.string().min(6, t("passwordTooShort")),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: t("passwordsDoNotMatch"),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      elevation={10}
      sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%", maxWidth: "400px", padding: 3 }}
    >
        <Typography variant="h5" sx={{ textAlign: "center" }}>{t("signup")}</Typography>

        <TextField
            label={t("email")}
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
        />

        <TextField
            label={t("password")}
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
        />

        <TextField
            label={t("confirmPassword")}
            type="password"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
        />

        <Button type="submit" variant="contained">
            {t("signup")}
        </Button>
    </Paper>
  );
}
