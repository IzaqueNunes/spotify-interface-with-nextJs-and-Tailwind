import { Footer } from "./components/footer";
import "./globals.css";

export const metadata = {
  title: "Spotify",
  description: "The best music here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">
        {children}
        <Footer />
      </body>
    </html>
  );
}
