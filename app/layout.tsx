import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollToTop from "@/components/ui/ScrollToTop";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Kothakhahon Prakashani",
    template: "%s | Kothakhahon Prakashani",
  },
  description: "An independent publishing house dedicated to literary fiction, poetry, science fiction, and the voices that demand to be heard.",
  keywords: ["publishing", "books", "literary fiction", "poetry", "indie publisher"],
  openGraph: {
    title: "Kothakhahon Prakashani",
    description: "Where stories find their voice.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-parchment font-garamond antialiased relative">
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[120px] animate-float-1" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-ember/5 blur-[150px] animate-float-2 opacity-60" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <CustomCursor />
          <NavBar />
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
