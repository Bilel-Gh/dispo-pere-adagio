import Head from "next/head";
import styled from 'styled-components'
import Header from '@/components/globalComponents/nav'
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import * as bcrypt from "bcryptjs";
import { useState } from "react";
import { useEffect } from "react";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const MySignup = styled.section`
  border: solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .form{
    width: 50%;
    border: solid blue;
  }
`

export default function Home({ jobs, emails, userConnected }) {
  const { data: session } = useSession();
  // console.log("session :", session);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const createUser = async (data) => {
    try {
      // fetch get one with query params
      const { email, password, firstname, lastname, phone, jobId } = data;
      await fetch("api/user/createUser", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      // redirect to sign with next-auth
      signIn({ email, password });
    } catch (error) {
      // toast error
      toast.error("Erreur lors de l'inscription", { autoClose: 5000 });
      throw new Error(error);
    }
  };

  const onSubmit = async (data) => {
    // map on emails to check if email already exists
    const emailExists = emails.find((email) => email.email === data.email);
    if (emailExists) {
      toast.error("Email déjà utilisé");
      return;
    }
    // hash password
    bcrypt.hash(data.password, 10, async function (err, hash) {
      try {
        toast.promise(
          createUser({
            ...data,
            password: hash,
            jobId: parseInt(data.jobId),
            phone: isNaN(phone) ? undefined : parseInt(data.phone),
          }),
          {
            loading: "Inscription en cours...",
            success: "Inscription reussi !",
            error: "Oops! Une erreur est survenue.",
          },
          {
            duration: 3000,
          }
        );
      } catch (error) {
        console.log("error :", error);
      }
    });
  };

  // console.log("userConnected FDSFQSDF:", userConnected);

  return (
    <div id='signup' className='section-signup'>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Pere Adagio, l'application qui permet aux artisans de colaborer entre eux facilement"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MySignup className='main'>
        {!session ? (
          <>
            <h1>Inscrivez vous !</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
              <div className='formInfo'>
                <p>
                  <label>nom : </label>
                  <input
                    type="text"
                    id="nom"
                    {...register("lastname")}
                    required
                    placeholder="Votre nom"
                  />
                </p>
                <p>
                  <label>Prénom : </label>
                  <input
                    type="text"
                    id="prenom"
                    {...register("firstname")}
                    required
                    placeholder="Votre prénom"
                  />
                </p>
                <p>
                  <label>Email : </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    required
                    placeholder="Votre adresse Email"
                  />
                </p>
                <p>
                  <label>Numéro de téléphone : </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    placeholder="06-xx-xx-xx-xx"
                    pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                  />
                </p>
                <p>
                  <label>Mot de passe : </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    required
                    placeholder="Mot de passe"
                  />
                </p>
                <p>
                  <label>Metier : </label>
                  <select {...register("jobId")}>
                    {jobs.map((job, index) => (
                      <option key={index} value={job.id}>
                        {job.name}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
              <button className='btn' type="submit">
                Submit
              </button>
              <Toaster />
            </form>
          </>
        ) : (
          <>
            <h1> Bienvenue !</h1>
          </>
        )}
        {session ? (
          <>
            Vous etes connecté en temps que {userConnected.firstname} <br /><br />
            <button onClick={() => signOut()}>Déconnexion</button>
          </>
        ) : (
          <>
            Connectez vous <br /><br />
            <button onClick={() => signIn()}>Connexion</button>
          </>
        )}
      </MySignup>
    </div>
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  // if session is not null, user is connected

  const userConnected = await prisma.user.findUnique({
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
    },
  });
  const jobs = await prisma.job.findMany();
  const emails = await prisma.user.findMany({
    select: {
      email: true,
    },
  });
  return {
    props: {
      jobs,
      emails,
      // if session is not null, user is connected
      userConnected: session ? userConnected : null,
    },
  };
};
