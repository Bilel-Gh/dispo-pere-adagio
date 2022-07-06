import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MyCard = styled.article`
  height: 492px;
  width: 363px;
  background-color: #FDFCF3;
  box-shadow: 5px 1px 64px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 21px 23px;
  display: flex;
  flex-direction : column;
  gap: 10px;
  .image-card{
    display: flex;
    align-items: center; 
    justify-content: center;
    height: 315px;
    background-color: #F195BA;
    border-radius: 16px;
    margin: 0 auto;
    padding: 56px;
    p{
      text-align: center;
      font-family: 'Poppins-Regular';
      font-size: 16px;
    }
  }
  .title-card{
    margin-top: -30px;
    margin-bottom: 0px;
    font-family: 'Poppins-ExtraBold';
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    color: #333333;
  }
  .text-card{
    text-align: center;
      font-family: 'Poppins-Regular';
      font-size: 14px;
      width: 80%;
      text-align: center;
      margin: 0 auto;

  }
    
`

export default function Card(props) {
  const {
    title, btn,info, text, link
  } = props

  return (
    <section className='section-card'>
      <MyCard>
        <>
        <div className='image-card'>
          <p>
             {info}
          </p>
        </div>
        <h1 className='title-card'>
          {title}
        </h1>
        </>
        <p className='text-card'>
         {text}
        </p>
        <Button href={link}>
          {btn}
        </Button>
        

      
      </MyCard>




    </section>

  )
}
