import styled from 'styled-components'
import Header from '@/components/globalComponents/nav'
import Button from '@/components/globalComponents/button'
import Footer from '@/components/globalComponents/footer'
import React, {useState, useEffect} from 'react'
import { getSession, useSession, signIn, signOut } from "next-auth/react";

const MyHeader = styled.main`
    .header{
        display: flex;
        gap: 5%;
        align-items: flex-start;
        min-height: 40vh;
        height: 40vh;
        padding: 7em 4em 1em 4em;
        figure{
            all: unset;
            .imgUser{
                border-radius: 50%;
                height: 240px;
                width: 240px;
            }
        }
        article{
            padding-top: 20px;
            justify-content: space-between;
            max-height: fit-content;
            width: 78%;
            display: flex;
            flex-direction: column;
            height: 100%;
            .article-wrapper{
                height: 40px;
                display: flex;
                align-items: center;
                margin-bottom: 0.5em;
                .rating{
                    display: flex;
                    height: 28px;
                    width: 58px;
                    background-color: #EB5B2D;
                    justify-content: space-evenly;
                    align-items: center;
                    padding: 8px;
                    margin-left: 1%;
                    border-radius: 4px;
                    img{
                        width: 16px;
                        height: 16px;
                    }
                }
            }
            .profession{
                margin-bottom: 1em;
            }
            .account-tags{
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                .tags-default{
                    margin-right: 3em;
                    cursor: pointer;
                    font-family: 'Poppins-Regular';
                    &:hover{
                    font-family: 'Poppins-ExtraBold'
                    }
                }
                .tags-default-deco{
                    cursor: pointer;
                    font-family: 'Poppins-Regular';
                    &:hover{
                    font-family: 'Poppins-ExtraBold'
                    }
                }
               
            }
        }
        .sticker{
            height: 140px;
            width: 153px;
            background-image: url(/img/dispo/stickerProfile.png);
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            right: 16%;
            top: 10%;
        }
    }

    .main-container{
        display: flex;
        flex-direction: column;
        gap:50px; 
        background-color: white;
        width: 100%;
        padding: 4em;
        .separator{
            background: #E4E4E7;
            height: 1px;
            width: 100%;
            margin: 0 auto; 
        }
    }
    @media (max-width: 900px) {
        .header{
            .sticker{
                display: none;
                background-image : none;
            }
        }
    }
    @media (max-width: 870px) {
        .header{
            height: initial;
            flex-direction: column;
            align-items: center;
        }
    }
`

const Suivi = styled.section`
    .title{
        color: #EB5B2D;
        font-family: 'Fascinate-Regular';
        font-size: 28px;
        margin-bottom: 1.5em;
    }
    .suivi-card{
        height: auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .card{
            width: 47%;
            height: 400px;
            border: 2px solid #EB5B2D;
            border-radius: 12px;
            position: relative;
            .card-h2{
                background-color: #EB5B2D;
                border-radius: 10px 10px 0 0;
                padding: 0.7em;
                margin-bottom: 0.8em;
            }
            .card-info{
                width: 100%;
                height: 6vh;
                border-bottom: 1px solid #E4E4E7;
                display: flex;
                figure{
                    width: fit-content;
                    margin: 0 1em 0.8em 0.6em;
                    img{
                        max-width: 115.06px;
                        max-height: 76px;
                    }
                }
                div{
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    margin-bottom: 0.8em;
                    .xsmall-bold_span{
                        color: #71717A;
                    }
                    .xsmall_span{
                        color: #52525B;
                    }
                }
            }
            .card-confirm{
                width: fit-content;
                background-repeat: no-repeat;
                display: flex;
                margin: 0.8em 0 0 0.6em;
                .card-confirm_img{
                    width: fit-content;
                    margin-right: 0.6em;
                    img{
                        width: 16px;
                    }
                }
            }
            .card-footer{
                background-color: #F4F4F5;
                height: 68px;
                width: 100%;
                border-radius: 0 0 12px 12px;
                position: absolute;
                bottom: 0;
                display: flex;
                justify-content: center;
                padding: 16px 12px 16px 12px;
                button{
                    cursor: pointer;
                    all: unset;
                    background: #E4E4E7;
                    font-family: 'Poppins-Regular';
                    color: #52525B;
                    width: 100%;
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

`
const Personnel = styled.section`
    .title{
        color: #EB5B2D;
        font-family: 'Fascinate-Regular';
        font-size: 28px;
        margin-bottom: 1.5em;
    }
    .userInfo{
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
        justify-content: space-between;
        div{
            margin: 5px 0px;
            width: 48%;
            .userLabel{
                color: #333333;
                font-size: 14px;
                font-family: 'Poppins-ExtraBold';
            }
            .containerVal{
                background: #F4F4F5;
                padding: 12px;
                border-radius: 8px;
                width: initial;
                h3{
                    font-size: 14px;
                    color: rgba(51, 51, 51, 0.5);
                }
            
            }
        }

    }
    @media (max-width: 700px) {
        .userInfo{
            flex-direction: column;
            align-items: center;
            div{
                width: 100%;
            }
        }

    }

`
export default function Profil() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }

    const [userConnected, setUserConnected] = useState(
        useEffect(() => {
          var user = JSON.parse(
            window.localStorage.getItem("userConnected")
          );
          setUserConnected(user);
      }, [])
    )

    console.log(userConnected && userConnected.spots.length)

    return (
        
        <MyHeader>
            { userConnected && (
                <>
            <header className='header'>
                <figure>
                    <img className='imgUser' alt='profile picture' src={userConnected.image}></img>
                </figure>
               
                <article>
                    <div>
                        <div className='article-wrapper'>
                            <h1 className='H5'>{userConnected.firstname}&nbsp;{userConnected.lastname}</h1>
                            <div className='rating'>
                                <img src='/img/dispo/star.svg'></img>
                                <p className='form-label'>4.6</p>
                            </div>                        
                        </div>
                    </div>
                    <div className='account-tags'>
                        <div>
                            {userConnected.spots.lenght > 0 &&
                                (<a className='tags-default' onClick={() => scrollToSection('suivi')}>Mon suivi</a>)
                            }
                            <a className='tags-default' onClick={() => scrollToSection('perso')}>Information personnelles</a>
                        </div>                  
                        <a className='tags-default-deco' onClick={() => signOut()}>Se déconnecter</a>
                    </div>
                </article>
                <div className='sticker'>
                </div>
            </header>

            <main className='main-container'>
                { userConnected.spots.length > 0 && (
                <Suivi  id='suivi' className='suivi'>
                    <h2 className='title'>Mon suivi</h2>
                    <div className='suivi-card'>
                        <article className='card'>
                            <div className='card-h2'>
                                <h2 className='form-label'>Suivi de votre demande</h2>
                            </div>            
                            <div className='card-info'>
                                <figure>
                                    <img src='/img/dispo/profileCard.webp'></img>
                                </figure>
                                <div className='card-info_text'>
                                    <p className='xsmall-bold'>We Love Green</p>
                                    <p className='xsmall-bold'><span className='xsmall-bold_span'>Food Truck Premium</span></p>
                                    <p className='xsmall'><span className='xsmall_span'>Vendredi 8 Septembre 2022</span></p>
                                    <p className='xsmall'><span className='xsmall_span'>Vincennes 94300</span></p>
                                </div>
                            </div>
                            <div className='card-confirm'>
                                <figure className='card-confirm_img'>
                                    <img src='/img/dispo/icon.svg' alt='icon'></img>
                                </figure>
                                <p>Candidature envoyée</p>
                            </div>

                            <div className='card-footer'>
                                <button>En attente du tirage au sort</button>
                            </div>
                        </article>

                        <article className='card'>
                            <div className='card-h2'>
                                <h2 className='form-label'>Suivi de votre demande</h2>
                            </div>
                            <div className='card-info'>
                                <figure>
                                    <img src='/img/dispo/profileCard.webp'></img>
                                </figure>
                                <div className='card-info_text'>
                                    <p className='xsmall-bold'>We Love Green</p>
                                    <p className='xsmall-bold'><span className='xsmall-bold_span'>Food Truck Premium</span></p>
                                    <p className='xsmall'><span className='xsmall_span'>Vendredi 8 Septembre 2022</span></p>
                                    <p className='xsmall'><span className='xsmall_span'>Vincennes 94300</span></p>
                                </div>
                            </div>
                            <div className='card-confirm'>
                                <figure className='card-confirm_img'>
                                    <img src='/img/dispo/icon.svg' alt='icon'></img>
                                </figure>
                                <p>Candidature envoyée</p>
                            </div>
                            <div className='card-footer'>
                                <button>En attente du tirage au sort</button>
                            </div>
                        </article>
                    </div>
                </Suivi>)}

                <div className='separator'></div>

                <Personnel id='perso' className='perso'>
                    <h2 className='title' >Information personnelle</h2>
                        <div className='userInfo'>
                            <div>
                                <label className='userLabel'>Prénom</label>
                                <div className='containerVal'>
                                    <h3>{userConnected.firstname}</h3>
                                </div>
                                
                            </div>
                            <div>
                                <label className='userLabel'>Nom</label>
                                <div className='containerVal'>
                                    <h3>{userConnected.lastname}</h3>
                                </div>
                            </div>
                            <div>
                                <label className='userLabel'>Email</label>
                                <div className='containerVal'>
                                    <h3>{userConnected.email}</h3>
                                </div>
                            </div>
                            <div>
                                <label className='userLabel'>Numéro de téléphone</label>
                                <div className='containerVal'>
                                    <h3>{userConnected.phone ? userConnected.phone : 'pas communiqué'}</h3>
                                </div>
                            </div>

                        </div>
                </Personnel>
            </main>
            </>
            )}
        </MyHeader>
    )
}