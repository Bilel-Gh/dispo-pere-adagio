import Head from "next/head";
import Landing from '@/components/landing'
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function Home({ userConnected }) {
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
        <title>Create Next App</title>
        <meta
          name="description"
          content="Pere Adagio, l'application qui permet aux artisans de colaborer entre eux facilement"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing/>

      
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

  return {
    props: {
      // if session is not null, user is connected
      userConnected: session ? userConnected : null,
    },
  };
};
