import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

export default function UserOnSpot({ id }) {
//   const { data: session } = useSession();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    // get all spots
    const getAllSpots = () => { 
        axios.get(`/api/userOnSpot/${id}`)
        .then(res => {
            setUsers(res.data);
        })
    }
    getAllSpots();
}, [id]);


 console.log("DATA10:", users);

  return (
    <div className={styles.container}>
      <p>
        {users.map(user => (
          <div key={user.id}>
            <p>{user.email}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

// export const getServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });
//   // if session is not null, user is connected

//   const userConnected = await prisma.user.findUnique({
//     where: {
//       // if session is not null, user is connected
//       id: session ? parseInt(session.id) : 0,
//     },
//     select: {
//       id: true,
//       firstname: true,
//       lastname: true,
//       email: true,
//       phone: true,
//       jobId: true,
//       createdAt: false,
//     },
//   });

//   return {
//     props: {
//       // if session is not null, user is connected
//       userConnected: session ? userConnected : null,
//     },
//   };
// };
