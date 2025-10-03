import { Schibsted_Grotesk } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Import Schibsted Grotesk with desired options
const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
  display: 'swap',
})
export const metadata = {
  title: "DhriRobust Solutions | Trusted Accounting & Financial Services",
  description: "DhriRobust Solutions delivers reliable accounting, tax preparation, and business consulting services. Streamline your finances with our expert team for accurate, efficient, and scalable solutions.",
  keywords: [
    "DhriRobust accounting",
    "professional tax services",
    "business financial solutions",
    "accounting firm",
    "bookkeeping services",
    "tax consulting",
    "financial management",
    "small business accounting"
  ],
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={schibsted.className}>
        <Header />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
