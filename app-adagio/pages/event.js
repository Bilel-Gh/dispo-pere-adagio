import Head from 'next/head';
import styles from "../styles/Home.module.css";
import axios from "axios";
import EventCard from "../components/EventCard";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";

const Event = ({events}) =>{
const [eventss, setEvent] = useState([]);
const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
} = useForm();

useEffect(() => {
    const getAllEvent = () => { 
        axios.get("/api/event/getAllEvent")
        .then(res => {
            setEvent(res.data);
            console.log(res.data);

            
        })
    }
    getAllEvent();
    }, []);

    const onSubmit = async (data) => {
        try {
          toast.promise(
              createEvent({
              ...data,
              //spotId: parseInt(data.spotId),
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
        } catch (error) {
          console.log("error :", error);
        }
    };
    return (
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
                <h1>Events</h1>
                <ul>
                {eventss?.map(event => (
                    <>
                    <p>{event.name}</p>
                    </>
                    
                ))}
                </ul>

                <h2>Create an Event</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            Name:
                            <input 
                                type="text"
                                id="nom"
                                {...register("name")}
                                required
                                placeholder="Nom de l'évenement"
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
                            Date de Fin:
                            <input 
                                type="date"
                                id="dateEnd"
                                {...register("dateEnd")}
                                required
                                placeholder="Date de fin"
                            />
                        </label>
                    <button type="submit">Submit</button>
                </form>
        </main>
    //</div>    
    )
}                
export default Event;

/*<label>
                        spotId:
                            <select {...register("spotId")}>
                                {spots.map((spots, index) => (
                                <option key={index} value={spots.id}>
                                    {spots.name}
                                </option>
                                ))}
                            </select>
                            <EventCard key={event.id} events = {event}/>
                        </label>*/