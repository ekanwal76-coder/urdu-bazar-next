import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urdu Bazar Online | Books for Students & Professionals",
  description:
    "Shop textbooks, exam guides, novels and more from Urdu Bazar Online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
