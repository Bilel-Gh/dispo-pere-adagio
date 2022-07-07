import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import * as bcrypt from "bcryptjs";
import { useState } from "react";
import { useEffect } from "react";
import prisma from '/lib/prisma'

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
        {!session ? (
          <>
            <h1>Inscrivez vous !</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formInfo}>
                <div>
                  <label>nom : </label>
                  <input
                    type="text"
                    id="nom"
                    {...register("lastname")}
                    required
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label>Prénom : </label>
                  <input
                    type="text"
                    id="prenom"
                    {...register("firstname")}
                    required
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label>Email : </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    required
                    placeholder="Votre adresse Email"
                  />
                </div>
                <div>
                  <label>Numéro de téléphone : </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    placeholder="06-xx-xx-xx-xx"
                    pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                  />
                </div>
                <div>
                  <label>Mot de passe : </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    required
                    placeholder="Mot de passe"
                  />
                </div>
                <div>
                  <label>Metier : </label>
                  <select {...register("jobId")}>
                    {jobs.map((job, index) => (
                      <option key={index} value={job.id}>
                        {job.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button className={styles.btn} type="submit">
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
      role: true,
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
