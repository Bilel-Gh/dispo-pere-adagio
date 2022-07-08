import styles from '../styles/Card.module.css';
import React from 'react';
import Link from 'next/link';


const EventCard = ({ events }) => {
    return (
        <div className={styles.card}>
            <img src={events.avatar} alt='Avatar'/>
            <div className='container'>
                <h1><b>{events.name}</b></h1>
                <Link href={`events/${events.id}`}><a>Details</a></Link>
                <p>{events.dateStart} / {events.dateEnd}</p>
                <p>{events.spots}</p>
            </div>
        </div>
        
    
    );
}
export default EventCard;