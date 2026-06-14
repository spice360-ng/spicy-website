import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Spice360 — We make Nigerian brands impossible to ignore",
    description:
        "Spice360 builds integrated 360 campaigns rooted in cultural truths — from strategy to execution.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
