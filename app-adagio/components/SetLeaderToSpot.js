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

export default function SetLeaderToSpot({ spotId, userLoged }) {
  // console.log("userLoged:", userLoged);
  // console.log("spotId SetLeaderToSpot:", spotId );
  // const [userConnected, setUserConnected] = useState();
  //   useEffect(() => {
  //     var userConnected = JSON.parse(
  //       window.localStorage.getItem("userConnected")
  //     );
  //     // if userConnected is null, redirect to sign in
  //     if (userConnected === null) {
  //       window.location.href = "/signin";
  //     }
  //     setUserConnected(userConnected);
  // }, [])
  const [usersOnSpotStatus, setUsersOnSpotStatus] = useState([]);
  const statusOfUser = async (spotId) => {
    spotId ? (
    axios.post(`/api/userOnSpot/getStatusOfOneUserOnSpot`, {
          userId: userLoged.id,
          spotId: spotId,
      }).then(res => {
          setUsersOnSpotStatus(res.data);
      }
      ).catch(err => {
          console.log("err", err);
          toast.error("pas de status pour cet utilisateur");
      }
      )
    ) : (
      console.log("no spotId")
    )
  }
  statusOfUser(spotId);
  console.log("statusOfUser_________:", usersOnSpotStatus);

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
      { !isOneLeaderInSpot() && userLoged != undefined ? (
        userLoged.role === "ADMIN" ? (
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
        userLoged && usersOnSpotStatus != "LEADER" ? (
          <button>
            Vous netes pas leader
          </button>
        ) : (
          <button>
            tu est un leader
          </button>
        )
      )}
    </div>
  );
}
