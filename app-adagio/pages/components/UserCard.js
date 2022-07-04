import styles from '../../styles/Card.module.css';
import React from 'react';
import Link from 'next/link';
const UserCard = ({ user }) => {
    return (
        <div className={styles.card}>
            <img src={user.avatar} alt='Avatar'/>
            <div className='container'>
                <h4><b>{user.name}</b></h4>
                <Link href={`users/${user.id}`}><a>Details</a></Link>
                <p>{user.email}</p>
            </div>
        </div>
    );
    }
    export default UserCard;
