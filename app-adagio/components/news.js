import Head from 'next/head'
import Header from '@/components/globalComponents/header'
import NewsletterForm from '@/components/globalComponents/newsletter'
import Home from '@/components/home'
import styled from 'styled-components'

const NewsLett = styled.section`
    background-color: #FDFCF3;
    color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    gap: 50px;
    *{
        margin: 0;
    }
    .title{
        font-family: "Poppins-ExtraBold";
        text-transform: uppercase;
    }
    p{
        font-family: "Poppins-Regular";
    }

    @media (max-width: 750px) {
        div{
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            align-items: center;
            input{
                width: 60%!important
            }
        }
        button{
            padding: 10px;
        }
    
` 

export default function Newsletter() {
  return (
    <NewsLett className='newsletter'>
        <div className='title-container'>
            <h1 className='title'>Notre newsletter</h1>
            <p>Restez informer de nos actualités</p>
        </div>
        <NewsletterForm/>
    </NewsLett>
  )
}
