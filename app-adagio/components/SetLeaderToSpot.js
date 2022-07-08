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
  const [userConnected, setUserConnected] = useState();
    useEffect(() => {
      var userConnected = JSON.parse(
        window.localStorage.getItem("userConnected")
      );
      setUserConnected(userConnected);
  }, [])

  // const valueUser = userConnected?.spots.find(spot => spot.id === spotId).then(res => {
  //   console.log("valueUser:", res);
  //   return res;
  // }
  // );

  // userConnected ? console.log("USERCONNECTED SETLEADER:", valueUser ) : console.log("USERCONNECTED SETLEADER:", "pas de USER");

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
      const randomedID = res.data.id; // ----> id de l'utilisateur tiré au hasard
      axios.post(`/api/userOnSpot/setLeaderToSpot`, {
          userId: randomedID,
          spotId: spotId,
      }).then(res => {
          toast.success("L'utilisateur a été accepté");
          window.location.reload();
      }
      ).catch(err => {
          console.log("err", err);
          toast.error("Erreur lors de l'acceptation de l'utilisateur");
      }
      )

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
  const isOneLeader = usersOnSpotData.find(userOnSpotData => userOnSpotData.userStatus === "LEADER");
  if (isOneLeader) {
    return true;
  }
  return false;
}

//  console.log("DATA10:", users);

  return (
    <div className={styles.container}>
      {/* { !isOneLeaderInSpot() && userConnected ? (
        userConnected.role === "ADMIN" ? (
          <>
            <button onClick={() => setLeaderRandomlyToSpot(spotId)}>
              Assigner un leader au spot
            </button>
          </>
        ) : (
          <>
            <p>Vous n&apos;êtes pas autorisé à assigner un leader</p>
          </>
        )
      ) : (
        userConnected && userConnected.spots.find(spot => spot.id === spotId).userStatus != "LEADER" ? (
          <button>
            Posez votre candidature
          </button>
        ) : (
          <button>
            tu est un leader
          </button>
        )
      )} */}
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
