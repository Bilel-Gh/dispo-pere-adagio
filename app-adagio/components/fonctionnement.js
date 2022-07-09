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
`
const Steps = styled.section`
 display :flex;
 color: red;
 border: solid rebeccapurple; 
 height: 30vh;
`
export default function Fonctionnement({}) {

  const details = [
    {
      value: 'numOne',
      textOne: 'Choisissez le food-truck adapté à vos besoins.',
    },
    {
      value: 'numTwo',
      textOne: 'Choisissez le food-truck adapté à vos besoins.',
    },
    {
      value: 'numThree',
      textOne: 'Choisissez le food-truck adapté à vos besoins.',
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
        details.map(item =>{
          console.log(item),
          <article>
          <p>{item.value}</p>
         {/* <figure>
            <img src={`img/dispo/${item.value}`} alt={`${item.value}`}/>
        </figure>*/}

          </article>
        })
      }
       
      
      </Steps>
    </MyFonc>
  )
}