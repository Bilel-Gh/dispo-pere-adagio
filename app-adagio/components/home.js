import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Carousel from "react-simply-carousel"
import Button from '@/components/globalComponents/button'

const Pink = styled.article`
    padding: 0% 10% 5% 10%;
    background-color: #F195BA;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .title-container{
        background-image: url('/img/sublime.svg');
        background-size: 380px 108px;
        background-repeat: no-repeat;
        background-position: 90% 35%;
        // width: 100%;
        .title{
            display: flex;
            flex-direction: column;
            font-size: 83px;
            span{
                &:nth-child(1){
                    font-family: "Fascinate-Regular";
                    color: #FDFCF3;
                }
                &:nth-child(2){
                    // padding-left: 50px;
                    padding-left: 10%;
                    white-space: nowrap;
                    font-family: "Poppins-Regular";
                    color: #FDFCF3;
                    span {
                        font-family: "Poppins-Regular";
                        padding-bottom: 2px;
                        border-bottom: 5px solid #FDFCF3;
                    }
                    
                }
                
            }
        }
    }
    .description-container{
        text-align: end;
        color: #FDFCF3;
        font-family: "Poppins-Regular";
        font-size: 19px;
        width: 35%;
        margin: 0 0 0 auto;
        span{
            font-family: "Poppins-Regular";
            font-weight: 700;
            font-style: italic;

        }
    }
    .orange-puzzle{
        position: absolute;
        bottom: -72px;
        left: 50px;
        height: 285px;
        width: 355px;
        background-image: url('/img/puzzleOrange.svg');
        background-size: 355px 285px;
        background-repeat: no-repeat;
    }
    
`

const Spots = styled.article`
    background: linear-gradient(to top, #FDFCF3 65%, #EB5B2D 0);
    position: relative;
    display: flex;
    flex-direction: column;
    gap : 42px;
    align-items: center;
    padding: 10% 30px 5% 30px;
    .container-card{
        gap: 10px ;
        margin: 10px;
    }
    .pink-puzzle{
        position: absolute;
        top: 0px;
        left: 50px;
        height: 211px;
        width: 427px;
        background-image: url('/img/puzzlePink.svg');
        background-size: 427px 211px;
        background-repeat: no-repeat;
    }
    .btn-more-spot{
        width: 500px;
    }
    

`
const CardSpot = styled.article`
    display: flex;
    user-select: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 10%;
    padding: 30px;
    width: 100%; 
    background: #FDFCF3;
    width: 398px;
    height: 495px;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    figure{
        position: relative; 
        margin: 0px;
        .spot-img{
            border-radius: 10px;
            width: 100%;
            height: 282px;
        }
    }
    .spot-name{
        position: absolute;
        bottom: -20px;
        background-color: #F195BA;
        padding: 5px;
        border-radius: 10px;
        width: 80%;
        .spot-title{
            font-family: "Poppins-Regular";
            font-weight: bold;
            text-transform: uppercase;
            margin: 0px;
            border: solid 1px #FDFCF3;
            color: #FDFCF3;
            border-radius: 10px;
        }
    }
    .spot-info{
        font-family: 'Poppins-Regular';
        *{
            margin: 0px;
            text-align: left;
            font-weight: 100;
            font-size: 19px;
            color: #000;
        }
        
        .spot-nb{
            color: #EB5B2D;
            font-weight: 700;
            font-style: italic;
            
        }
    }
    
`

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);


    const underlineLastWord=(element)=> {
        var pieces = element.innerHTML.split(" ");
        var last = pieces.pop();
        var first = pieces.join(" ");
        element.innerHTML = first + "<span> " + last + "</span>";
    }

    useEffect(() => {
        var elements =  document.querySelectorAll(".underline-end");
        elements.forEach(x => underlineLastWord(x));
    }, []);

    useEffect(() => {
        document.querySelector('[role="presentation"]').classList.add("container-card");
    });

    const spots= [
        {
            name : 'We Love Green',
            img : 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            date : 'Du 02 au 05 juin ',
            spot : 'Bois de Vincenne, Paris 12e',
            nb : '4 pop-up disponibles'
        },
        {
            name : 'Solidays',
            img : 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            date : 'Du 24 au 26 juin ',
            spot : 'Paris Lonchamps',
            nb : '4 pop-up disponibles'
        },
        {
            name : 'We Love Green',
            img : 'https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80',
            date : 'Du 02 au 05 juin ',
            spot : 'Bois de Vincenne, Paris 12e',
            nb : '4 pop-up disponibles'
        },
        {
            name : 'Solidays',
            img : 'https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80',
            date : 'Du 24 au 26 juin ',
            spot : 'Paris Lonchamps',
            nb : '4 pop-up disponibles'
        },
        {
            name : 'Solidays',
            img : 'https://images.unsplash.com/photo-1582711012124-a56cf82307a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80',
            date : 'Du 24 au 26 juin ',
            spot : 'Paris Lonchamps',
            nb : '4 pop-up disponibles'
        },
    ]


  return (
    <section className='section-home'>

    <Pink className='container'>
        <div className='title-container'>
            <h1 className='title'>
                <span>Les espaces &nbsp;</span>
                <span className='underline-end'>culinaires sublimés.</span>
            </h1>
            <p className='description-container'>
                Toutes les semaines, venez retrouvez 
                nos prochains &nbsp; <span>pop-up store</span> 
                &nbsp; aménagés spécialement pour vos besoins.
            </p>

        </div>
        <div className='orange-puzzle'/>

    </Pink>

    <Spots>
        <div className='pink-puzzle'/>

        <Carousel
            className='parent'
            containerProps={{
            style: {
                width: "100%",
                justifyContent: "space-between",
                userSelect: "text",
                gap: '10px',
            }
            }}
            activeSlideIndex={activeSlide}
            // activeSlideProps={{
            //   style: {
            //     background: "blue"
            //   }
            // }}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
                show: false,
            }}
            backwardBtnProps={{
                show: false,
            }}
            itemsToShow={'auto'}
            speed={400}
        >
            {spots.map((item, index) => (
                <CardSpot className='spot-article' key={index} >
                    <figure>
                        <img className='spot-img' src={item.img} alt={item.name} />
                        <div className='spot-name'>
                            <h2 className='spot-title'>
                                {item.name}
                            </h2>
                        </div>
                    </figure>
                    <div className='spot-info'>
                        <h3 className='spot-date'> {item.date}</h3>
                        <h3 className='spot-spot'> {item.spot}</h3>
                        <h3 className='spot-nb'> {item.nb}</h3>
                    </div>
                    
                </CardSpot>
            ))}
        </Carousel>

        <p className='btn-more-spot'>
            <Button  href="youtube.fr">
                Tous les évenements
            </Button>
        </p>
        
    </Spots>

    </section>

  )
}
