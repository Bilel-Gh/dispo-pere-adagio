import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MyCard = styled.div`
  height: 350px;
  width: 280px;
  /* width: 100%; */
  /* margin: 0 10px; */
  /* width: 363px; */
  background-color: #FDFCF3;
  /* box-shadow: 5px 1px 64px 6px rgba(0, 0, 0, 0.08); */
  /* box-shadow: 5px 1px 64px 6px rgba(0, 0, 0, 0.08); */
  border-radius: 16px;
  /* padding: 21px 23px; */
  /* gap: 5%; */
  display: flex;
  flex-direction : column;
  /* gap: 10px; */
  .image-card{
    display: flex;
    align-items: center; 
    justify-content: center;
    height: 185px;
    background-color: #F195BA;
    border-radius: 16px;
    font-size: 20px;
    /* margin: 0 auto;
    padding: 56px; */
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
    /* align-items: center; */
    .name-card{
      /* margin-top: -30px; */
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
`
export default function CardEvent(props) {
  const {
    // name, btn,info, text, link
    name, btn,date, descr, link ,img

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