import { createGlobalStyle } from 'styled-components';
import Header from '@/components/globalComponents/header'


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
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <GlobalStyle/>
    <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
