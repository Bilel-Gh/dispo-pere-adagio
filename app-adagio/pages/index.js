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
