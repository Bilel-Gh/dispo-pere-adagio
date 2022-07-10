import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
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


export default function CarousselEvent({}) {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
  return (

    <MyCarouselEvent>
      <Carousel className='caroussel' breakPoints={breakPoints}>
      <div>
        <CardEvent
        name='Nos pop-up store'
        btn='Voir'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        link='/event'
        />
      </div>
      <div>
        <CardEvent
        name='Nos pop-up store'
        btn='Voir'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        link='/event'
        />
      </div>
      <div>
        <CardEvent
        name='Nos pop-up store'
        btn='Voir'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        link='/event'
        />
      </div>
      <div>
        <CardEvent
        name='Nos pop-up store'
        btn='Voir'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        link='/event'
        />
      </div>
      <div>
        <CardEvent
        name='Nos pop-up store'
        btn='Voir'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        link='/event'
        />
      </div>
      <div>
        <CardEvent
        name='Nos pop-up store'
        btn='Voir'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        link='/event'
        />
      </div>
    </Carousel> 
  </MyCarouselEvent>
  )
}

