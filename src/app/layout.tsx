import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarTriggerProvider } from "@/lib/nav-bar-trigger-context";
import { DeleteChatTriggerProvider } from "@/lib/delete-chat-trigger-context";
import { SidebarTriggerProvider } from "@/lib/sidebar-trigger-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KKU Advisor",
  description: "KKU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarTriggerProvider>
            <SidebarTriggerProvider>
              <DeleteChatTriggerProvider>{children}</DeleteChatTriggerProvider>
            </SidebarTriggerProvider>
          </NavbarTriggerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
