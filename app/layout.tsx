import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Organisms/NavBar/NavBar";
import StoreProvider from "@/lib/services/StoreProvider";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrian Ciołkiewicz - Frontend Developer",
  description:
    "You can find here my story of career, my projects and I can show you my small world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-gradient-to-r from-neutral-900 to-neutral-800 scroll-smooth ${robotoSlab.className}`}>
      <body>
        <StoreProvider>
          <section className="flex justify-center relative">
            <section className="lg:flex lg:min-h-screen max-w-screen-xl abbsolute">
              <NavBar />
              <main className="lg:w-1/2">{children}</main>
            </section>
          </section>
        </StoreProvider>
      </body>
    </html>
  );
}
