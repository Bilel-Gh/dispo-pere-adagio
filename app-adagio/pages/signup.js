import styled from 'styled-components'
import Header from '@/components/globalComponents/nav'
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import * as bcrypt from "bcryptjs";
import { useState } from "react";
import { useEffect } from "react";
import prisma from '/lib/prisma'
import Link from "next/link";



const MySignup = styled.section`
  padding: 110px 30px 30px 30px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: linear-gradient(to right, #FDFCF3 65%, #F195BA 0); */
  .mainInscription{
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    .title{
      font-family: 'Poppins-ExtraBold';
      color: #333333;
      text-align: center;
      font-size: 44px;
      margin: 0;
    }
    .text{
      font-family: 'Poppins-Regular';
      font-size: 14px;
      text-align: center;
      width: 80%;
    }
  }
  .mainConnexion{
    /* width: 65%; */
  }
`
const MySignupForm = styled.form`
  padding: 30px 0px;
  .formInfo{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    gap: 5%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    p{
      display: flex; 
      flex-direction:column;
      label{
        font-family: 'Poppins-Regular';
        font-size: 14px;
        color: #333333;
      }
      input, select{
        width: 350px; 
        height: 44px;
        border: transparent;
        background-color: #F4F4F5;
        border-radius: 10px;
        padding: 10px;
        color: #A1A1AA;
      }
    }
  }
  .btnContainer{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    .btn{
    position: relative;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    display: flex;
    text-transform: uppercase;
    padding: 15px;
    align-items: center;
    justify-content: center; 
    font-family: "Poppins-ExtraBold";
    justify-content: center;
    /* width:100% ; */
    font-weight:'bold';
    background: #EB5B2D;
    color: #FFFFFF;
    border: 2px solid #EB5B2D;
    &:hover{
        background-color:#FFFFFF; 
        color:#EB5B2D; 
    }
  }
  }
  
  .conditions{
    font-family: 'Poppins-Regular';
    margin: 10px;
    a{
      /* font-family: 'Poppins-ExtraBold'; */
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media (max-width: 1320px) {
    .formInfo{
    width: initial;
    }
  }


`

export default function Home({ jobs, emails }) {
  const [userConnected, setUserConnected] = useState(
    useEffect(() => {
      var user = JSON.parse(
        window.localStorage.getItem("userConnected")
      );
      setUserConnected(user);
  }, [])
  );
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  // console.log('userConnected', userConnected)
  // console.log('session', session)

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

  return (
    <div id='signup' className='section-signup'>
      <MySignup className='main'>
        {!session ? (
          <div className='mainInscription'>
            <h1 className='title'>Inscrivez vous !</h1>
            <p className='text'>
              Rejoignez la communauté du Père Adagio et obtenez un accès 
              à l’intrégalité des services et commencer à vous reinventez !
            </p>
            <MySignupForm onSubmit={handleSubmit(onSubmit)} className='form'>
              <div className='formInfo'>
                <p>
                  <label>Prénom</label>
                  <input
                    type="text"
                    id="prenom"
                    {...register("firstname")}
                    required
                    placeholder="Tapez votre prénom ici"
                  />
                </p>
                <p>
                  <label>Nom : </label>
                  <input
                    type="text"
                    id="nom"
                    {...register("lastname")}
                    required
                    placeholder="Tapez votre nom ici"
                  />
                </p>
                <p>
                  <label>Email : </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    required
                    placeholder="Adresse mail"
                  />
                </p>
                <p>
                  <label>Numéro de téléphone : </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    placeholder="06..."
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
                <div className='conditions'>
                <input type="checkbox" />
                <label>
                  J’accepte les &nbsp;
                  <Link href="/doc/CGU.pdf" >
                      <a target="_blank"> conditions générales d’utilisation</a>
                  </Link>
                </label>
              </div>
              </div>
              <div className='btnContainer'  >
                <button className='btn' type="submit">
                  Envoyer
                </button>
              </div>
              
              
              <Toaster />
            </MySignupForm>
          </div>
          
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
          <div  className='mainConnexion' style={{display: 'none'}} >
            Connectez vous <br /><br />
            <button onClick={() => signIn()}>Connexion</button>
          </div>
        )}
      </MySignup>
    </div>
  );
}

export const getServerSideProps = async ({ req }) => {
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
      // // if session is not null, user is connected
      // userConnected: session ? userConnected : null,
    },
  };
};
