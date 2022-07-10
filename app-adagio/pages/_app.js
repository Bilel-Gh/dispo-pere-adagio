import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (

    <SessionProvider session={pageProps.session}> 
    <>
    <Script
    strategy='lazyOnload'
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALATYCIS}`}/>
    
    <Script strategy='lazyOnload'>    {
      ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALATYCIS});`
    }
    </Script>

      <Component {...pageProps} />
      </>
    </SessionProvider>

    
  );
}

export default MyApp
