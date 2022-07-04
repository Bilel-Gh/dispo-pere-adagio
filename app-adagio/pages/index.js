import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { getSession, useSession, signIn, signOut } from "next-auth/react"
import * as bcrypt from 'bcryptjs';
import { useState } from 'react';
import { useEffect } from 'react';
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export default function Home({jobs, emails, userConnected}) {
  const { data: session } = useSession()
  console.log('session :', session);
  const { register, handleSubmit, formState: { errors, isSubmitted },} = useForm();
  
  const createUser = async (data) => {
    try {
      // fetch get one with query params
      const { email, password, firstname, lastname, phone, jobId } = data;
      fetch('api/createUser', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      console.log('data :', data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const onSubmit = async (data) => {
    // map on emails to check if email already exists
    const emailExists = emails.find(email => email.email === data.email);
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
          })
        )
      } catch (error) {
        console.log('error :', error);
      }
    });

  };

  console.log('userConnected FDSFQSDF:', userConnected);

  // if (session) {
  //   const getUserConnected = async () => {
  //     try {
  //       const userId = parseInt(session.id);
  //       const response = await fetch(`api/user/${userId}`);
  //       var data = await response.json();
  //       showUserConnected(data);

  //     } catch (error) {
  //       console.log('error :', error);
  //     }
  //   };
  //   const showUserConnected = (data) => {
  //       return data.firstname;
  //   }
  // };
        

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Pere Adagio, l'application qui permet aux artisans de colaborer entre eux facilement" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1>Inscrivez vous !</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formInfo}>
                <p>
                    <label>nom : </label>
                    <input type="text" id="nom" {...register("lastname")} required placeholder='Votre nom'/>
                </p>
                <p>
                    <label>Prénom : </label>
                    <input type="text" id="prenom" {...register("firstname")} required placeholder='Votre prénom'/>
                </p>
                <p>
                    <label>Email : </label>
                    <input type="email" id="email" {...register("email")} required placeholder='Votre adresse Email' />
                </p>
                <p>
                    <label>Numéro de téléphone : </label>
                    <input type="tel" id="phone"  {...register("phone")} placeholder="06-xx-xx-xx-xx" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" />
                </p>
                <p>
                    <label>Mot de passe : </label>
                    <input type="password" id="password" {...register("password")} required placeholder='Mot de passe' />
                </p>
                <p>
                    <label>Metier : </label>
                    <select {...register("jobId")}>
                      { 
                        jobs.map((job, index) => (
                          <option key={index} value={job.id}>{job.name}</option>
                        ))
                      }
                    </select>
                </p>
                
            </div>
            <button className={styles.btn} type="submit">Submit</button>
            <Toaster />
        </form>
        {
          session ? (
            <>
              Signed in as {userConnected.firstname} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </> ) 
            : (   
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </> 
          )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export const getServerSideProps = async ({req}) => {
  const session = await getSession({req})
  const userConnected = await prisma.user.findUnique({
    where: {
      id: parseInt(session.id)
    },
    select: {
      id: true,
      firstname: true,
      createdAt: false,
    },
  })
  const jobs = await prisma.job.findMany();
  const emails = await prisma.user.findMany({
    select: {
      "email": true,
    }
  });
  return {
      props: {
          jobs,
          emails,
          userConnected,
      },
  }

}