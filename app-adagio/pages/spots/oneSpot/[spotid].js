import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
// import * as bcrypt from "bcryptjs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserOnSpot from "../../../components/UserOnSpot";
import SetLeaderToSpot from "../../../components/SetLeaderToSpot";
import ButtonRegisterToSpot from "../../../components/ButtonRegisterToSpot";
import { MyMain, MySignupForm, HeaderBlue, ItemContainner, MyItem} from "../../events";
import styled from "styled-components";

export const ButtonBack = styled.div`
    position: absolute;
    bottom: -65px;
    left: 30px;
    .btn{
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    display: flex;
    text-transform: uppercase;
    padding: 10px 35px;
    align-items: center;
    justify-content: center; 
    font-family: "Poppins-ExtraBold";
    justify-content: center;
    /* width:100% ; */
    font-weight:'bold';
    background: #EB5B2D;
    color: #FFFFFF;
    border: 2px solid #EB5B2D;
    &:hover{
        background-color:#FFFFFF; 
        color:#EB5B2D; 
    }
  }
  `;

export default function Event({  }) {
      const router = useRouter();
      const [userConnected, setUserConnected] = useState(
          useEffect(() => {
            var user = JSON.parse(
              window.localStorage.getItem("userConnected")
            );
            setUserConnected(user);
        }, [])
        );
    
      const [spot, setSpot] = useState([]);
      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
      } = useForm();
    
      useEffect(() => {
        // get all spots
        const getOneSpot = () => { 
            const spotId = router.query.spotid;
            axios.get(`/api/spot/${spotId}`)
            .then(res => {
                setSpot(res.data);
            })
        }
        getOneSpot();
        }, [router.query]);

        console.log(spot);
    
      return (  
        // is user connected ? 
        userConnected ? (
          <>
          <HeaderBlue>
            <h1>votre stand</h1>
            <p className="p1">{spot.name}</p>
            <ButtonBack>
              <button className='btn' onClick={() => router.back()}>Retour</button>
            </ButtonBack>
          </HeaderBlue>
          <div className={styles.container}>
            <Head>
              <title>Create Next App</title>
              <meta
                name="description"
                content="Pere Adagio, l'application qui permet aux artisans de colaborer entre eux facilement"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
      
            <MyMain>
              <ItemContainner> 
                  <MyItem>
                          <h1>{spot.name}</h1>
                          {spot.users?.length > 0 ? (
                            <UserOnSpot userLoged={userConnected} spotId={spot.id} id={spot.id}/>
                          ) : (
                          <p>Aucun utilisateur sur ce spot</p>
                          )}
                            <ButtonRegisterToSpot spotId={spot.id} userLoged={userConnected} />
                    </MyItem>
              </ItemContainner>
              <Toaster />
            </MyMain>
      
            <footer className={styles.footer}>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{" "}
                <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
              </a>
            </footer>
          </div>
          </>
         ) : (
          <div>
            <h1>Vous devez vous connecter pour accéder à cette page</h1>
            <button onClick={() => signIn()}>Connexion</button>
          </div>
        )
    )
}