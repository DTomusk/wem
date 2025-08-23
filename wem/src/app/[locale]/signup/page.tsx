"use server";
import { registerUser } from "@/src/actions/user";
import SignupForm from "../../../components/SignupForm";

export default async function Signup() {
    return (
        <SignupForm registerUser={registerUser} />
    )
}