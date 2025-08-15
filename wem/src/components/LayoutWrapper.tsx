import { Container } from "@mui/material";
import NavBar from "./NavBar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
                <NavBar />
                <Container maxWidth="md" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {children}
                </Container>
        </>
    )
}   