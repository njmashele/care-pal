import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
 
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weights: ['300', '400', '500', '600', '700'],
  variables: '--fonts-sans',
});

export const metadata: Metadata = {
  title: "CarePal",
  description: "A simple healthcare management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={cn}>{children}</body>
    </html>
  );
}
