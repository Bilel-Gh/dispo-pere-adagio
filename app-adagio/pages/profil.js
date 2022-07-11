import styled from 'styled-components'
import Header from '@/components/globalComponents/nav'
import Button from '@/components/globalComponents/button'
import Footer from '@/components/globalComponents/footer'
import {useState} from 'react';

const MyHeader = styled.main`

    .header{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        position: relative;
        padding: 4em 4em 1em 4em;
        figure{
            all: unset;
        }
        article{
            max-height: fit-content;
            width: 78%;
            display: flex;
            flex-direction: column;
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
            .bio{
                border-bottom: 2px solid #E4E4E7;
                margin-bottom: 1em;
                .content-medium{
                    margin-bottom: 1.5em;
                }
            }
            .account-tags{
                display: flex;
                justify-content: space-between;
                padding: 0 0.5em;
                .tags-default{
                    margin-right: 3em;
                    cursor: pointer;
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
            top: 6%;
        }
    }

    .main-container{
        background-color: white;
        width: 100%;
        padding: 4em 4em 0 4em;
        .suivi{
            h1{
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
        }
    }
`

export default function Profil() {

    /*const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };*/

    return (
        <MyHeader>
            <header className='header'>
                <figure>
                    <img alt='profile picture' src='/img/dispo/profilePic.webp'>
                    </img>
                </figure>

                <article>
                    <div className='article-wrapper'>
                        <h5 className='H5'>Pauline</h5>
                        <div className='rating'>
                            <img src='/img/dispo/star.svg'></img>
                            <p className='form-label'>4.6</p>
                        </div>                        
                    </div>

                    <div className='profession'>
                        <p className='content-medium'>Chocolatière</p>
                        <p className='content-medium'>Le Havre</p>
                    </div>

                    <div className='bio'>
                        <p className='content-medium'>
                        Le métier de chocolatière est pour moi symbole de passion, de partage, d'engagement et d'innovation.
                        <br></br> 
                        Le chocolat est une matière précieuse qu'il faut savoir apprécier à sa juste valeur !
                        </p>
                    </div>

                    <div className='account-tags'>
                        <div /*className='tags-default'*/ /*className={isHovering ? 'tags-actif' : ''} onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}*/>
                            <a className='tags-default' href='#'>Mon suivi</a>
                            <a className='tags-default' href='#'>Information personnelles</a>
                            <a className='tags-default' href='#'>Notification</a>
                            <a className='tags-default' href='#'>Mon compte</a>
                        </div>                  
                        <a href='#'>Se déconnecter</a>
                    </div>
                </article>
                <div className='sticker'>
                </div>
            </header>

            <main className='main-container'>
                <section className='suivi'>
                    <h1>Mon suivi</h1>
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
                </section>
            </main>
        </MyHeader>
    )
}