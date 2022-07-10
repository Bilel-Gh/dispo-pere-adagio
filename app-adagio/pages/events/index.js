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
import styled from 'styled-components'

  // _________________________________________________________STYLES_________________________________________________________
   export const MyMain = styled.main`
    min-height: 100vh;
    padding: 25rem 0 0;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  export const MySignupForm = styled.form`
  padding: 30px 0px;
  .formInfo{
    display: flex;
    width: 80%;
    gap: 5%;
    margin: 0 auto;
    justify-content: center;
    align-items: flex-end;
    div{
      display: flex; 
      flex-direction:column;
      label{
        font-family: 'Poppins-Regular';
        font-size: 14px;
        color: #333333;
      }
      input, select{
        width: 200px;
        height: 44px;
        border: transparent;
        background-color: #F4F4F5;
        border-radius: 10px;
        padding: 10px;
        color: #A1A1AA;
      }
    }
  }
  .btnContainer{
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
  }

  .conditions{
    font-family: 'Poppins-Regular';
    margin: 10px;
    span{
      /* font-family: 'Poppins-ExtraBold'; */
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media (max-width: 1320px) {
    .formInfo{
    width: initial;
    }

  }


  `

    export const HeaderBlue = styled.div`
      background: #00C2D1;
      position: absolute;
      height: 450px;
      width: 100%;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1{
        color: #000;
        text-align: center;
        font-size: 44px;
        margin: 0;
        font-family: "Fascinate-Regular";
      }
      .p1 {
          background: #fff;
          font-weight: bold;
          font-size: 20px;
          width: 215px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          &::after {
              content: "pour vous";
              text-transform: initial;
              font-size: 4vw;
              z-index: 1;
              text-shadow:none;
              color: #000;
              width: fit-content;
              margin: 0;
              font-family: "BrittanySignature";
              font-weight: normal;
              position: absolute;
              top: 53%;
              left: 47%;
          }
      }
    `;

    export const ItemContainner = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 80%;
      grid-gap: 25px;
    `;

    export const MyItem = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #FDFCF3;
      border-radius: 10px;
      /* add shadow */
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 15%);
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
      }

      img {
        width: 100%;
        height: 250px;
      }

      .p2 {
        align-self: start;
    margin: 0 0 0 35px;
    color: #333;
      }

      h2 {
        text-align: center;
      }

      .eventStatus {
        top: 0;
        font-weight: bold;
        color: #EB5B2D;
      }

      .description {
        padding: 5px 35px;
      }
    `;

export default function Events({ events}) {
  // console.log("events_____________", events);
  // get userConnected from localStorage

  // _________________________________________________________LOGIC_________________________________________________________
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
      <>
        <HeaderBlue>
          <h1>les événements</h1>
          <p className="p1">disponibles</p>
        </HeaderBlue>
        {/* <div className="ABSOLUTE"> </div> */}
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
              {events.map((event, index) => (
                <Link href={`/spots/${event.id}`} key={index}>
                  <MyItem>
                    <img src={event.image} alt="event" />
                    <h2>{event.name}</h2>
                    <p className="description">{event.description}</p>
                    <p className="p2">
                      du {event.dateStart} au {event.dateEnd}
                    </p>
                      {
                        // if event has no spots
                        event.spots.length === 0 ? (
                          <p className="eventStatus">Aucun spot pour l`instant</p>
                        ) : (
                          <p className="eventStatus">{event.spots.length} spots</p>
                        )
                      }
                  </MyItem>
                </Link>
              ))}
            </ItemContainner>
            <Toaster />
            <br />
            <br />
            {userConnected ? (
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
                        placeholder="Nom de l'event"
                      />
                    </label>
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div className="btnContainer">
                    <button className="btn" type="submit">
                      créer
                    </button>
                  </div>
                </div>
              </MySignupForm>
            ) : null}
          </MyMain>
        </div>
      </>
    ) : (
      <div>
        <h1>Vous devez vous connecter pour accéder à cette page</h1>
        <button onClick={() => signIn()}>Connexion</button>
      </div>
    )
  );

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
