import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Switch  from '@/components/globalComponents/switch'

const Main = styled.article`
  background-color: #F195BA;
  background-image: url(/img/event.webp);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: 0%;
  height: 50vh;
  display: flex;
  align-items: center;
  padding-left: 10%;
  justify-content: center;
  .title-container{
    .title{
      text-align: end;
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
`

const Wish = styled.article`
  background-color: #EB5B2D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -5% 5%;
  gap: 5%;
  height: 400px;
  .titleW{
    font-family: 'Poppins-ExtraBold';
    color: #FDFCF3;
    font-size: 22px
  }
  .description{
    align-items: center;
    text-align: center;
    color: #FDFCF3;
    font-family: 'Poppins-Regular';
    width: 50%;

  }
`

export default function Event(props) {
  const {
    title, btn,info, text
  } = props

  const [value, setValue] = React.useState(true);

  return (
    <section className='section-event'>
      <Main className='container'>
          <div className='title-container'>
              <h1 className='title'>
                Les évenements <br/> disponibles
              </h1>
          </div>
          
      </Main>
      <section className='choice-event'>
        <Wish>
          <h2 className='titleW'>Vous souhaitez</h2>
          <Switch
            onColor="#FDFCF3"
            isOn={value}
            valOne='Collaborer avec un autre artisan'
            valTwo='Je veux être seul'
            handleToggle={() => setValue(!value)}
          />
          <p className='description'>En fusionnant avec un autre artisan vous bénéficiez des food truck premium adaptés à vos besoins.</p>
          
        </Wish>
      </section>
      

    </section>

  )
}
