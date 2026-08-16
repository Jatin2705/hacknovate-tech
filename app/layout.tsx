import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Hacknovate — Build. Break. Innovate.",description:"Hacknovate landing page built with Next.js, Tailwind CSS and GSAP."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
