import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Organisms/NavBar/NavBar";
import StoreProvider from "@/lib/services/StoreProvider";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrian Ciołkiewicz - Frontend Devweloper",
  description:
    "You can find here my story of career, my projects and I can show you my small world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex ${robotoSlab.className}`}>
        <StoreProvider>
          <NavBar />
          <main className="w-2/3 h-screen">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
