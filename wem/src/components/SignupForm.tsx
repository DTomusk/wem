"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { createSignupFormSchema } from "../lib/definitions";

export default function SignupForm({ registerUser }: { registerUser: (email: string, password: string) => Promise<{
    email: string;
    id: number;
    passwordHash: string;
}> }) {
    const t = useTranslations<"SignupForm">("SignupForm");
    const schema = createSignupFormSchema(t);
  
    type FormData = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        const user = await registerUser(data.email, data.password);
        console.log("Form submitted:", data);
        console.log("User created:", user);
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
