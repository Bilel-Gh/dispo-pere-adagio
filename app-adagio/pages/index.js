import Head from 'next/head'
import Header from '@/components/globalComponents/header'
import Newsletter from '@/components/news'
import Home from '@/components/home'

export default function Main() {
  return (
    <div className='container'>
      <Head>
      <title>Le Père Adagio</title>
        <meta property="og:image" content="/img/logoPink.png"/>
        <meta property="og:title" content="Le Père Adagio"/>
        <meta property="og:description" content="La première plateforme  qui rassemble des acteurs de l'artisanat culinaire autour d'un projet commun, la création d'espaces culinaires partagés, pour la valorisation du secteur."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header style={{position:"fixed"}}/>


      <main className='main'>
        <Home/>
        <Newsletter/>
      </main>
    </div>
  )
}
