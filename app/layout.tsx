import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/Organisms/NavBar/NavBar";
import MainFooter from "./components/Organisms/MainFooter/MainFooter";

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
      <body>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
