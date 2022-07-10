import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
//const { PrismaClient } = require("@prisma/client");
//const prisma = new PrismaClient();

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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Pere Adagio, l'application qui permet aux artisans de colaborer entre eux facilement"
        />
        <link rel="icon" href="/favicon.ico" />

        <script
            dangerouslySetInnerHTML={{
              __html: `
              window.axeptioSettings = {
                  clientId: "62b2d68254bf6310d9d3c8f0",
                };
                 
                (function(d, s) {
                  var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                  e.async = true; e.src = "//static.axept.io/sdk.js";
                  t.parentNode.insertBefore(e, t);
                })(document, "script");
          `,
            }}
          />
      </Head>

      <main className={styles.main}>
        {!session ? (
          <>
            <h1>Inscrivez vous !</h1>
            <Link href="/login">
              <button className={styles.btn} type="submit">
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
            <button onClick={() => signOut()}>Déconnexion</button>
          </>
        ) : (
          <>
            Connectez vous <br />
            <br />
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

/*export const getServerSideProps = async ({ req }) => {
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
//};
*/
