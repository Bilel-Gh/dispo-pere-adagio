import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Fonctionnement from '@/components/spot/fonctionnement'
import Gamme from '@/components/spot/gamme'

const MySpotRegister = styled.section`
  background: #00C2D1;
  /* height: 100vh; */
  .main{
    padding: 150px 50px 50px 50px;
    display: flex;
    gap: 40px;
    figure{
      width:50%;
      margin: 0px;
      img{
        width: 100%;
        height: auto;
      }
    }

    .info-spot{
      color: #333333;
      display: flex;
      flex-direction: column;
      gap: 15px;
      .name-spot{
        font-family: "BrittanySignature";
        margin:0px;
        font-size: 45px;

      }
      .title-spot{
        margin:0px;
        font-size: 45px;
        font-family: 'Poppins-ExtraBold';
        .title-fiscinate{
          font-family: "Fascinate-Regular";
          text-transform: uppercase;
        }
        .title-white{
          color: white;
        }
    }
    .descr-spot{
      margin: 0px;
      font-size: 20px;
      font-family: 'Poppins-Regular';

    }

    }
  }

  @media (max-width: 1150px) {
    .main{
      .info-spot{
        .title-spot,.name-spot {
          font-size: 35px;

        }
      }
      .descr-spot{
        font-size: 15px!important ;
      }
    }
  }

  @media (max-width: 900px) {
    .main{
      .info-spot{
        .title-spot,.name-spot {
          font-size: 30px;

        }
      }
    }
  }

  @media (max-width: 830px) {
    .main{
      flex-direction: column-reverse;
      align-items: center;
      figure{
        width: initial;
      }
      .info-spot{
        align-items: center;
        text-align: center;
        .title-spot,.name-spot {
          font-size: 30px;

        }
      }
    }
  }
  
`

const scrollTxt = keyframes`
  0%{
    transform: translate(0%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
`
const TextDefilant = styled.section`
  display: block;
  background-color: #EB5B2D;
  /* margin: 40px auto; */
  padding: 0;
  overflow: hidden;
  position: relative;
  /* width: 50%;
  max-width: 640px; */
  color: #FDFCF3;
  margin: auto;
  padding: 20px;
  .txt{
    white-space: nowrap;
    animation-name: ${scrollTxt};
    text-transform: uppercase;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    font-family: "Poppins-Regular";

  }
`


export default function Spot({}) {

  useEffect(() => {
    document.querySelectorAll('.txt').forEach(function(el) {
      el.dataset.watermark = (el.dataset.watermark + ' ').repeat(300);
    })
  }, [])

  return (

    <MySpotRegister>

    <div className='main'>
      <figure>
        <img src='img/dispo/spotRegister.webp' alt='bg'/>
      </figure>
      <div className="info-spot">
        <h1 className="name-spot">
          nom du stand
        </h1>
        <h2 className="title-spot">
          <span className="title-fiscinate">Emplacement</span><br/>
          du <span className="title-white">stand</span> éphemère
        </h2>
        <h3 className="descr-spot">
          Du 16 au 17 juillet 2022 <br/>
          Paris 11
        </h3>
      </div>
    </div>
    <TextDefilant>
      <span className="txt">
        12 candidatures restantes
      </span>
    </TextDefilant>
    <Fonctionnement/>
    <Gamme/>
    
    </MySpotRegister>

    
    
  )
}