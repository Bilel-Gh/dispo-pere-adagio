import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import prisma from "/lib/prisma";
import Card from '@/components/globalComponents/cardSpot'
import { MyMain, HeaderBlue, MySignupForm, ItemContainner, MyItem} from "./../events";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const AllSpots = styled.section`
  padding: 30rem 0 0;
  display: flex;
  width: 90%;
  margin: 0 auto;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`
export const MyMainLoading = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading-container {
    width: 80%;
    height: 75vh;
    width: 80%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }
`

export default function Spot({ events}) {
  const router = useRouter();
  const session = useSession();
  // get userConnected from localStorage
  const [userConnected, setUserConnected] = useState(
    
    useEffect(() => {
      if (!session || session.data == null) {
        router.push("/accueil");
      } else {
        var user = JSON.parse(
          window.localStorage.getItem("userConnected")
        );
        setUserConnected(user);
        
        const getAllSpots = () => { 
          axios.get("/api/spot/getAllSpots")
          .then(res => {
              setSpots(res.data);
          })
        }
        getAllSpots();
      }
  }, [router, session])
  );

  const [spots, setSpots] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

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
    session && session.data != null  ? (
      <>
      <HeaderBlue>
          <h1>les stands</h1>
          <p className="p1">disponibles</p>
      </HeaderBlue>
      <div className='container'>
        <AllSpots className='main'>
        {spots.map((spot, index) => (
          <Link href={`/spots/${spot.id}`} key={index}>
          <a>
            <Card
              name={spot.name}
              descr={spot.description}
              place={spot.address}
              img={spot.image}
            />
            </a>
          </Link>
        ))}
          
        </AllSpots>

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
              <div className="btnContainer">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </MySignupForm>
      </div>
      </>
     ) : (
      // loadin page
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
