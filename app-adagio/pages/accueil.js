import Button from '@/components/globalComponents/button'
import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import CarouselEvent from '@/components/carouselEvent'

const MyAccueil = styled.section`
  .main{
    background-image: url(img/dispo/bgCooker.webp);
    background-size: cover;
    background-repeat: no-repeat;
    height: 730px;
    display: flex;
    align-items: center;
    padding: 10%;
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
  

`
const CurrentEvent = styled.section`
  background-color:#EB5B2D;
  height: 90vh;
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
    .titleContainer{
      .title{
        font-size: 28px;
      }
    }
}
  
`

export default function Accueil() {

  const [userConnected, setUserConnected] = useState(
    useEffect(() => {
      var user = JSON.parse(
        window.localStorage.getItem("userConnected")
      );
      setUserConnected(user);
  }, [])
  );
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
            <Button style={{ width: '40%'}} link='/evenements' color='orange'>Tous nos évènements</Button>
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
        <CarouselEvent/>

        



      </CurrentEvent>

      

    </MyAccueil>
  )
}
