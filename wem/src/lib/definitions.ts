import { z } from "zod";
import { useTranslations } from "next-intl";

type T = ReturnType<typeof useTranslations<"SignupForm">>;

const minPasswordLength = 12;

export const createSignupFormSchema = (t: T) => z.object({
    email: z.email({error: t("invalidEmail")}),
    password: z
      .string({ error: t("passwordRequired") })
      .min(minPasswordLength, { error: t("passwordTooShort", { min: minPasswordLength }) })
      .regex(/[A-Z]/, { message: t("passwordMustContainUppercase") })
      .regex(/[0-9]/, { message: t("passwordMustContainNumber") })
      .regex(/[@$!%*?&]/, { message: t("passwordMustContainSpecialCharacter") }),
    confirmPassword: z.string({ error: t("confirmPasswordRequired") }),
    }).refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
    message: t("passwordsDoNotMatch"),
});