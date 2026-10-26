import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { OfflineBootstrap } from "@/components/offline/offline-bootstrap";
import "./globals.css";

export const metadata: Metadata = {
  title: "PUSTAKSETU",
  description: "Offline-first educational platform foundation for students and teacher contributors.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-950">
        <OfflineBootstrap />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
