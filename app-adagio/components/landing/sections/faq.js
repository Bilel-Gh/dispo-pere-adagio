import styled from 'styled-components'
import Button from '@/components/globalComponents/button'
import { useState } from 'react';

const MyFaq = styled.section`
position: relative;
    margin-bottom: 90px;
    background-image: url('/img/landing/questionMark.webp');
    background-size: 150px 152.98px;
    background-repeat: no-repeat;
    background-position: 0% 0%;
    .headerOne{
        text-transform: uppercase;
        font-family: "Poppins-ExtraBold";
        font-size: 45px;
        color: #333333;
        margin: 8% 0 96px 10%;
    }

    .subContainer{
        .containerFaq{
            height: 100%;
            width: 62%;
            margin: auto;
            margin-bottom: 49px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            color: #F195BA;
            font-family: "Poppins-Regular";
            .faq{
                width: 100%;
                margin: 0 0 10px 0;
                .question{
                    border: 2px solid #F195BA;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 16px 0 16px;
                    font-family: "Poppins-ExtraBold";
                    font-size: 15px;
                    text-transform: uppercase;
                    .svgTurn{
                        transform: rotate(0deg);
                        transition:0.5s;
                    }
                    .svg{
                        transform: rotate(180deg);
                        transition:0.5s;
                    }
                    h2{
                        width: 80%;
                    }
                }
                .answer{
                    max-height: 63px;
                    border: 2px solid #F195BA;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 16px 0 16px;
                    font-size: 19px;
                }
            }
        }
        .txtFaq{
            font-family: "Poppins-Regular";
            font-size: 19px;
            text-align: center;
            margin-bottom: 49px;
            .spanFaq{
                font-family: "Poppins-ExtraBold";
                font-style: italic;
            }
        }
        .btn{
            width: fit-content;
            display: flex;
            justify-content: center;
            margin: auto;
            margin-bottom: 60px;

        }
        .socialMedia{
            width: 40%;
            margin: auto;
            display: flex;
            justify-content: space-evenly;
            a{
                cursor: pointer;
            }
        }
    }

    @media (max-width: 900px) {
        background-image: none;
        .headerOne{
            font-size: 35px;
            text-align: center;
            margin-left: 0;
            margin-top: 12%;
            margin-bottom: 6%;
        }
        .socialMedia{
            gap: 23%;
        }
}

@media (max-width: 760px) {
        .headerOne{
            font-size: 28px;
        }
}
`

export default function Faq() {

    const qas= [
        {
            question : 'Pourquoi père adagio ?',
            answer : 'Réponse...'
        },
        {
            question : 'Quand le père adagio a été fondé ?',
            answer : 'Réponse...'
        },
        {
            question : `Dans l'avenir vous souhaitez étendre votre offre aux commerçants (hors artisanat) ?`,
            answer : 'Réponse...',
        },
        {
            question : 'Vous vous présentez ?',
            answer : 'Réponse...',
        },
    ]


    const [tab, setTab] = useState([false, false, false, false, false, false]);

    const toggle = (i) => {
        const tempTab = [].concat(tab)
        tempTab[i] =!tab[i]
        setTab(tempTab) 
    }
        
    return(
        <MyFaq id="faq" className='mainContainer'>
            <h2 className='headerOne'>Vous avez des questions ?</h2>
            <div className='subContainer'>
                <div className='containerFaq'>
                    {
                        qas.map((qa, index) => (
                            <article className='faq' id={index} key={index}>
                                <div className='question' onClick={() => toggle(index)}>
                                    <h2>{qa.question}</h2>
                                    <svg className={tab[index] ? 'svg' :'svgTrun'} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F195BA" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                                </div>  
                                {
                                    tab[index] &&
                                    <div className='answer' >
                                        <p>
                                            {qa.answer}
                                        </p>
                                    </div>     
                                }
                                              
                            </article>
                        ))
                    }
                </div>

                <div className='txtFaq'>
                    <p>Vous avez d&#x27;autres <span className='spanFaq'>questions</span> ?</p>
                </div>

                <div className='btn'>
                    <Button color='violet' link='/contact' text="On prend contact ?">On prend contact !</Button>
                </div>

                <div className='socialMedia'>
                    <a className='rs-fb' href='https://www.facebook.com/pereadagio'>
                        <img alt='facebook' src='/img/landing/facebook.svg' width='40' height='40'></img>
                    </a>
                    <a  className='rs-insta' href='https://www.instagram.com/pereadagio/'>
                        <img alt='instagram' src='/img/landing/instagram.svg' width='40' height='40'></img>
                    </a>
                    <a  className='rs-lkn' href='https://www.youtube.com/channel/UCBFPQC4zt_I0oVBIMBWaCYw'>
                        <img alt='youtube' src='/img/landing/youtube.svg' width='40' height='40'></img>
                    </a>
                </div>

            </div>
        </MyFaq>
    )
}