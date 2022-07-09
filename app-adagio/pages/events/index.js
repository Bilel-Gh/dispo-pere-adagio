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

export default function Events({ events}) {
  // console.log("events_____________", events);
  // get userConnected from localStorage
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
        axios.get("/api/spot/getAllSpots")
        .then(res => {
            setSpots(res.data);
        })
    }
    getAllSpots();
    }, []);

    // create spot fonction
    const createEvent = async (data) => {
        try {
          // fetch get one with query params
          await fetch("api/event/createEvent", {
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
          // redirect to sign with next-auth
        } catch (error) {
          // toast error
          toast.error("Erreur lors de la création de l'event", { autoClose: 5000 });
          throw new Error(error);
        }
      };
    // au moment de valider de formulaire pour creer un spot
    const onSubmit = async (data) => {
          try {
            toast.promise(
              createEvent(data),
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
          {events.map((event, index) => (
            <Link href={`/spots/${event.id}`} key={index}>
              <div>
                  <h1>{event.name}</h1>
                  {event.spots.map((spot, index) => (
                      <p key={index}>{spot.name}</p>
                  ))} 
              </div>
            </Link>
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
                      placeholder="Nom de l'event"
                  />
              </label>
              <label>
                  Date de début:
                    <input
                        type="date"
                        id="dateStart"
                        {...register("dateStart")}
                        required
                        placeholder="Date de début"
                    />
              </label>
              <label>
                  Date de fin:
                    <input
                        type="date"
                        id="dateEnd"
                        {...register("dateEnd")}
                        required
                        placeholder="Date de début"
                    />
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
