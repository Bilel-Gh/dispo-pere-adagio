import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


const MyGamme = styled.section`
  background: #FFFFFF;
  padding: 0% 5% 5% 5%;
  .gammeContainer{
    padding: 72px 72px 50px 72px;
    .titleContainer{
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
          color: #EB5B2D;
        }
      }
    }
  }
  .infoContainer{
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 900px) {
    .gammeContainer{
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

  @media (max-width: 850px) {
    .infoContainer{
      align-items: center;
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
const Card = styled.section`
  display: flex;
  gap: 5%;
  justify-content: center;
  .card{
    width: 304px;
    border-radius: 12px;
    .topCard{
      padding: 20px;
      height: 180px;
      .cardBtn{
        font-family: 'Poppins-ExtraBold';
        color: #333333;
        border: none;
        width: 100%;
        padding: 10px;
        margin: 5px 0px;
        border-radius: 4px;
      }
      h3{
        margin: 0px;
        font-family: 'Poppins-ExtraBold';
        font-size: 20px;
      }
      h4{
        margin: 0px;
        color: #333333;
        font-family: 'Poppins-ExtraBold';
        font-size: 36px;
        span{
        font-size: 12px;

          color: #71717A;
          font-family: 'Poppins-Regular';
        }
      }
      p{
        margin: 0px;

        font-size: 14px;
        color: #52525B;
        font-family: 'Poppins-Regular';

      }
    }
    .bottomCard{
      padding: 20px;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      background: #FAFAFA;
      h4{
        margin: 0px;
        color: #71717A;
        font-family: 'Poppins-ExtraBold';
      }
      ul {
        padding: 0px;
        list-style: none;
        li{
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          span{
            font-family: 'Poppins-ExtraBold';
            color: #333333;
            font-size: 14px;
          }
        }
      } 
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;

    .card{
    width: 80%;

    }
  }
 
  
`

const Rules = styled.section`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  .equipementContainer,.conditionContainer{
    background: #FAFAFA;
    border-radius: 12px;
    padding: 20px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3{
      font-size: 15px;
      margin: 0px;
      font-family: 'Poppins-ExtraBold';
    }
    ul{
      padding-left: 20px;

      li{
        font-family: 'Poppins-Regular';
        font-size: 16px;
      }
      h5{
        padding-top: 10px;
        margin: 0px;
        font-family: 'Poppins-Regular';
        font-size: 12px;
      }
    }
  }
  .equipementContainer{
    width: 304px;
  }
  .conditionContainer{
    width: 100%;
    ul{
      list-style: none;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    .equipementContainer,.conditionContainer{
      width: 100%;
    }
  }
`
export default function Gamme({}) {

  const cardGamme = [
    {
      type: 'Eco +',
      color: '#F195BA',
      pourcantage: '3%',
      value: 'numOne',
      text: 'Bon plan pour un usage individuel',
      formuleBool : [true, true, false, false, false],
    },
    {
      type: 'Standard',
      color: '#D4D4D8',
      pourcantage: '4%',
      value: 'numOne',
      text: 'Idéal pour une collaboration',
      formuleBool : [true, true, true, true, false],
    },
    {
      type: 'Premium',
      color: '#D4D4D8',
      pourcantage: '6%',
      value: 'numOne',
      text: 'Le Food Truck de vos rêves',
      formuleBool : [true, true, true, true, true],
    },
  ]

  const switchFormule = (i) => {
    switch(i){
      case 0:
        return "Chambre Froide"
      case 1:
        return "Equipements de cuisine"
      case 2:
        return "Vestiaires"
      case 3:
        return "Sanitaires"
      case 4:
        return "Wifi"
      default:
        return "neutral"
    }
  }

  
  return (
    <MyGamme>
      <div className='gammeContainer'>
        <div className='titleContainer'>
            <h2 className='title'>Choisissez votre gamme de Food Truck</h2>
            <p  className='description'>
              Le Père Adagio vous mets à disposition <span>les meilleures des Food Truck </span>pour chacun de vos besoin !
            </p>
        </div>
      </div>
      <div className='infoContainer'> 
      <Card  className='cardsContainer'>
        {
          cardGamme.map((card, index)=> (
            <article className='card' key={index}
              style={{
                color: `${card.color}`,
                border: `2px solid ${card.color}`
              }}
            >
              <div className='topCard'>
                <h3>{card.type}</h3>
                <h4>{card.pourcantage} <span>commission sur CA</span></h4>
                <p>{card.text}</p>
                <button className='cardBtn' 
                  style={{
                    background: `${card.color}`,
                    cursor: index === 0 && 'pointer',

                  }}>
                  Choisir ce Food Truck
                </button>
              </div>
              <div className='bottomCard'>
                <h4>Incluant dans la formule</h4>
                <ul>
                  {
                    card.formuleBool.map((form, indexf)=>(
                        <li key={indexf}>
                            {form === true ? 
                              (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z" fill={card.color}/>
                                </svg>
                              ) : (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L6.58579 8L5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L8 9.41421L9.29289 10.7071C9.68342 11.0976 10.3166 11.0976 10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289L9.41421 8L10.7071 6.70711C11.0976 6.31658 11.0976 5.68342 10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289L8 6.58579L6.70711 5.29289Z" fill="#D4D4D8"/>
                                </svg>
                              )}
                            <span>{switchFormule(indexf)}</span>
                        </li>
                    ))
                  }
                </ul>
              </div>
            </article>
          ))
        }
      </Card>
      <Rules className='reglesContainer'>
        <article className='equipementContainer'>
          <h3>Equiement inclus</h3>
          <ul>
            <li>Four micro-onde</li>
            <li>Petits équipements</li>
            <li>Batteur</li>
            <li>Plan de travail</li>
            <li>Plan de cuisine à induction</li>
            <li>Armoires frigorifiques</li>
          </ul>
        </article>
        <article className='conditionContainer'>
          <h3>Conditions de location</h3>
          <ul>
            <li>Retrait du Food Truck à partir de 05:00</li>
            <li>Suivre le règlement intérieur</li>
            <li>Respecter les consignes de santé et de sécurité </li>
            <li>Animaux non autorisés à bord</li>
            <li>Annulation gratuite sous 72 heures</li>
            <li>Armoires frigorifiques</li>
            <h5>Pour plus d’information consulter les condition d’utilisation du véhicules*</h5>
          </ul>
        </article>
      </Rules>
      </div>

    </MyGamme>
  )
}