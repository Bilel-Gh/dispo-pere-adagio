import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
import axios from "axios";
import CardEvent from '@/components/globalComponents/cardEventOne';


const MyCarouselEvent = styled.div`
.caroussel{
  padding: 20px;
  .rec-pagination{
    display: none;
  }
  .rec-arrow{
    :focus:enabled, :hover:enabled{
      background-color: #F195BA;
    }
  }
}
`


export default function CarousselEvent({data}) {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  console.log('data', data)
  
  return (

    <MyCarouselEvent>
      <Carousel className='caroussel' breakPoints={breakPoints}>
      {data.map((evt, index) => (
          <CardEvent key={index}
            name={evt.name}
            descr={evt.description}
            date={`Du ${evt.dateStart} au ${evt.dateEnd}`}
            img={evt.image}
            link={`/spots/${evt.id}`}
            btn='Voir'

          />
      ))}
    </Carousel> 
  </MyCarouselEvent>
  )
}

