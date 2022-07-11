import Button from '@/components/globalComponents/button'
import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import CarouselEvent from '@/components/carouselEvent'
import CarouselSpot from '@/components/carouselSpot'
import prisma from "/lib/prisma";

const MyAccueil = styled.section`
  .main{
    background-image: url(img/dispo/bgCooker.webp);
    background-size: cover;
    background-repeat: no-repeat;
    height: 730px;
    display: flex;
    align-items: center;
    padding: 10%;
    gap: 15px;
    article{
    display: flex;
    flex-direction:column;
    width: 70%;
    .title{
      color: #FDFCF3;
      display:flex;
      flex-direction: column;
      span{
        :nth-child(1) {
          text-transform: uppercase;
          font-family: "Fascinate-Regular";
          font-size: 55px;
          color: transparent;
          -webkit-text-stroke: 2px #FDFCF3;
        }
        :nth-child(2) {
          font-family: "Poppins-Regular";
          font-size: 24px;
        }
        :nth-child(3) {
          font-family: "BrittanySignature";
          font-size: 80px;
          font-weight: 100;
        }
      }
    }
    .description{
      font-family: "Poppins-Regular";
      font-size: 19px;
      color: #FDFCF3;

    }
    .btn-container{
      width: 40%;
    }
  }

  @media (max-width: 1100px) {
    article{
      .btn-container{
        width: 70%;
      }
    }
  }
  @media (max-width: 970px) {
    article{
      width:initial;
      .title{
        align-items: center;
        span{
          text-align: center;
        }
      }
      .btn-container{
        width: 50%;
      }
    }
  }
  }

  @media (max-width: 500px) {
    .main{
      article{
        .title{
          :nth-child(1) {
            font-size: 50px;
          }
          :nth-child(2) {
            font-size: 22px;
          }
          :nth-child(3) {
            font-size: 65px;
          }
        }
        .description{
          font-size: 15px;
          margin: 10px 0px;
        }
      }
    }
  }
  
  

`
const CurrentEvent = styled.section`
  background-color:#EB5B2D;
  /* height: 90vh; */
  padding: 5% 0%;
  position: relative;
  .clockStickers{
    position: absolute;
    top: -45px;
    right: 5%;
    height: 100px;
    width: 125px;
    background-size: 125px 100px;
    background-repeat: no-repeat;
    background-image: url(/img/dispo/Crop_clock.webp);
  }
  .titleContainer{
    padding-top: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
    color: #FDFCF3;
    gap: 20px;
    background-repeat: no-repeat;
    background-position: 0% 80%;
    background-image: url(/img/dispo/rock.webp);
    .title{
      margin: 0 auto; 
      text-transform: uppercase;
      font-family: "Fascinate-Regular";
      font-size: 45px;
    }
    .descriptionEvent{
      font-family: 'Poppins-Regular';
      font-size: 20px;
      width: 70%;

      span{
        font-family: 'Poppins-ExtraBold';

      }
    }
    
  }
  .btn-allEvents{
      margin: 10px auto;
      width: fit-content;
    }
  @media (max-width: 970px) {
    .titleContainer{
      background-image: none;
    }
  }

  @media (max-width: 900px) {
    .titleContainer{
      .title{
        font-size: 35px;
      }
    }
  }

  @media (max-width: 760px) {
    .clockStickers{
      background-image: none;
      display: none;
    }
    .titleContainer{
      .title{
        font-size: 28px;
      }
    }
  }
  
`
const CurrentSpot = styled.section`
  position: relative;
  background: #FDFCF3;
  padding: 5% 0%;
  .vectorStickers{
    position: absolute;
    top: -45px;
    right: 5%;
    height: 100px;
    width: 150px;
    background-size: 150px 100px;
    background-repeat: no-repeat;
    background-image: url(/img/dispo/vector.webp);
  }
  .titleContainer{
    padding-top: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
    color: #333333;
    gap: 20px;
    background-repeat: no-repeat;
    background-position: 10% 10%;
    background-image: url(/img/dispo/star.webp);
    .title{
      margin: 0 auto; 
      text-transform: uppercase;
      font-family: "Fascinate-Regular";
      font-size: 45px;
    }
    .descriptionSpot{
      font-family: 'Poppins-Regular';
      font-size: 20px;
      width: 70%;
    }
  }
  .btn-allSpots{
    display: flex;
    width: 100%;
       background-position: 4% 50%;
       background-repeat: no-repeat;
        background-size: 52px 50px;
      background-image: url(/img/dispo/star.webp);
      align-items: center;
    justify-content: center;

    }
  @media (max-width: 970px) {
    .titleContainer{
      background-image: none;
    }
  }

  @media (max-width: 900px) {
    .titleContainer{
      .title{
        font-size: 35px;
      }
    }
  }

  @media (max-width: 760px) {
    .vectorStickers{
      background-image: none;
      display: none;
    }
    .btn-allSpots{
      background-image: none;
    }
    .titleContainer{
      .title{
        font-size: 28px;
      }
    }
  }
`

export default function Accueil({events}) {

  const [userConnected, setUserConnected] = useState(
    useEffect(() => {
      var user = JSON.parse(
        window.localStorage.getItem("userConnected")
      );
      setUserConnected(user);
  }, [])
  );

  console.log('eventssss', events)

  console.log('userConnected', userConnected)
  return (
    <MyAccueil className='section-accueil'>
      <div className='main'>
        <article>
          <h1 className="title">
            <span>Votre restaurant</span>
            <span> là où vos clients</span>  
            <span>se retrouvent </span> 
          </h1>
          <p className='description'>
            Le Père Adagio vous permet d’obtenir votre foodtruck dans les évènements des plus grandes villes de France
          </p>
          <div className='btn-container'>
            <Button link='/events' name ='go-to-event' color='orange'>Tous nos évènements</Button>
          </div>
        </article>
      </div>

      <CurrentEvent>
        <div className='clockStickers' />
        <div className='titleContainer'>
          <h2 className='title'>Les ouvertures imminitentes !</h2>
          <p  className='descriptionEvent'>Les inscriptions pour ces prochains évènements ouvrent bientôt ! Ne manquez pas 
          la chance de faire <span>la fusion culinaire de vos rêves </span>avec Le Père Adagio.</p>
        </div>
        <CarouselEvent data={events}/>
        <div className='btn-allEvents'>
          <Button link='/events' name ='go-to-event' color='white-low'>Tous nos évènements</Button>
        </div>
      </CurrentEvent>

      <CurrentSpot>
        <div className='vectorStickers' />
        <div className='titleContainer'>
          <h2 className='title'>Les ouvertures imminitentes !</h2>
          <p  className='descriptionSpot'>
            C’est en ce moment même que les inscritpions se déroulent. Choisissez parmis le nombreux 
            choix de lieu, l’endroit ou vous souhaitez faire découvrir vôtre spécialité !
          </p>
        </div>
        <CarouselSpot/>
        <div className='btn-allSpots'>
          <Button link='/spots'  name ='go-to-spot' color='orange'>Voir tous les hot spots</Button>
        </div>
      </CurrentSpot>

      

    </MyAccueil>
  )
}

export const getServerSideProps = async ({ req }) => {
  // if session is not null, user is connected
  const events = await prisma.event.findMany({
    include: {
        spots: true,
    },
  });

  return {
    props: {
      // if session is not null, user is connected
      // userConnected: session ? userConnected : null,
      events: JSON.parse(JSON.stringify(events)) ,
    },
  };
};
