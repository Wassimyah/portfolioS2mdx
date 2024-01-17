import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Wassim.com",
    template: "%s | Wassim.com",
  },
  description: "Web developer",
  openGraph: {
    title: "Wassim.com",
    description:
      "Webdeveloper",
    url: "https://wassimyahiaoui.com",
    siteName: "wassimyahiaoui.com",
    images: [
      {
        url: "https://media.licdn.com/dms/image/D4E03AQHQmMghYAjIHw/profile-displayphoto-shrink_800_800/0/1695973802406?e=2147483647&v=beta&t=6tHsg6zkWw21J0OmPFgQMwu03OcmnfIefnCzGj8t7A0",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-sky-950 ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
