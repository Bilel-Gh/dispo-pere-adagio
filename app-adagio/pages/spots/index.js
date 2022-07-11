import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import prisma from "/lib/prisma";
import { useRouter } from "next/router";
import UserOnSpot from "../../components/UserOnSpot";
import ButtonRegisterToSpot from "../../components/ButtonRegisterToSpot";

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
      <div className='container'>
        <main className='main'>
          {spots.map((spot, index) => (
              <div key={index}>
                  <h1>{spot.name}</h1>
                  {spot.users.length > 0 ? (
                    <UserOnSpot userLoged={userConnected} spotId={spot.id} id={spot.id}/>
                  ) : (
                  <p>Aucun utilisateur sur ce spot</p>
                  )}
                  {/* button s'inscrire sur ce spot */}
                    <ButtonRegisterToSpot spotId={spot.id} userLoged={userConnected} />
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
     ) : null
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
