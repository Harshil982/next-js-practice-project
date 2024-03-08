import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
const inter = Inter({ subsets: ["latin"] });
import Header from "./Common/Header";

export const metadata: Metadata = {
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AppRouterCacheProvider>
          <div className="main-content-div">{children}</div>
        </AppRouterCacheProvider>
        <p className="footer-div">Manage Pvt. Ltd.</p>
      </body>
    </html>
  );
}
