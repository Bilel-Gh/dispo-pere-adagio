import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
// import * as bcrypt from "bcryptjs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import prisma from "/lib/prisma";

import UserOnSpot from "../components/UserOnSpot";
import SetLeaderToSpot from "../components/SetLeaderToSpot";

export default function Spot({ userConnected, events}) {
  const { data: session } = useSession();
  // console.log("session :", session);
  const [spots, setSpots] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

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

    // create spot fonction
    const createSpot = async (data) => {
        try {
          // fetch get one with query params
          const { name, adresse, eventId } = data;
          await fetch("api/spot/createSpot", {
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
          // redirect to sign with next-auth
        } catch (error) {
          // toast error
          toast.error("Erreur lors de l'inscription", { autoClose: 5000 });
          throw new Error(error);
        }
      };
    // au moment de valider de formulaire pour creer un spot
    const onSubmit = async (data) => {
          try {
            toast.promise(
                createSpot({
                ...data,
                eventId: parseInt(data.eventId),
              }),
              {
                loading: "Creation en cours...",
                success: "Création reussi !",
                error: "Oops! Une erreur est survenue.",
              },
              {
                duration: 3000,
              }
            );
            // then reload the page
            window.location.reload();
          } catch (error) {
            console.log("error :", error);
          }
      };

      // const registerUserToSpot = async (spotId) => {
      //   try { 
      //     axios.post(`/api/userOnSpot/getRandomUserOnSpot`, {
      //       spotId: spotId,
      //   }).then(res => {
      //       const randomedID = res.data.id;
      //       console.log("randomedID", randomedID);
      //       axios.post(`/api/userOnSpot/accepteFirstUserToSpot`, {
      //           userId: randomedID,
      //       })
      //       toast.success(`${res.data.spotStatus} ${res.data.firstname}`, {
      //         autoClose: 5000,
      //       });
      //       window.location.reload();
      //   }
      //   )
      //   } catch (error) { 
      //     // toast error
      //     toast.error("Erreur lors de l'inscription", { autoClose: 5000 });
      //   }
      // }

      // const isOneLeaderInSpot = (userId, spotId) => {
      //   axios.get(`/api/userOnSpot/${spotId}`)
      //   .then(res => {
      //     // chercher si un utilisateur a la propriété spotStatus a FIRSTACCEPTED
      //     const isOneLeader = res.data.find(user => user.userId === userId && user.spotStatus === "FIRSTACCEPTED");
          
      //     console.log("isOneLeader", isOneLeader, res.data);

      //       setUsers(res.data);
      //   })

      // }



  // console.log("userConnected FDSFQSDF:", userConnected);

  return (  
    // is user connected ? 
    userConnected ? (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta
            name="description"
            content="Pere Adagio, l'application qui permet aux artisans de colaborer entre eux facilement"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          {spots.map((spot, index) => (
              <div key={index}>
                  <h1>{spot.name}</h1>
                  {spot.users.length > 0 ? (
                    <UserOnSpot id={spot.id}/>
                  ) : (
                  <p>Aucun utilisateur sur ce spot</p>
                  )}
                  {/* button s'inscrire sur ce spot */}
                  {userConnected ? (
                  <div>
                  <button
                      onClick={() => {
                          axios.post(`/api/userOnSpot/createUserOnSpot`, {
                              userId: userConnected.id,
                              spotId: spot.id,
                          });
                          // then reload page
                          window.location.reload();
                          // toast success
                          toast.success("Inscription réussi", {
                              autoClose: 5000,
                          });
                      }
                      }
                  >
                      S&apos;inscrire sur ce spot
                  </button>
                    <SetLeaderToSpot userId={userConnected.id} spotId={spot.id}/>
                  {/* si dans spot.user aucun user n'a un spotStatus à FIRSTACCEPTED */}
                  {/* {spot.users.length > 0 && spot.users.filter(user => user.spotStatus === "FIRSTACCEPTED").length === 0 ? (
                    
                      <button
                          onClick={() => {
                              registerUserToSpot(spot.id);
                          }
                          }
                      >
                          S&apos;inscrire sur ce spot
                      </button>
                  ) 
                  : (
                      <p>il y a déjà un leader pour ce spot envoyez lui votre candidature</p>
                  )} */}
                  {/* // on click register first user to spot randomly */}
                  {/* <button onClick={() => { registerUserToSpot(spot.id) }} >
                    Definir un admin
                  </button>  */}
                  </div>
                  ) : (
                    <div>
                      <p>Vous devez vous connecter pour s&apos;inscrire sur ce spot</p>
                      <button onClick={() => signIn()}>Connexion</button>
                    </div>
                  )}
                  
              </div>
          ))}
          <Toaster />
          <br /><br />
          <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                  Name:
                  <input 
                      type="text"
                      id="nom"
                      {...register("name")}
                      required
                      placeholder="Nom du spot"
                  />
              </label>
              <label>
                  Adresse:
                  <input 
                      type="text"
                      id="adresse"
                      {...register("address")}
                      required
                      placeholder="Adresse du spot"
                  />
              </label>
              <label>
                  EventId:
                    <select {...register("eventId")}>
                      {events.map((event, index) => (
                        <option key={index} value={event.id}>
                          {event.name}
                        </option>
                      ))}
                    </select>
              </label>
              <button type="submit">Submit</button>
          </form>
        </main>
  
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
     ) : (
      <div>
        <h1>Vous devez vous connecter pour accéder à cette page</h1>
        <button onClick={() => signIn()}>Connexion</button>
      </div>
    )
)

};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  // if session is not null, user is connected
  const events = await prisma.event.findMany({
    include: {
        spots: true,
    },
});

  const userConnected = session ? await prisma.user.findUnique({
    where: {
      // if session is not null, user is connected
      id: session ? parseInt(session.id) : 0,
    },
    select: {
      id: true,
      firstname: true,
      lastname: true,
      email: true,
      phone: true,
      jobId: true,
      createdAt: false,
      role: true,
    },
  }) : null; 

  return {
    props: {
      // if session is not null, user is connected
      userConnected: session ? userConnected : null,
      events: JSON.parse(JSON.stringify(events)) ,
    },
  };
};
