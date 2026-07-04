import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prudential Properties | Hyderabad Office Listings",
  description: "Furnished and managed office spaces across Hyderabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        
         <a href="https://wa.me/919908622295"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-8 h-8 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.42.71 4.675 1.936 6.573L4 29l7.62-1.995A11.94 11.94 0 0 0 16.004 27C22.635 27 28 21.635 28 15.004 28 8.373 22.635 3 16.004 3zm0 21.818a9.78 9.78 0 0 1-4.99-1.362l-.357-.213-4.53 1.187 1.21-4.415-.233-.372a9.79 9.79 0 0 1-1.5-5.24c0-5.415 4.408-9.822 9.822-9.822 5.415 0 9.822 4.407 9.822 9.822 0 5.414-4.407 9.822-9.822 9.822zm5.394-7.354c-.295-.148-1.746-.86-2.017-.96-.271-.1-.469-.148-.667.148-.198.296-.766.96-.939 1.157-.173.198-.346.222-.641.074-.296-.148-1.25-.46-2.383-1.47-.881-.784-1.475-1.752-1.649-2.048-.173-.296-.019-.457.13-.605.148-.148.33-.383.494-.575.165-.192.22-.33.33-.55.11-.222.055-.42-.043-.567-.098-.148-.883-2.13-1.21-2.9-.32-.756-.646-.654-.887-.666-.222-.012-.478-.014-.734-.014-.256 0-.67.096-.918.383-.247.288-.94 1.006-.94 2.446 0 1.44 1.046 2.83 1.192 3.026.148.198 2.038 3.108 4.94 4.235 2.9 1.127 2.9.75 3.427.703.527-.048 1.746-.714 1.99-1.404.246-.69.246-1.28.172-1.404-.074-.123-.271-.198-.567-.346z" />
          </svg>
        </a>
      </body>
    </html>
  );
}