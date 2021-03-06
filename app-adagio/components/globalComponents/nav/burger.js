import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getSession, useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavDesktop = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    figure{
      margin: 0;
      .logo-desktop{
        height: 69px;
        width: 122px;
      }
    }
    .nav{
      padding: 0;
      display: flex;
      align-items: center;
      white-space: nowrap;
      gap: 60px;
      justify-content: center;
      color: #333333;
      .navItem{
        font-size: 16px;
        font-family: "Poppins-Regular";
        text-transform: uppercase;
        cursor: pointer;
        &:hover{
          font-weight: bold;
        }
      }
      .btn-login{
        cursor:pointer;
        background: none;
        border: none;
        font-size: 15px;
        color: #333333;
        font-family: "Poppins-ExtraBold";
      }
      .btn-signup{
        font-size: 15px;
        cursor:pointer;
        background: #333333;
        font-family: "Poppins-ExtraBold";
        border: none;
        padding: 12px;
        border-radius: 8px;
        color: #FDFCF3;
      }
      .navItemUser{
        width: 136px;
        background: #333333;
        border-radius: 1000px;
        padding: 8px;
        color: #FDFCF3;
        font-family: 'Poppins-Regular';
        border: none;
        cursor: pointer;
      }
      .disconnectButton {
        display: none;
        width: 136px;
        background: #333333;
        border-radius: 1000px;
        padding: 8px;
        color: #FDFCF3;
        font-family: 'Poppins-Regular';
        border: none;
        cursor: pointer;
      }
      .hoverDiv{ 
        &:hover{
          .disconnectButton {
            display: block;
          }
          .navItemUser{
            margin-top: 30px;
          }
        }
      }
      @media (max-width: 1100px) {
          gap: 20px;
      }
    }
`
const NavMobile = styled.nav`
  width: 100%;
  .navMobile{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    figure{
      margin: 0;
      .burger{
        height: 22px;
        width: 34px;
        cursor: pointer;
      }
      .logoMobile{
        height: 49px;
        width: 37px;
      }
    }
  }
  .close{
    z-index: 1;
    position: absolute;
    top: 0; 
    left: 0;
    position: absolute;
    background-color: #FDFCF3;
    .burgerOpen{
      opacity: 1;
      width: 350px;
      height: 500px;
      position: relative;
      top: 0px;
      left: 0;
      figure{
        position: absolute;
        top: 20px;
        left: 20px;
        margin: 0;
        height: 49px;
        width: 49px;
        cursor: pointer;
        .exit{
            height: 49px;
            width: 49px;
        }
      }
    }
    .burgerContent{
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      .burgerNav{
        ul{
          padding: 0%;
          li{
            padding: 10px 0px;
            font-size: 16px;
            font-family: "Poppins-Regular";
            text-transform: uppercase;
            cursor: pointer;
          }
          .separatorBurger{
            padding: 0px;
            margin-top: 10px;
            height: 1px;
            width: 80%;
            border: 1px solid #333333;
          }
        }
      }
      .hoverDiv{
        display: flex;
        gap: 10px;
        flex-direction: column;
      }
      .btn-login{
        cursor:pointer;
        background: none;
        border: none;
        font-size: 15px;
        color: #333333;
        font-family: "Poppins-ExtraBold";
      }
      .btn-signup{
        font-size: 15px;
        cursor:pointer;
        background: #333333;
        font-family: "Poppins-ExtraBold";
        border: none;
        padding: 12px;
        border-radius: 8px;
        color: #FDFCF3;
      }
      .navItemUser{
        width: 136px;
        background: #333333;
        border-radius: 1000px;
        padding: 8px;
        color: #FDFCF3;
        font-family: 'Poppins-Regular';
        border: none;
        cursor: pointer;
      }
      .disconnectButton {
        width: 136px;
        background: #333333;
        border-radius: 1000px;
        padding: 8px;
        color: #FDFCF3;
        font-family: 'Poppins-Regular';
        border: none;
        cursor: pointer;
      }
      .social{
          display: flex;
          gap: 30px;
      }
    } 
  }

`

const Burger = ({ isOpen, setIsOpen }) => {
  const router = useRouter()

  const { data: session } = useSession();

  const [userConnected, setUserConnected] = useState(
    useEffect(() => {
      var user = JSON.parse(
        window.localStorage.getItem("userConnected")
      );
      setUserConnected(user);
    }, [])
  )

  const [isMobile, setIsMobile] = useState(false)

  const [width, setWidth] = useState();

  useEffect(() => {
    if (!width) setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    width > 830 ? setIsMobile(false) : setIsMobile(true)
  }, [width, isMobile]);


  return (
    <>
      {isMobile ?
        (

          <NavMobile className='mobileContainer'>
            <nav className='navMobile'>
              <figure onClick={isOpen ? null : () => setIsOpen(isOpen ? false : true)}>
                <img className='burger' src='img/landing/burger.svg' alt="burger" />
              </figure>
              <figure>
                <img className='logoMobile' src='img/landing/pa.webp' alt="logo" />
              </figure>
            </nav>

            <div id="burger" className='close'>
              {
                isOpen &&
                <div className='burgerOpen'>
                  <figure onClick={() => setIsOpen(isOpen ? false : true)}>
                    <img className='exit' src="img/landing/exit.svg" alt="exit" />
                  </figure>
                  <div className='burgerContent'>
                    {session ? (

                      <>
                        <nav className='burgerNav'>
                          <ul>
                            <li className='navItem'>
                              <Link href='/accueil'>
                                <a>Accueuil</a>
                              </Link>
                            </li>
                            <li className='navItem'>
                              <Link href='/events'>
                                <a>
                                  Les ??v??nements
                                </a>
                              </Link>
                            </li>
                            <li className='navItem'>
                              <Link href='/spots'>
                                <a>
                                  Les stands
                                </a>
                              </Link>
                            </li>
                            <li className='separatorBurger'> </li>
                          </ul>
                        </nav>

                        <div className='hoverDiv'>
                          <Link href='/profil'>
                            <a>
                              <button className='navItemUser'>{userConnected.firstname}</button>
                            </a>
                          </Link>
                          <button className='disconnectButton' onClick={() => signOut()}>D??connexion</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <nav className='burgerNav'>
                          <ul>
                            <li>
                              <Link href='/'>
                                <a>Accueil</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/#concept'>
                                <a>Le concept</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/#data'>
                                <a className='navItem'>
                                  En quelques chiffres
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/#faq'>
                                <a className='navItem'>
                                  Faq
                                </a>
                              </Link>
                            </li>
                            <li className='separatorBurger'> </li>
                          </ul>
                        </nav>

                        <div className='hoverDiv'>
                          <button className='btn-login' onClick={() => signIn()} > Connexion </button>
                          <Link href='/signup'>
                            <a>
                              <button className='btn-signup'>Inscription</button>
                            </a>
                          </Link>
                        </div>
                      </>
                    )}

                    <div className='social'>
                      <a href="https://m.facebook.com/pereadagio">
                        <img src='/img/landing/fbBlack.svg' alt="icon facebook" />
                      </a>
                      <a href="https://www.instagram.com/pereadagio/">
                        <img src='/img/landing/instaBlack.svg' alt="icon instagram" />
                      </a>
                      <a href="https://www.linkedin.com/mwlite/company/p%C3%A8re-adagio">
                        <img src='/img/landing/linkedinBlack.svg' alt="icon linkedin " />
                      </a>
                    </div>
                  </div>
                </div>
              }

            </div>
          </NavMobile>
        )
        :
        (
          <NavDesktop className='navDesktop'>
            <Link href='/'>
              <a>
                <figure>
                  <img className='logo-desktop' src={(router.asPath === '/' || router.asPath === '/signup' || router.asPath === '/profil' || router.asPath.includes('/#')) ? 'img/landing/logo.webp' : 'img/landing/logoWhite.webp'} alt="logo" />
                </figure>
              </a>
            </Link>

            {

              session ? (

                <ul className='nav' style={{ color: router.asPath === '/accueil' && 'white' }}>
                  <li className='navItem'>
                    <Link href='/accueil'>
                      <a>Accueuil</a>
                    </Link>
                  </li>
                  <li className='navItem'>
                    <Link href='/events'>
                      <a>
                        Les ??v??nements
                      </a>
                    </Link>
                  </li>
                  <li className='navItem'>
                    <Link href='/spots'>
                      <a>
                        Les stands
                      </a>
                    </Link>
                  </li>
                  <div className='hoverDiv'>
                    <Link href='/profil'>
                      <a>
                        <button className='navItemUser'>{userConnected.firstname}</button>
                      </a>
                    </Link>
                    <button className='disconnectButton' onClick={() => signOut()}>D??connexion</button>
                  </div>
                </ul>
              ) : (
                <ul className='nav'>
                  <Link href='/#concept'>
                    <a className='navItem'>
                      Le concept
                    </a>
                  </Link>
                  <Link href='/#data'>
                    <a className='navItem'>
                      En quelques chiffres
                    </a>
                  </Link>
                  <Link href='/#faq'>
                    <a className='navItem'>
                      Faq
                    </a>
                  </Link>
                  <button className='btn-login' onClick={() => signIn()} > Connexion </button>
                  <Link href='/signup'>
                    <a>
                      <button className='btn-signup'>Inscription</button>
                    </a>
                  </Link>
                </ul>

              )
            }
          </NavDesktop>
        )
      }
    </>
  );
}

export default Burger;