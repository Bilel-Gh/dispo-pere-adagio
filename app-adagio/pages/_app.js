import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle } from 'styled-components';
import Nav from '@/components/globalComponents/nav'
import Footer from '@/components/globalComponents/footer'
import '../styles/globals.css' // à supprimer
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  html, body{
    background-color: #FDFCF3;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Poppins-Regular";
    src: url("/fonts/poppins/Poppins-Regular.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Poppins-ExtraBold";
    src: url("/fonts/poppins/Poppins-ExtraBold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Fascinate-Regular";
    src: url("/fonts/fascinate/Fascinate-Regular.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-display: swap;
    font-family: "BrittanySignature";
    src: url("fonts/brittany/BrittanySignature.ttf") format("truetype");
  }
  @font-face {
    font-family: "Helvetica-Regular";
    src: url("fonts/helvetica/Helvetica-Regular.ttf") format("truetype");
    font-display: swap;

  }
`;

function MyApp({ Component, pageProps}) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KT47D9V' });
  }, []);
  
  return (
    <>

     <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4E1T9YRE4G"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `     
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}   
            gtag('js', new Date());
            gtag('config', 'G-4E1T9YRE4G');
          `,
            }}
          />
          </Head>
    <SessionProvider session={pageProps.session}> 
      <Nav user={pageProps.userConnected}/>
      <GlobalStyle/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
    </>
  );
}

export default MyApp