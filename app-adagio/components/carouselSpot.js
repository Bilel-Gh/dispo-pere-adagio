import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
import CardSpot from '@/components/globalComponents/cardSpot';
import axios from "axios";
import Card from '@/components/globalComponents/cardSpot'


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


export default function CarousselEvent({events}) {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    // get all spots
    const getAllSpots = () => { 
        axios.get("/api/spot/getAllSpots")
        .then(res => {
            setSpots(res.data);
        })
    }
    getAllSpots();
    }, []);
  
  return (

    <MyCarouselEvent>
      <Carousel className='caroussel' breakPoints={breakPoints}>
      {spots.map((spot, index) => (
        <Link href={`/spots/${spot.id}`} key={index}>
        <a>
          <Card
            name={spot.name}
            descr={spot.description}
            place={spot.address}
            img={spot.image}
          />
          </a>
        </Link>
      ))}
        
    </Carousel> 
  </MyCarouselEvent>
  )
}

export const getServerSideProps = async ({ req }) => {
  // if session is not null, user is connected
  const events = await prisma.event.findMany({
    include: {
        spots: true,
    },
});

  return {
    props: {
      // if session is not null, user is connected
      // userConnected: session ? userConnected : null,
      events: JSON.parse(JSON.stringify(events)) ,
    },
  };
};