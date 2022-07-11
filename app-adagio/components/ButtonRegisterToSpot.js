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
import SetLeaderToSpot from "./SetLeaderToSpot";
import { ButtonOrange } from "./SetLeaderToSpot";
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

export default function ButtonRegisterToSpot({ spotId, userLoged }) {
  console.log("spotId___--", spotId);
  const [usersOnSpot, setUsersOnSpot] = useState([]);
  const isUserOnSpot = async (spotId) => {
    spotId ? (
    axios.post(`/api/userOnSpot/isUserOnSpot`, {
          userId: userLoged.id,
          spotId: spotId,
      }).then(res => {
          setUsersOnSpot(res.data);
      }
      ).catch(err => {
          console.log("err", err);
          toast.error("erreur lors de la recherche de l'utilisateur");
      }
      )
    ) : (
      console.log("no spotId")
    )
  }
  isUserOnSpot(spotId);

  // console.log("usersOnSpot_________:", usersOnSpot);

  return (
    <div className={styles.container}>
      {userLoged ? (
        !usersOnSpot ? (
        <div>
          <ButtonOrange
            onClick={() => {
              axios.post(`/api/userOnSpot/createUserOnSpot`, {
                userId: userLoged.id,
                spotId: spotId,
              });
              // then reload page
              window.location.reload();
              // toast success
              toast.success("Inscription réussi", {
                autoClose: 5000,
              });
            }}
          >
            S&apos;inscrire sur ce spot
          </ButtonOrange>
        </div>
        ) : (          <SetLeaderToSpot
          userId={userLoged.id}
          userLoged={userLoged}
          spotId={spotId}
        />)
      ) : (
        <div>
          <p>Vous devez vous connecter pour s&apos;inscrire sur ce spot</p>
          <ButtonOrange onClick={() => signIn()}>Connexion</ButtonOrange>
        </div>
      )}
    </div>
  );
}
