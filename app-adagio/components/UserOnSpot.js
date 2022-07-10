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

export default function UserOnSpot({ id, userLoged, }) {
  // console.log("spotId UserOnSpot:", id);
  // const [userConnected, setUserConnected] = useState(
  //   useEffect(() => {
  //     var userConnected = JSON.parse(
  //       window.localStorage.getItem("userConnected")
  //     );
  //     setUserConnected(userConnected);
  // }, [])
  // );

  const [usersOnSpotData, setUsersOnSpotData] = useState([]);
  // const [usersStatus, setUsersStatus] = useState([]);
  useEffect(() => {
    // get all spots
    const getAllSpots = () => { 
        axios.get(`/api/userOnSpot/${id}`)
        .then(res => {
            // setUsers(res.data.map(user => user.user));
            setUsersOnSpotData(res.data);
        })
    }
    getAllSpots();
}, [id]);
console.log("usersOnSpotData_____________:", usersOnSpotData);

const [usersOnSpotStatus, setUsersOnSpotStatus] = useState([]);
const statusOfUser = async (id) => {
  id ? (
    axios.post(`/api/userOnSpot/getStatusOfOneUserOnSpot`, {
          userId: userLoged.id,
          spotId: id,
      }).then(res => {
          setUsersOnSpotStatus(res.data);
      }
      ).catch(err => {
          console.log("err", err);
          toast.error("pas de status pour cet utilisateur");
      }
      )

  ) : (
    console.log("no spotId")
  )
}
statusOfUser(id);

const acceptUserOnSpot = async (userId, spotId) => {
  axios.post(`/api/userOnSpot/accepteUserToSpot`, {
        userId: userId,
        spotId: id,
    }).then(res => {
        // refresh the page
        window.location.reload();
    }
    ).catch(err => {
        console.log("err", err);
        toast.error("pas de status pour cet utilisateur");
    }
    )
}

const refuseUserOnSpot = async (userId, spotId) => {
  axios.post(`/api/userOnSpot/refuseUserToSpot`, {
        userId: userId,
        spotId: id,
    }).then(res => {
        // refresh the page
        window.location.reload();
    }
    ).catch(err => {
        console.log("err", err);
        toast.error("pas de status pour cet utilisateur");
    }
    )
}

  // console.log("statusOfUser_________:", usersOnSpotStatus);



  // console.log("DATA9 usersOnSpotData:", usersOnSpotData);
  // console.log("DATA10:", users);

  return (
    <div className='container'>
      <div>
        {usersOnSpotData.map(userOnSpotData => (
          <>  {
            userOnSpotData.user && 
          <div className={userOnSpotData.userStatus.toLowerCase()} key={userOnSpotData.id}>
            <p>{userOnSpotData.user.email}</p>
            <p>----</p>
            <p>{userOnSpotData.userStatus}</p>
            {
              usersOnSpotStatus === "LEADER" ? (
                userOnSpotData.user.id === userLoged.id ? null : (
                  userOnSpotData.userStatus === "ACCEPTED" ? (
                    <> 
                      <button onClick={() => refuseUserOnSpot(userOnSpotData.userId, userOnSpotData.spotId)}>
                        Refuse User
                      </button>
                    </>
                  ) : (
                    userOnSpotData.userStatus === "REFUSED" ? (
                      <>
                        <button onClick={() => acceptUserOnSpot(userOnSpotData.userId, userOnSpotData.spotId)}>
                          accepte User
                        </button>
                      </>
                    ) : (
              <>
                <button onClick={() => acceptUserOnSpot(userOnSpotData.userId, userOnSpotData.spotId)}>
                  accepte User
                </button>
                <button onClick={() => refuseUserOnSpot(userOnSpotData.userId, userOnSpotData.spotId)}>
                  Refuse User
                </button>
              </>
                    )
                  )
                )
            ) : null 
            } 
          </div>
          }

          </>
        ))}
      </div>
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
