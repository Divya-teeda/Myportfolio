import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divya Pavani Teeda | Java Developer Portfolio",
  description: "Java Developer with 3 years of experience building scalable, secure, and high-performance Spring Boot microservices for enterprise Automobile CRM and Dealer Management platforms. Specialized in REST API development, database optimization, JWT-based authentication, and asynchronous messaging using RabbitMQ.",
  keywords: ["Java Developer", "Spring Boot", "Microservices", "REST APIs", "Backend Developer", "Portfolio", "Divya Pavani Teeda"],
  authors: [{ name: "Divya Pavani Teeda" }],
  creator: "Divya Pavani Teeda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://divya-portfolio.com",
    title: "Divya Pavani Teeda | Java Developer Portfolio",
    description: "Java Developer with 3 years of experience building scalable, secure, and high-performance Spring Boot microservices.",
    siteName: "Divya Pavani Teeda Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divya Pavani Teeda | Java Developer Portfolio",
    description: "Java Developer with 3 years of experience building scalable, secure, and high-performance Spring Boot microservices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}