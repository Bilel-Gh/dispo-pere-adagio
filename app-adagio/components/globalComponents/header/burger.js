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
            border-top: 1px solid #FDFCF3;
        }

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
        width > 330 ? setIsMobile(false) : setIsMobile(true)
    }, [width]);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }

    return (
      <header>
        {isMobile ?
        (
            <div  className='container'>
                <h1>mobile</h1>
            </div>
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