import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MyCard = styled.div`
  height: 350px;
  width: 280px;
  background-color: #FDFCF3;
  border-radius: 16px;
  display: flex;
  flex-direction : column;
  .image-card{
    display: flex;
    align-items: center; 
    justify-content: center;
    height: 185px;
    background-size: cover;
    background-color: #F195BA;
    border-radius: 16px;
    font-size: 20px;
    p{
      text-align: center;
      font-family: 'Poppins-Regular';
      font-size: 16px;
    }
  }
  .description{
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    .name-card{
      margin-bottom: 0px;
      font-family: 'Poppins-ExtraBold';
      font-size: 20px;
      text-transform: uppercase;
      color: #333333;
      margin: 0;
    }
    .date-card{
      margin: 0;
      font-family: 'Poppins-ExtraBold';
      font-size: 13px;
      width: 80%;
    }
    .place-card{
      margin: 0;
      font-family: 'Poppins-Regular';
      font-size: 12px;
      width: 80%;
    }
    .button-card{
      width: 100%;
      margin-top: 5%;
    }
  }
  @media (max-width: 500px) {
  width: initial;
}
`
export default function CardEvent(props) {
  const {
    name, btn, date, descr, link, img
  } = props

  return (
    <article className='section-card'>
      <MyCard>
        <div className='image-card' style={{
          backgroundImage: `url(${img})`
        }}></div>
        <div className='description'>
          <h3 className='name-card'>
            {name}
          </h3>
          <h4 className='date-card'>
            {date}
          </h4>
          <h4 className='place-card'>
            {descr}
          </h4>
          <div className='button-card'>
            <Button link={link} color='pink'>
              {btn}
            </Button>
          </div>
        </div>
      </MyCard>
    </article>
  )
}