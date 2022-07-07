import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

export default function UserOnSpot({ id }) {
  // console.log("spotId UserOnSpot:", id);
  const { data: session } = useSession();

  const [usersOnSpotData, setUsersOnSpotData] = useState([]);
  // const [usersStatus, setUsersStatus] = useState([]);
  useEffect(() => {
    // get all spots
    const getAllSpots = () => { 
        axios.get(`/api/userOnSpot/${id}`)
        .then(res => {
            // setUsers(res.data.map(user => user.user));
            setUsersOnSpotData(res.data);
        })
    }
    getAllSpots();
}, [id]);



  // console.log("DATA9:", usersStatus);
  // console.log("DATA10:", users);

  return (
    <div className={styles.container}>
      <div>
        {usersOnSpotData.map(userOnSpotData => (
          <div className={userOnSpotData.userStatus.toLowerCase()} key={userOnSpotData.id}>
            <p>{userOnSpotData.user.email}</p>
            <p>----</p>
            <p>{userOnSpotData.userStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// export const getServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });
//   // if session is not null, user is connected

//   const userConnected = await prisma.user.findUnique({
//     where: {
//       // if session is not null, user is connected
//       id: session ? parseInt(session.id) : 0,
//     },
//     select: {
//       id: true,
//       firstname: true,
//       lastname: true,
//       email: true,
//       phone: true,
//       jobId: true,
//       createdAt: false,
//     },
//   });

//   return {
//     props: {
//       // if session is not null, user is connected
//       userConnected: session ? userConnected : null,
//     },
//   };
// };
