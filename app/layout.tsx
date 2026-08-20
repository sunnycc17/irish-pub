import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Irish Pub Kranj",
    template: "%s | Irish Pub Kranj",
  },
  description:
    "Irish Pub Kranj – dobro pivo, kava in dobra družba. Obiščite nas v Kranju in uživajte v sproščenem vzdušju.",
  keywords: [
    "Irish Pub Kranj",
    "Irish Pub",
    "pub Kranj",
    "bar Kranj",
    "pivo Kranj",
    "Guinness Kranj",
  ],
  authors: [{ name: "Irish Pub Kranj" }],
  creator: "Irish Pub Kranj",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Irish Pub Kranj",
    description:
      "Dobro pivo, kava in dobra družba. Obiščite Irish Pub v Kranju.",
    type: "website",
    locale: "sl_SI",
    siteName: "Irish Pub Kranj",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
