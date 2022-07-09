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

export default function Spot({ events}) {
  // get userConnected from localStorage
  const [userConnected, setUserConnected] = useState(
    useEffect(() => {
      var userConnected = JSON.parse(
        window.localStorage.getItem("userConnected")
      );
      setUserConnected(userConnected);
  }, [])
  );

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

  return (  
    // is user connected ? 
    userConnected ? (
      <div className='container'>
        <main className='main'>
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
  // if session is not null, user is connected
  const events = await prisma.event.findMany({
    include: {
        spots: true,
    },
});

  return {
    props: {
      // if session is not null, user is connected
      // userConnected: session ? userConnected : null,
      events: JSON.parse(JSON.stringify(events)) ,
    },
  };
};
