import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const NavDesktop = styled.nav`
    padding: 30px 30px 0px 30px;
    background-color: #F195BA;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/img/myprofil.webp');
    background-size: 150px 100px;
    background-repeat: no-repeat;
    background-position: 90% 30%;
    ul{
        list-style-type: none;
        width: 100%;
        padding-left: 0;
        display: flex;
        gap: 5%;
        align-items: center;
        justify-content: center;
        li{
            font-family: 'Poppins-Regular';
            font-size: 15px;
            line-height: 32px;
            color: #FDFCF3;
            text-transform: uppercase;
            cursor: pointer;
        }

    }
`
const NavMobile = styled.nav`
    height: 105px;
    background-color: #FDFCF3;
    position: relative;
    width: 100%;
    .pa{
        position: absolute;
        right: 30px;
        z-index: 0;
    }
    .burger {
        padding-left: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
        
        .burgerLines, .burgerLines_open {
            cursor: pointer;

            content: "";
            width: 0.2em;
            border-radius: 0.15em;
            background-color: #F195BA;
            height: 0.3em;
            transform: rotate(0);
            margin-left: 2vh;
            &::after {
                content: "";
                width: 1em;
                border-radius: .25em;
                background-color: #F195BA;
                height: .3em;
                position: absolute;
                transform: rotate(0);
                right: 6px;
            }
            &::before {
                content: "";
                width: 2em;
                border-radius: 0.25em;
                background-color: #EB5B2D;
                height: .3em;
                position: absolute;
                bottom: 10px;
                transform: rotate(0);
                right: -10px;
            }
        }
        
    }
    .close {
        width: 2em;
        height: 2.4em;
        background: transparent;
        position: absolute;
        top: 12px;
        left: 15px; 
    }
    @keyframes opacityAnimation {
        0% {
            opacity: 0%;
        }
      
        100% {
            opacity: 100%;
        }
      }
    
    .social {
        display: flex;
        justify-content: space-evenly;
        animation-fill-mode: forwards;
        animation-duration: 2s;
        align-items: center;
        animation-name: opacityAnimation;
        width: 100%;
        svg {
            // height: 35px;
            // width: 37px;
            // margin: 5px
        }
    }
    
    .separatorBurger{
        height: 2px;
        width: 80%;
        background: #F195BA;
        align-self: self-start;
        animation-fill-mode: forwards;
        animation-duration: 2s;
        animation-name: opacityAnimation;
    }
    
    
    
    
    /* ANIMATION */
    @keyframes navTextAnimation {
        0% {
            color: transparent
        }
      
        100% {
            color: #F0EAD8;
        }
      }
    
    .burgerNav {
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        animation-fill-mode: forwards;
        animation-duration: 2s;
        animation-name: navTextAnimation;
        height: 25%;
        align-items: flex-start;
        font-size: 2em;
        li{
            cursor: pointer;
            color: #333333;
            font-size: 20px;
            font-family: "Poppins-Regular";
            font-weight: 600;
            text-transform: uppercase;
        }
    }
    @keyframes dotParentAnimation {
        0% {
            margin-left: 2vw;
            width: 8vw;
            height: 5vh;
            position: relative;
        }
      
        100% {
            width: 100%;
            height: 40em;
            top: 0;
        }
      }
    
      .burgerOpen {
        position: absolute;
        width: inherit;
        display: flex;
        top: 0px;
        z-index: 3;
        left: 0;
        align-items: flex-start;
        justify-content: flex-start;
    }
    
    @keyframes dotAnimation {
        0% {
            margin-left: 2vw;
            width: 100px;
            height: 100px;
            border-radius: 100px;
            transform: translate(15px,15px);
        }
      
        100% {
            width: 100vw;
            background-color: #FDFCF3;
            height: 80vh;
        }
      }
    
      .burgerLines_open{
        content: "";
        width: 100%;
        z-index: 1;
    
        transform: rotate(0);
        display: flex;
        justify-content: center;
        gap: 10%;
        align-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        animation-fill-mode: forwards;
        animation-name: dotAnimation;
        animation-duration: .4s;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    
    @keyframes rotateBeforeAnimation {
        0%   {
            content: "";
            width: 2em;
            border-radius: 0.25em;
            background-color: #F0EAD8;
            height: .2em;
            position: absolute;
            top: 20px;
            transform: rotate(0);
            left: 15px;      
        }
        100% {
            width: 2em;
            top: 30px;
            transform: rotate(-45deg);
            background-color: #F0EAD8;
            left: 15px;
            z-index: -1;
        }
      }
    
      .burgerLines_open::before{
        z-index: -1;
        content: "";
        width: 2em;
        border-radius: 0.25em;
        height: .4em;
        position: absolute;
        top: 20px;
        transform: rotate(0);
        left: 15px; 
        z-index: -1;
        animation-delay: .4s;
        animation-fill-mode: forwards;
        animation-duration: 0.2s;
        animation-name: rotateBeforeAnimation;
        background-image: linear-gradient( #F195BA, #F195BA);
    
    }
    
    @keyframes rotateAfterAnimation {
        0%   {
            content: "";
            width: 1em;
            border-radius: .25em;
            background-color: #F0EAD8;
            height: .2em;
            position: absolute;
            transform: rotate(0);
            left: 15px;
            top: 30px;
        }
        100% {
            width: 2em;
            top: 30px;
            transform: rotate(45deg);
            background-color: #F0EAD8;
            left: 15px;
            z-index: -1;
        }
      }
    
      .burgerLines_open::after{
        content: "";
        width: 1em;
        border-radius: .25em;
        background-color: transparent;
        height: .4em;
        position: absolute;
        transform: rotate(0);
        left: 15px;
        top: 30px;
        z-index: -1;
        animation-delay: .4s;
        animation-fill-mode: forwards;
        animation-duration: 0.4s;
        animation-name: rotateAfterAnimation;
        background-image: linear-gradient(120deg, #EB5B2D, #EB5B2D);
    
    }
    
   
`

const Burger = ({isOpen, setIsOpen}) => {
    const [isMobile, setIsMobile] = useState(false)
    const [width, setWidth] = useState();

    useEffect(() => {
        if (!width) setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
        width > 650 ? setIsMobile(false) : setIsMobile(true)
    }, [width]);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }

    return (
      <header>
        {isMobile ?
        (
            <NavMobile className='container'>
                <div
                    id="burger-par"
                    className={isOpen ? 'burgerOpen' :'burger'}
                    >
                        <div
                            onClick={isOpen ? null : () => setIsOpen(isOpen ? false : true)}
                            id="burger"
                            className={isOpen ? 'burgerLines_open' : 'burgerLines'}
                        >
                        {
                            isOpen &&
                            <>
                                <div onClick={() => setIsOpen(isOpen ? false : true)} className='close'></div>
                                <nav className='burgerNav'>
                                    <ul>
                                        <li onClick={() => scrollToSection('concept')}>Nos prochains pop-up stores</li>
                                        <li onClick={() => scrollToSection('data')}>Recrutement</li>
                                        <li onClick={() => scrollToSection('data')}>Actus</li>
                                        <li className='separatorBurger'> </li> 
                                    </ul>
                                </nav>
                            </>
                        }
                    </div>
                    <div className='pa'>
                        <img src="/img/pa.webp" width="37" height="49" alt='logo pa' />
                    </div>
                </div>
            </NavMobile>
        ):(
            <NavDesktop className='desktopNavNontainer'>
                <img src='/img/logoWhite.webp' alt='white logo' width='244px' height='135px'/>

                <ul>
                    <li onClick={() => scrollToSection('#')}>Accueil</li>
                    <li onClick={() => scrollToSection('#')}>Nos prochains pop-up stores</li>
                    <li onClick={() => scrollToSection('#')}>Recrutement</li>
                    <li onClick={() => scrollToSection('#')}>Actus</li>
                </ul>
            </NavDesktop>
        )
      
      } 
    </header>

    );
  }

  export default Burger;