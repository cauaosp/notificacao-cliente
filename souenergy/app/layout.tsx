import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>souenergy</title>
        <meta name="description" content="This is my website description." />
        <link
          rel="icon"
          href="/icons/code-svgrepo-green.svg"
          type="image/svg+xml"
        />
      </head>
      <body className="select-none bg-neutral-100">
        {children}
      </body>
    </html>
  );
}
