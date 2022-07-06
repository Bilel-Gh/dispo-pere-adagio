import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Card from '@/components/globalComponents/cardInfoTemplate'

const Main = styled.article`
    background-color: #EB5B2D;
    background-image: url(/img/bgCook.webp);
    background-size: 50% 130%;
    background-repeat: no-repeat;
    background-position: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    padding-left: 10%;
    .title-container{
        background-image: url('/img/sublime.svg');
        background-size: 380px 108px;
        background-repeat: no-repeat;
        background-position: 90% 40%;
        // width: 100%;
        .title{
            margin: 0;

            display: flex;
            flex-direction: column;
            font-size: 83px;
            font-family: "Poppins-Regular";
            color: #FDFCF3;
            span{
                font-family: "Fascinate-Regular";
            }
            .separator{
                width: 60%;
                height:5px;
                background-color: #FDFCF3;
                margin: 0 ;
            }
        }
    }
    // @media (max-width: 1250px) {
    //     .title-container{
    //         .title{
    //             font-size: 65px;
    //         }
    //     }
    // }



    // @media (max-width: 1060px) {
    //     .title-container{
    //         width: 100%;
    //         .title{
    //             font-size: 65px;
    //         }
    //     }
    // }

    // @media (max-width: 860px) {
    //     .title-container{
    //         .title{
    //             font-size: 45px;
    //         }
    //     }
    // }

    // @media (max-width: 650px) {
    //     background-color: #F195BA ;
    //     background-image: none ;
    //     .title-container{
    //         .title{
    //             align-items: center;
    //             color: #333333!important;
    //             text-align: center;
    //             .separator{
    //                 background-color: #333333!important;
    //                color: #333333!important;
    //             }
    //         }
    //     }
    // }
    
`

const Cards = styled.section`
    margin-top: -5%;
    gap: 7%;
    display: flex;
    align-items: center; 
    justify-content: center;
    margin-bottom: 5%
`

export default function Home() {


  return (
    <section className='section-home'>

    <Main className='container'>
        <div className='title-container'>
            <h1 className='title'>
                <span>Les espaces <br/></span>
                culinaires sublimés.<br/>
                POUR VOUS
                <div className='separator'/>
            </h1>

        </div>

    </Main>
    <Cards className='cards-container'>
        <Card
            title='Nos pop-up store'
            btn='Voir tout les pop-up stores'
            info='Partagez nos pop-ups store avec l’artisan de vos rêves et à deux devenez les prochains '
            text=' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            link='/'
        />
        <Card
            title='Les évenements'
            btn='Voir tout les évenements'
            info='A deux ou tout seul partez à la rencontre de vos fans et faites les voyagers'
            text=' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            link='/event'

        />
    </Cards>

   

    </section>

  )
}
