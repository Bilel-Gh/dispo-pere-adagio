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
import styled from "styled-components";

export const ButtonOrange = styled.button`
  background: #EB5B2D;
  border: 2px solid #EB5B2D;
  border-radius: 8px;
  color: #fff;
  margin-right: 15px;
  height: 40px;
  margin-top: 20px;
  font-family: "Poppins-Regular";
  &:hover {
    background: #fff;
    color: #EB5B2D;
    border: 2px solid #EB5B2D;
    cursor: pointer;
  }
`

export default function SetLeaderToSpot({ spotId, userLoged }) {
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
            <ButtonOrange onClick={() => setLeaderRandomlyToSpot(spotId)}>
              Assigner un leader au hasard
            </ButtonOrange>
          </>
        ) : (
          <>
            <p>Vous n&apos;êtes pas autorisé à assigner un leader</p>
          </>
        )
      ) : null }
    </div>
  );
}
