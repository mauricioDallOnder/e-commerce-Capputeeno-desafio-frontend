import "./globals.css";
import { Providers } from "@/redux/provider";
import HeaderComponent from "@/components/header/header";
import { Saira } from 'next/font/google'
const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
 })
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Providers>
        <HeaderComponent/>
          {children}
          </Providers>
      </body>
    </html>
  );
}
