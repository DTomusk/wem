import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ThemeRegistry from "../../components/ThemeRegistry";
import LayoutWrapper from "@/src/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WEM",
  description: "Join the wem-olution",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = (await import(`../../locales/${params.locale}.json`)).default;
    return (
    <html lang={params.locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry defaultMode="light">
          <LayoutWrapper locale={params.locale} messages={messages}>
            {children}
          </LayoutWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
