import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/HomeComponents/Header";
import Footer from "@/components/HomeComponents/Footer";


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  //metadataBase: new URL("https://www.nautilusshipping.com"),
  
  // title:
  //   "Ship Management Company, Vessel Management Services | Nautilus Shipping",
  // description: "Delivering excellence in technical and crew management",
  // verification: {
  //   google: "googled87b13e1b76e2421", // ✅ This is the cleanest way
  // },
  // alternates: {
  //   canonical: "https://www.nautilusshipping.com", // Add the canonical URL here
  // },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <head>
        <meta
          name="p:domain_verify"
          content="0d52b0992f69dadc8ca90881cc4677c2"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P5CT7B7F');`,
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MV54HC9TM1"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MV54HC9TM1');
          `}
        </script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id="
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
      <Footer />
    </html>
  );
}
