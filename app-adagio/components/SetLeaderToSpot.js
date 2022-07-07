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

export default function SetLeaderToSpot({ spotId }) {
  // console.log("spotId SetLeaderToSpot:", spotId );
  const { data: session } = useSession();

  const [usersOnSpotData, setUsersOnSpotData] = useState([]);
  useEffect(() => {
    // get all spots
    const getAllSpots = () => { 
        axios.get(`/api/userOnSpot/${spotId}`)
        .then(res => {
          setUsersOnSpotData(res.data);
        })
    }
    getAllSpots();
}, [spotId]);

  // console.log("DATA99:", usersOnSpotData);


const setLeaderRandomlyToSpot = async (spotId) => {
  try { 
    axios.post(`/api/userOnSpot/getRandomUserOnSpot`, {
      spotId: spotId,
  }).then(res => {
      const randomedID = res.data.id;
      console.log("randomedID", randomedID);
      axios.post(`/api/userOnSpot/accepteFirstUserToSpot`, {
          userId: randomedID,
          spotId: spotId,
      })
      console.log("DATA AFTER RANDOM3", res.data)
      toast.success(`${res.data.firstname} deviens LEADER`, {
        autoClose: 5000,
      });
      // window.location.reload();
  }
  )
  } catch (error) { 
    // toast error
    toast.error("Erreur lors de l'inscription", { autoClose: 5000 });
  }
}

const isOneLeaderInSpot = () => {
  // chercher si un user dans users a la propriété spotStatus a FIRSTACCEPTED
  // si oui, return true
  // si non, return false
  const isOneLeader = usersOnSpotData.find(userOnSpotData => userOnSpotData.userStatus === "FIRSTACCEPTED");
  if (isOneLeader) {
    return true;
  }
  return false;
}

//  console.log("DATA10:", users);

  return (
    <div className={styles.container}>
      { !isOneLeaderInSpot() ? (
        <button
          onClick={() => {
            setLeaderRandomlyToSpot(spotId);
          }}
        >
          Definir un Leader
        </button>
      ) : (
        <p>il y a déjà un leader pour ce spot envoyez lui votre candidature</p>
      )}
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
