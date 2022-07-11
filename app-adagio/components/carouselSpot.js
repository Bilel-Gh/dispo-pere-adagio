import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
import CardSpot from '@/components/globalComponents/cardSpot';

const MyCarouselEvent = styled.div`
.caroussel{
  padding: 20px;
  .rec-pagination{
    display: none;
  }
  .rec-arrow{
    background-color: #eb5b2d21;
    :focus:enabled, :hover:enabled{
      background-color: #EB5B2D;
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
        <CardSpot
        name='Nos pop-up spot'
        descr='Le festival des Vieilles Charrues est un festival breton. Le festival est assez varié sur sa programmation musicale.'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        />
      </div>
      <div>
        <CardSpot
        name='Nos pop-up spot'
        descr='Le festival des Vieilles Charrues est un festival breton. Le festival est assez varié sur sa programmation musicale.'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        />
      </div>
      <div>
        <CardSpot
        name='Nos pop-up spot'
        descr='Le festival des Vieilles Charrues est un festival breton. Le festival est assez varié sur sa programmation musicale.'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        />
      </div>
      <div>
        <CardSpot
        name='Nos pop-up store'
        descr='Le festival des Vieilles Charrues est un festival breton. Le festival est assez varié sur sa programmation musicale.'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        />
      </div>
      <div>
        <CardSpot
        name='Nos pop-up store'
        descr='Le festival des Vieilles Charrues est un festival breton. Le festival est assez varié sur sa programmation musicale.'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        />
      </div>
      <div>
        <CardSpot
        name='Nos pop-up store'
        descr='Le festival des Vieilles Charrues est un festival breton. Le festival est assez varié sur sa programmation musicale.'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        />
      </div>
    </Carousel> 
  </MyCarouselEvent>
  )
}