import Head from "next/head";
import Landing from '@/components/landing'
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import prisma from '/lib/prisma'

export default function Home({ userConnected }) {
  // put userConnected 
  if (typeof window !== "undefined") {
    // Client-side-only code
    window.localStorage.setItem("userConnected", JSON.stringify(
      { ...userConnected, password: undefined }
    ));
  }
  const { data: session } = useSession();
  // console.log("session :", session);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  // console.log("userConnected FDSFQSDF:", userConnected);

  return (
    <div className='container'>
      <Head>
      
      </Head>
      <Landing/>

      {/*<main className='main'>
        {!session ? (
          <>
            <h1>Inscrivez vous !</h1>
            <Link href="/login">
              <button className='btn' type="submit">
                {"s'inscrire"}
              </button>
            </Link>{" "}
            <br />
          </>
        ) : (
          <>
            <h1> Bienvenue !</h1>
          </>
        )}
        {session ? (
          <>
            Vous etes connecté en temps que {userConnected.firstname} <br />
            <br />
            button go to /spot 
            <Link href="/spot">
              <button className='btn'>
                {"aller sur les spots"}
              </button>
            </Link>{" "}
            <br />
             button logout 
            <button onClick={() => signOut()}>Déconnexion</button>
          </>
        ) : (
          <>
            Connectez vous <br />
            <br />
            <button onClick={() => signIn()}>Connexion</button>
          </>
        )}
        </main> */}
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
    include: {
        spots: true,
    },
  });

  // console.log("userConnected INDEX:", userConnected);
  return {
    props: {
      // if session is not null, user is connected
       userConnected: session ? userConnected : null,
    },
  };
};
