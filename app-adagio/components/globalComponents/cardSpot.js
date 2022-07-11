import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MyCard = styled.div`
  background-color: #FDFCF3;
  border-radius: 16px;
  width: 280px;
  height: 350px;
  display: flex;
  flex-direction : column;
  box-shadow: 5px 1px 64px 6px rgba(0, 0, 0, 0.08);
  .image-card{
    display: flex;
    align-items: center; 
    justify-content: center;
    height: 185px;
    background-size: cover;
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
    align-items: start;
    .name-card{
      margin-bottom: 0px;
      font-family: 'Poppins-ExtraBold';
      font-size: 20px;
      text-transform: uppercase;
      color: #333333;
      margin: 0;
    }
    .descr-card{
      color: #333333;
      font-family: 'Poppins-Regular';
      margin: 0;
      text-align: start;
      font-size: 13px;
      padding: 10px 0px;
    }
    .date-card{
      font-family: 'Poppins-Regular';
      margin: 0;
      text-align: start;
      font-size: 13px;
    }
    
    .place-card{
      color: #71717A;
      margin: 0;
      text-align: start;
      font-family: 'Poppins-Regular';
      font-size: 13px;
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

export default function CardSpot(props) {
  const {
    name, descr,place,date, link, img

  } = props

  return (
    <article className='section-card'>
      <MyCard>
        <div className='image-card' style={{
          backgroundImage:`url(${img})`
        }}></div>
        <div className='description'>
          <h3 className='name-card'>
            {name}
          </h3>
          <h4 className='descr-card'>
            {descr}
          </h4>
          <h4 className='place-card'>
            {place}
          </h4>
          <h4 className='date-card'>
            {date}
          </h4>
        </div>
      </MyCard>
    </article>
  )
}