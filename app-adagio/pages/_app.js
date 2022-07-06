import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css' // à supprimer

const GlobalStyle = createGlobalStyle`
  html, body{
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

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}> 
      <GlobalStyle/>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
