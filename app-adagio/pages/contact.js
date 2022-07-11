import Button from '@/components/globalComponents/button'
import Header from '@/components/globalComponents/nav'
import styled from 'styled-components'
import Link from 'next/link'

const MyContact = styled.section`
  background-color: #F195BA;
    height: 100vh ;
    position: relative;
    background-image: url('/img/landing/allStickers.webp');
    background-size: 300px 400px ;
    background-repeat: no-repeat;
    background-position: 0% 100%;
    .containertext{
        height: calc( 100vh - 100px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10%;
        .paragraph{
            color: #FDFCF1;
            font-family: "Poppins-Regular";
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
            width: 80%;
            text-align: center;
            span{
                font-family: "Poppins-ExtraBold";
            }
            }
            h1{
            font-family: "Poppins-ExtraBold";
            text-transform: uppercase;
            font-size: 19px;
            font-weight: bold;
            font-style: italic;
            margin: 0;
            }
        }
        .bottom{
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: #FDFCF1;
            font-family: "Poppins-Regular";
            .btn{
                // background-color: solid red!important;
            }
        }
        
    }

@media (max-width: 750px) {
        background-image: none;
}

`


export default function Contact() {
  return (
    <MyContact id ='contact' className='section-contact'>
        <Header/>
      <div className='containertext'>
        <img src='/img/landing/logoWhite.webp' alt='white logo' width={250} height={160}/>
        <div className='paragraph'>
            <p>
                Besoin d’aide sur 
                <span> un projet </span>
                , envie de 
                <span> développer </span>
                un concept store ou tout simplement envie de prendre 
                <span> contact </span>
                avec nous ?
            
            </p>
            <h1>Vous êtes au bon endroit</h1> 
        </div> 
        <div className='bottom'>
            <Button color='black' link='/' name='go-to-form' className='btn'>
               En cours
            </Button>
            <span>
                Cela prend 2 minutes
            </span>
        </div> 
      </div>                          

    </MyContact>
     
  )
}