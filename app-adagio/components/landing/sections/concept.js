import styled from 'styled-components'
import Button from '@/components/globalComponents/button'


const MyConcept = styled.section`
  background-color: #EB5B2D;
    padding: 10% 8%;
    display: flex;
    flex-direction: column;
    /* min-height: 100vh; */
    height: 100%;
    gap: 40px;
    position: relative;
    .concept{
        position: absolute;
        left: 20%;
        top: -3%;
        height: 140px;
        width: 250px;
        background-image: url('/img/landing/concept.webp');
        background-size: 250px 140px ;
        background-repeat: no-repeat;
    }
    .title{
        z-index: 1;
        font-size: 45px;
        width: 80%;
        text-transform: uppercase;
        color: #FDFCF3;
        font-family: "Poppins-ExtraBold";
        margin: 0;
    }
    .caption{
        color: #FDFCF1;
        font-family: "Helvetica-Regular";
        span{
          font-family: "Helvetica-Bold";
        }
    }
    .textContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        background-image: url('/img/landing/cake.webp');
        background-size: auto 300px ;
        background-repeat: no-repeat;
        background-position: 100% 0%;
       
        .section{
            display: flex;
            gap: 10%;
            width: 100%;
            align-items: flex-start;
            justify-content: space-between;
            
            .ourConcept{
                width: 60%;
                display: flex;
                gap: 35px;
                flex-direction: column;
                justify-content: space-evenly;
                .btn-join{
                    width: 80%;
                }
            }
        }
        .calcul{
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            gap: 5%;
            justify-content: center;
            background-image: url('/img/landing/participate.webp');
            background-size: 180px 180px;
            background-repeat: no-repeat;
            background-position: 0% 0%;
            .one{
                position: relative;
                img{
                    height:250px!important;
                    width:250px!important;
                }
                &:after{
                    content: "Réduire vos coûts";
                    font-family: "Poppins-ExtraBold";
                    position: absolute;
                    text-transform: uppercase;
                    right: 50%;
                    top: 50%;
                    color: #333333;
                    transform: translate(50%,-50%);
                    font-size: 19px;
                    width: 100%;
                    text-align: center;
                }
            }
            .two{
                img{
                    height:250px!important;
                    width:250px!important;
                }
                position: relative;
                &:after{
                    content: "Devenir acteur du changement";
                    font-family: "Poppins-ExtraBold";
                    text-transform: uppercase;
    
                    position: absolute;
                    right: 50%;
                    top: 50%;
                    color: #333333;
                    transform: translate(50%,-50%);
                    font-size: 19px;
                    width: 100%;
                    text-align: center;
                }
            }
            
            span{
                font-family: "Poppins-ExtraBold";
                color: #FDFCF1;
                font-size: 80px;
            }
        }
       
    }
    
    .explain{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        h3{
            font-family: "Poppins-ExtraBold";
            text-transform: uppercase;
            font-size: 20px;
            color: #FDFCF3;
        }
        .caption{
            text-align: center;
            width: 80%;
        }
    }

@media (max-width: 900px) {
        .title{
            font-size: 35px!important;
            width: initial;
        }
        .textContainer{
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 100px;
            background-image: url('/img/landing/participate.webp');
            background-size: 180px 180px;
            background-repeat: no-repeat;
            background-position: 100% 50%;
            .section{
                .ourConcept{
                    width: 100%;
                    position: relative;
                    .participate{
                        position: absolute;
                        top: 150%;
                        right: 0%;
                        transform: translate(50%,-50%);
                    }
                }
            }
            .calcul{
                background-image: none;
                .participate{
                    top: -20%;
                    right: 15%;
                    z-index: 1;
                }
            }
        }
        .flower{
            img{
               width:125px!important;
            height:125px!important;
            }
            
        } 
}

@media (max-width: 760px) {
        .title{
            font-size: 28px!important;
        }
        .concept{
            background-image: none
        }
        .textContainer{
            background-size: 180px 180px;
            background-repeat: no-repeat;
            background-position: 100% 45%;
            .calcul{
                flex-direction: column;
                span{
                    line-height: 0.5;
                }
            }

        }
}


@media (max-width: 680px) {
        .textContainer{
            .section{
                .ourConcept{
                    width: 100%;
                    position: relative;
                    .participate{
                        top: 130%;
                    }
                    .btn-join{
                        margin: 0 auto;
                    }
                }
            }
        }
}
@media (max-width: 550px) {
        .textContainer{
            .calcul{
                flex-direction: column;
                .participate{
                    top: 0%;
                }
                span{
                    line-height: 0.5;
                }
            }
        }
}

`

export default function Concept() {
  return (
    <MyConcept id ='concept' className='section-concept'>
    <div className='concept'/>
    <h2 className='title'>Créer un écosystème d&#x27;espaces culinaires partagés.</h2>
    <div className='textContainer'>
        <section className='section'>
            <div className='ourConcept'>
                <p className='caption'>
                Vous êtes artisans dans la restauration, vous sentez que 
                    <span> les habitudes de vos clients changent &nbsp;</span>
                    et &nbsp; <span>vous souhaitez vous réinventez ?</span>
                </p>
                <div className='btn-join'>
                    <Button link='/contact' name='btn-join' color='white'>
                        Rejoignez le projet
                    </Button>
                </div>
                
                <p className='caption'>
                    <span> Ensemble vous créerez les espaces culinaires de demain ! &nbsp;</span>
                    En collaboration avec l’artisans de votre choix, lui aussi vous 
                    aura choisi bien évidemment, vous prendrez place dans les Food 
                    court de demain afin de proposer aux consommateurs une expérience, 
                    digne des nouveaux artisans que vous représenterez !
                </p>
            </div>
        </section>

        <section className='calcul'>
            <figure className='one'>
                <img src="/img/landing/one_icon.webp" width="250" height="250" alt='icon two' />
            </figure> 
            <span>+</span>
            <figure className='two'>
                <img src="/img/landing/two_icon.webp" width="250" height="250" alt='icon two' />
            </figure>
        </section>
    </div>
    

    <section className='explain'>
       <h3>
            Notre vision
        </h3> 
       <p className='caption'>
            Chaque année les tendances, les habitudes de consommation <span>évoluent </span> 
            et les acteurs de la restauration, peut importe leur secteur, doivent <span>s&#x27;adapter,
            innover, surprendre </span>et <span>anticiper la demande </span>sur le long terme, au mieux jusqu&#x27;à
            la fin des temps.
        </p>
        <p className='caption'>
            Les consommateurs d&#x27;aujourd&#x27;hui et de demain ne chercherons plus seulement à répondre à leurs besoins 
            primaires, le mot maître du siècle c&#x27;est <span>« l’expérience », une expérience à envier,</span> et c&#x27;est ce que 
            nous font ceux qui adhère à notre projet, ils concoivent les espaces qui créeront les expériences de demain.
        </p>

    </section>
    </MyConcept>
  )
}
