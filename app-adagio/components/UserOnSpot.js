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
import { MyMain, MySignupForm, HeaderBlue, ItemContainner, MyItem} from "../pages/events";
import styled from 'styled-components'

const UserContainner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 25px;
`

const MyUser = styled.div`
  border: solid 1px grey;
  min-width: 370px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    padding: 0 20px;
    .info-container {
      margin-right: 20px;
      width: 90px;
      p {
        margin: 10px 0;
      }
    }
    .button-accepte {
      height: 30px;
      background: #EB5B2D;
      border: 2px solid #EB5B2D;
      border-radius: 8px;
      color: #fff;
      margin-right: 15px;
      &:hover {
        background: #fff;
        color: #EB5B2D;
        border: 2px solid #EB5B2D;
        cursor: pointer;
      }
    }

    .button-refuse {
      height: 30px;
      background: #A1A1AA;
      border: 2px solid #A1A1AA;
      border: none;
      border-radius: 8px;
      color: #fff;
      margin-right: 15px;
      &:hover {
        background: #fff;
        color: #A1A1AA;
        border: 2px solid #A1A1AA;
        cursor: pointer;
      }
    }
  }
  img {
    width: 65px;
    height: 65px;
    border: solid;
    border-radius: 50px;
    margin-left: 20px;
  }

`

export default function UserOnSpot({ id, userLoged, }) {

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
      <UserContainner>
        {usersOnSpotData.map(userOnSpotData => (
          <>  {
            userOnSpotData.user && 
            <MyUser>
            <img src={userOnSpotData.user.image} alt="avatar" />
          <div key={userOnSpotData.id}>
            <div className="info-container"> 
              <p>{userOnSpotData.user.firstname}</p>
              <p>{userOnSpotData.user.job.name}</p>
              <p className={userOnSpotData.userStatus.toLowerCase()}>{ userOnSpotData.userStatus === "PENDING" ? "en attente" : (userOnSpotData.userStatus === "ACCEPTED" ? "accepté" : (userOnSpotData.userStatus === "REFUSED" ? "refusé" : "leader"))}</p>
            </div>
              {
                usersOnSpotStatus === "LEADER" ? (
                  userOnSpotData.user.id === userLoged.id ? null : (
                    userOnSpotData.userStatus === "ACCEPTED" ? (
                      <> 
                        <button className="button-refuse" onClick={() => refuseUserOnSpot(userOnSpotData.userId, userOnSpotData.spotId)}>
                          Refuse User
                        </button>
                      </>
                    ) : (
                      userOnSpotData.userStatus === "REFUSED" ? (
                        <>
                          <button className="button-accepte" onClick={() => acceptUserOnSpot(userOnSpotData.userId, userOnSpotData.spotId)}>
                            accepte User
                          </button>
                        </>
                      ) : (
                <>
                  <button className="button-accepte" onClick={() => acceptUserOnSpot(userOnSpotData.userId, userOnSpotData.spotId)}>
                    accepte User
                  </button>
                  <button className="button-refuse" onClick={() => refuseUserOnSpot(userOnSpotData.userId, userOnSpotData.spotId)}>
                    Refuse User
                  </button>
                </>
                      )
                    )
                  )
              ) : null 
              } 
          </div>
            </MyUser>
          }

          </>
        ))}
      </UserContainner>
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
