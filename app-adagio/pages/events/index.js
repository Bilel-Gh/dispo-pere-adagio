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
import { MyMainLoading } from "pages/spots";
import { useRouter } from "next/router";

  // _________________________________________________________STYLES_________________________________________________________
   export const MyMain = styled.main`
    min-height: 100vh;
    padding: 35rem 0 0;
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
    gap: 25px;
    margin: 0 auto;
    justify-content: center;
    flex-wrap: wrap;
    div{
      display: flex; 
      flex-direction:column;
      label{
        font-family: 'Poppins-Regular';
        font-size: 14px;
        color: #333333;
      }
      input, select{
        width: 230px;
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
        color: #333333;
        text-align: center;
        font-size: 45px;
        margin: 0;
        text-transform: uppercase;
        font-family: "Fascinate-Regular";
      }
      .p1 {
          background: #fff;
          color: #333333;
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
              font-size: 45px;
              z-index: 1;
              text-shadow:none;
              color: #333333;
              width: fit-content;
              margin: 0;
              font-family: "BrittanySignature"!important;
              font-weight: normal;
              position: absolute;
              top: 55%;
              left: 47%;
              z-index: 0;
          }
      }
      @media (max-width: 900px) {
        h1{
            font-size: 40px!important;
        }
        .p1{
          font-size: 18px;
          width: 200px;
          height: 45px;
        }
      }
      @media (max-width: 600px) {
        h1{
            font-size: 35px!important;
        }
        .p1{
          font-size: 18px;
          width: 200px;
          height: 45px;
        }
      }
    `;

    export const ItemContainner = styled.div`
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 90%;
      .disabled {
        opacity: 20%;
        pointer-events: none;
      }
    `;

    export const MyItem = styled.div`
      width: 300px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background: #FDFCF3;
      border-radius: 10px;
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 15%);
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
      }

      img {
        width: 100%;
        height: 250px;
        border-radius: 16px;
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

      .eventStatusRemain {
        position: absolute;
        top: 0;
        background-color: #eb5b2dc9;
        color: white;
        right: 0;
        margin: 10px 15px 0 0;
        padding: 5px;
      }
    `;

export default function Events({ events}) {
  const router = useRouter();
  const session = useSession();

  // _________________________________________________________LOGIC_________________________________________________________
  const [userConnected, setUserConnected] = useState(
    useEffect(() => {
        var user = JSON.parse(
          window.localStorage.getItem("userConnected")
        );
        if (user == null) {
          router.push("/accueil");
        }
        setUserConnected(user);

            // get all spots
    // get all spots
        const getAllSpots = () => { 
            axios.get("/api/spot/getAllSpots")
            .then(res => {
                setSpots(res.data);
            })
        }
        getAllSpots();
  }, [router, session])
  );

  console.log("userConnected", userConnected);

  const [spots, setSpots] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
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
          toast.error("Erreur lors de la cr??ation de l'event", { autoClose: 5000 });
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
                success: "Cr??ation reussi !",
                error: "Oops! Une erreur est survenue.",
              },
              {
                duration: 3000,
              }
            ).then(() => {
            // then reload the page
              window.location.reload();
            }
            );
          } catch (error) {
            console.log("error :", error);
          }
      };

  return (
    // is user connected ?
    session && session.data != null ? (
      <>
        <HeaderBlue>
          <h1>les ??v??nements</h1>
          <p className="p1">disponibles</p>
        </HeaderBlue>
        {/* <div className="ABSOLUTE"> </div> */}
        <div className={styles.container}>

          <MyMain>
            <ItemContainner>
              {events.map((event, index) => (
                <Link href={`/spots/${event.id}`} key={index}>
                  <MyItem className="card-event">
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
                      Date de d??but:
                      <input
                        type="date"
                        id="dateStart"
                        {...register("dateStart")}
                        required
                        placeholder="Date de d??but"
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
                        placeholder="Date de d??but"
                      />
                    </label>
                  </div>
                  <div className="btnContainer">
                    <button className="btn" type="submit">
                      cr??er
                    </button>
                  </div>
                </div>
              </MySignupForm>
            ) : null}
          </MyMain>
        </div>
      </>
    ) : (
      <MyMainLoading>
      <div className="loading-container">
        <div className="main">
          <div className="loader">
            CHARGEMENT...
          </div>
        </div>
      </div>
    </MyMainLoading>
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
