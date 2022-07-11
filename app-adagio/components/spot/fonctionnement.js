import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


const MyFonc = styled.section`
  .fonctContainer{
    background: #FDFCF3;
    background-image: url(/img/dispo/tirage.webp);
    background-size:250px 103px;
    background-position: 97% 20%;
    background-repeat: no-repeat;
    .titleContainer{

      padding-top: 50px;
      color: #333333;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      display: flex;
      text-align: center;
      gap: 20px;
      .title{
        margin: 0 auto; 
        text-transform: uppercase;
        font-family: "Fascinate-Regular";
        font-size: 45px;
      }
      .description{
        font-family: 'Poppins-Regular';
        font-size: 20px;
        width: 70%;
        span{
          font-family: 'Poppins-ExtraBold';

        }
      }
    }
  }
  @media (max-width: 1080px) {
    .fonctContainer{
      background-image: none;
    }
  }

  @media (max-width: 900px) {
    .fonctContainer{
      .titleContainer{
        .title{
          font-size: 35px;
        }
        .description{
          font-size: 15px;
        }
      }
    }
  }

  @media (max-width: 760px) {
    .fonctContainer{
      .titleContainer{
        .title{
          font-size: 28px;
        }
        .description{
          font-size: 13px;
        }
      }
    }
  }
`
const Steps = styled.section`
  background: #FDFCF3;
  display :flex;
  justify-content: center;
  gap: 5%;
  padding: 30px 0px;
  .details{
    display :flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 234px;
    figure{
      margin: 0px; 
    }
    .step-details{
      color: #333333;
      font-size: 17px;
      text-align:center;
      font-family: 'Poppins-ExtraBold';
    }
  }
  @media (max-width: 900px) {
    .details{
      .step-details{
        font-size: 15px;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`
export default function Fonctionnement({}) {

  const details = [
    {
      value: 'numOne',
      textOne: 'Choisissez le food-truck adapté à vos besoins.',
    },
    {
      value: 'numTwo',
      textOne: 'Envoyez votre demande.',
    },
    {
      value: 'numThree',
      textOne: 'On tire au sort un artisan.',
    }
  ]
  
  return (
    <MyFonc>
      <div className='fonctContainer'>
        <div className='titleContainer'>
            <h2 className='title'>Comment ça marche ?</h2>
            <p  className='description'>
              Parce qu’un Père est <span>juste </span>, à l’ouverture des candidatures pour un stand,
              c’est <span>le hasard </span>  qui choisira parmi toutes les demandes !
            </p>
        </div>
      </div>
      <Steps>
      {
        details.map((item, index) =>(
          <div className='details' key={index} >
            <figure>
              <img src={`img/dispo/${item.value}.webp`} width='150' height='150' alt={`${item.value} img`}/>
            </figure>
            <p className='step-details'>
              {item.textOne}
            </p>
          </div>
          
        ))
      }
       
      
      </Steps>
    </MyFonc>
  )
}