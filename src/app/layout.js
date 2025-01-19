import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Themes";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PopcornPicks - Your Movie Destination",
  description: "Discover and explore your favorite movies",
  icons: {
    icon: [
      {
        url: "/logo.png",
        href: "/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body>
            <Providers>
              <Header />
              <Navbar />
              {children}
              <Footer />
            </Providers>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
