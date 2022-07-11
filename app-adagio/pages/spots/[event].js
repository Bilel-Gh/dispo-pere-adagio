import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
// import * as bcrypt from "bcryptjs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import prisma from "/lib/prisma";
import UserOnSpot from "../../components/UserOnSpot";
import SetLeaderToSpot from "../../components/SetLeaderToSpot";
import ButtonRegisterToSpot from "../../components/ButtonRegisterToSpot";
import { MyMain, MySignupForm, HeaderBlue, ItemContainner, MyItem} from "./../events";
import { ButtonBack } from "../spots/oneSpot/[spotid]";


export default function Event({ events }) {
      const router = useRouter();
      const [userConnected, setUserConnected] = useState(
          useEffect(() => {
            var user = JSON.parse(
              window.localStorage.getItem("userConnected")
            );
            setUserConnected(user);
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
            const eventId = router.query.event;
            axios.get(`/api/spot/getAllSpotsByEventId/${eventId}`)
            .then(res => {
                setSpots(res.data);
            })
        }
        getAllSpots();
        }, [router.query]);
    
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
          <>
          <HeaderBlue>
            <h1>les stands</h1>
            <p className="p1">disponibles</p>
            <ButtonBack>
              <button className='btn' onClick={() => router.back()}>Retour</button>
            </ButtonBack>
          </HeaderBlue>
          <div className={styles.container}>
            <MyMain>
              <ItemContainner> 
                  {spots.map((spot, index) => (
                    <Link key={index} href={`/spots/oneSpot/${spot.id}`}>
                      {/* if 10 - spot.user.length == 0 className MyItem disabled*/}
                      <MyItem className={
                          (10 - spot.users.length) == 0
                            ? "card-spot disabled"
                            : "card-spot"
                        }>
                          <img src={spot.image} alt="event" />
                          <h2>{spot.name}</h2>
                          <p className="description">{spot.description}</p>
                          <p>{spot.address}</p>
                          <p className="eventStatus">{spot.users.length} inscrits </p>
                          <p className="eventStatusRemain"> 
                            {/* if spot.user.length > 0 */}
                            {(10 - spot.users.length) > 0 ? (
                              <>
                                {10 - spot.users.length} places restantes
                              </>
                            ) : (
                              <>
                                complet
                              </>
                            )}
                          </p>
                      </MyItem>
                    </Link>
                  ))}
              </ItemContainner>
              <Toaster />
              <br /><br />
              <MySignupForm onSubmit={handleSubmit(onSubmit)}>
                <div className="formInfo"> 
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div className='btnContainer'>
                      <button className='btn' type="submit">
                        créer
                      </button>
                  </div>
                </div>
              </MySignupForm>
            </MyMain>
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