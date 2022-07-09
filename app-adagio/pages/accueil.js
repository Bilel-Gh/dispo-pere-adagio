import Button from '@/components/globalComponents/button'
import styled from 'styled-components'
import React, {useState, useEffect} from 'react'



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
  @media (max-width: 950px) {
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


export default function Accueil() {
  const [userConnected, setUserConnected] = useState(
    useEffect(() => {
      var user = JSON.parse(
        window.localStorage.getItem("userConnected")
      );
      setUserConnected(user);
  }, [])
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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


    </MyAccueil>
  )
}
