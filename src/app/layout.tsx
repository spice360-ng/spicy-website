import type { Metadata } from "next";
import PageMotion from "@/components/PageMotion/PageMotion";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.spice360.com.mg"),
    title: "Spice360 | We make brands impossible to ignore",
    description:
        "Spice360 builds integrated 360 campaigns rooted in cultural truths, from strategy to execution.",
    robots: { index: true, follow: true },
    openGraph: {
        type: "website",
        siteName: "Spice360",
        locale: "en_NG",
        title: "Spice360 | We make brands impossible to ignore",
        description:
            "Spice360 builds integrated 360 campaigns rooted in cultural truths, from strategy to execution.",
        images: ["/og-default.png"],
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
            <body suppressHydrationWarning>
                <script
                    dangerouslySetInnerHTML={{
                        __html:
                            "history.scrollRestoration='manual';document.documentElement.classList.add('reveal-ready');",
                    }}
                />
                <PageMotion />
                {children}
            </body>
        </html>
    );
}
