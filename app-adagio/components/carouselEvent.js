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

  // const [allEvents, setAllEvents] = useState([]);

  // useEffect(() => {
  //   // get all spots
  //   const getAllEvents = () => { 
  //     axios.get("/api/spot/getAllSpots")
  //     .then(res => {
  //       setAllEvents(res.data);
  //     })
  //   }
  //   getAllEvents();
  // }, []);

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
      <div>
        <CardEvent
        name='Nos pop-upkdhgsjhf store'
        btn='Voir'
        date='Du 29 juin au 1e juillet 2022'
        place='Hôtel de ville de Paris'
        link='/event'
        />
      </div>
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

