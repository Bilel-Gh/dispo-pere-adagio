import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MyDatas = styled.section`
        background-color:#FDFCF3 ;

  height: 100%;
    display: flex;
    flex-direction: column;
    .mainTitle{
        width: 100%;
        padding:5% 10%;
        display: flex;
        text-transform: uppercase;
        font-family: "Poppins-ExtraBold";
        color: #333333;
        justify-content: flex-start;
        flex-direction: column;
        background-image: url('/img/landing/arrow.webp');
        background-size: 70px 100px;
        background-repeat: no-repeat;
        background-position: 50% 100%;
        .title{
            margin: 0;
            font-size: 45px;

        }
    }
    .data{
        padding:5% 10%;
        .dataContainer{
            position: relative;
            justify-content: space-around;
            display: flex;
            gap: 80px;
            .job{
                display: flex;
                width: 343px;
                gap: 10px;
                flex-direction: column;
                .jobImg{
                    z-index: 1;
                    height: auto;
                    // width: 343px;

                    width: 100%;
                }
                .jobData{
                    margin : 0;
                    color: #F195BA;
                    font-size: 57px;
                    text-align: center;
                    text-shadow: #fff 2px 1px 0px, #F195BA 3px 1px 0px, 0px 0px 0px #9f9fed
                }
                .jobText{
                    margin : 0;
                    font-family: 'Poppins-ExtraBold';
                    // font-style: italic;
                    color: #333333;
                    font-size: 19px;
                    text-align: center;
                }
            }
            
        }
    }
    @media (max-width: 1300px) {
        .mainTitle{
            background: none;
        }
        .data{
            .dataContainer{
                gap: 50px;
                .job{
                    .jobImg{
                        z-index: 1;
                        width: 100%;
                    }
                    .jobData{
                        font-size: 53px;
                    }
                    .jobText{
                        font-size: 16px;
                    }
                }
            }
        }
}

@media (max-width: 900px) {
        .mainTitle{
            .title{
                font-size: 35px;
            }
        }
        .data{
            .dataContainer{
                gap: 50px;
                .job{
                    .jobImg{
                        z-index: 1;
                        width: 100%;
                    }
                    .jobData{
                        font-size: 49px;
                    }
                    .jobText{
                        font-size: 12px;
                    }
                }
            }
        }
}


@media (max-width: 850px) {
        .mainTitle{
            background-position: 70% 100%;
        }
        .data{
            .dataContainer{
                gap: 25px;
                flex-direction: column;
                align-items: center;
                .job{
                    flex-direction: row;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-around;
                    &:nth-child(2) {
                        flex-direction: row-reverse;
                    }
                    .jobImg{
                        height: 270px;
                        width: initial;

                    }
                    .jobDetails{
                        display: flex;
                        flex-direction: column;
                        
                    }

                }
            }
        }
}

@media (max-width: 760px) {
        .mainTitle{
            .title{
                font-size: 28px;
            }
        }
        .mainTitle{
            background-image: none;
        }

}

@media (max-width: 600px) {

        gap: 0px;
        padding: 40px 0px;

        .data{
            gap: 60px;
            .dataContainer{
                gap: 40px;
                flex-direction: column;
                align-items: center;
                .job{
                    flex-direction: row;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-around;
                    
                    .jobImg{
                        display: none;

                    }
                    .jobDetails{
                        gap: 25px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        .jobData{
                            text-shadow: #FDFCF3 2px 1px 0px, #F195BA 3px 1px 0px, 0px 0px 0px #FDFCF3;
                            width: max-content;
                            padding: 5px 15px;
                            color: #F195BA;
                            border-radius: 15px;
                        }
                        
                        .jobText{
                            color: #3D3D3D;
                        }
                    }
                }
            }
        }
        .mainTitle{
            padding: 0px;
            width: 100%;
            align-items: center;
            .title{
                font-size: 20px;
                text-align: center;
            }
            .arrow{
                display: none;
            }
        }
        .data{
            .dataContainer{
                gap: 50px;
                .job{
                    flex-direction: column;
                    justify-content: space-around;
                    &:nth-child(2) {
                        flex-direction: column;
                    }
                }
            }
        }
}
`

export default function Datas() {

  const artisans= [
    {
        value : 'kitchen',
        data : '81%',
        text : 'des Français accordent pleine confiance aux artisans'

    },
    {
        value : 'bakery',
        data : '60%',
        text : "des entreprises artisanales françaises ne disposent pas d’importants moyens financiers"

    },
    {
        value : 'butcher',
        data : '20%',
        text : 'contribuent à hauteur de 20% du pib en France'

    },
  ]
  return (
    <MyDatas  id ='data' className='section-datas'>
      <div className='mainTitle'>
            <h2 className='title'>
                Les entreprises artisanales <br/>
                En quelques chiffres
            </h2>

        </div>
        <div className='data'>
                <section className='dataContainer'>
                    {
                        artisans.map((artisan, index) => (
                            <article className='job' key={index} >
                                <img className='jobImg' src={`img/landing/${artisan.value}.webp`} width='345' height='390' alt={`${artisan.value} svg`}/>
                                <div className='jobDetails'>
                                    <h3 className='jobData'>{artisan.data}</h3>
                                    <h3 className='jobText'>{artisan.text}</h3>
                                </div>
                                
                            </article>
                        ))
                    }
                </section>
        </div>
    </MyDatas>
  )
}
