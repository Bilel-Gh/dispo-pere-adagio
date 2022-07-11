import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle } from 'styled-components';
import Nav from '@/components/globalComponents/nav'
import Footer from '@/components/globalComponents/footer'
import '../styles/globals.css'
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
        <title>Le Père Adagio</title>
        <meta property="og:image" content="/img/logoPink.png"/>
        <meta property="og:title" content="Le Père Adagio"/>
        <meta property="og:description" content="La première plateforme  qui rassemble des acteurs de l'artisanat culinaire autour d'un projet commun, la création d'espaces culinaires partagés, pour la valorisation du secteur."/>
        <link rel="icon" href="/favicon.ico" />

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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.axeptioSettings = {
                  clientId: "62b2d68254bf6310d9d3c8f0",
                };
                 
                (function(d, s) {
                  var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                  e.async = true; e.src = "//static.axept.io/sdk.js";
                  t.parentNode.insertBefore(e, t);
                })(document, "script");
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