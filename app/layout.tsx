import UploadModal from "@/components/modals/upload-modal";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import SupabaseProvider from "@/providers/supabase-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";
import UserProvider from "@/providers/user-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Gallery Modal",
  description: "Adds WordPress-like Gallery Modal to your Next.js project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            <SupabaseProvider>
              <UserProvider>
                <ModalProvider />
                <Navbar />
                {children}
              </UserProvider>
            </SupabaseProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
