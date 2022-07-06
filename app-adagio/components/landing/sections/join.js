import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MyJoin = styled.section`
position: relative;
    .join{
        padding:10%;
        position: relative;
        background-color: #EB5B2D;
        width: 100%;
        gap: 10px;
        display: flex;
        flex-direction: column;
        background-image: url('/img/landing/ppp.webp');
        background-size: 160px 160px;
        background-repeat: no-repeat;
        background-position: 25% 30%;
        .title{
            text-transform: uppercase;
            font-family: 'Poppins-ExtraBold';
            font-size: 45px;
            color: #FDFCF3;
            position: relative;
            z-index: 1;
            margin: 0 auto;
            text-align: center;
        }
        .joinContainer{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            color: #FDFCF3;
            gap: 30px;
            padding-left: 35%;
            p{
                font-family: "Poppins-Regular";
                span{
                    font-weight: bold;
                }
            }
        }

    }
    .heart{
        z-index: 1;
        position: absolute;
        top: 75%;
        right: 0%;
        height: 230px;
        width: 230px;
        background-image: url('/img/landing/heart.webp');
        background-size: 230px 230px;
        background-repeat: no-repeat;
        background-position: 100% 100%;

    }
    @media (max-width: 1100px) {
        .join{
            background-position: 20% 30%;
        }
        .heart{
            background-size: 120px 130px;
        }
}

@media (max-width: 900px) {
        .join{
            .title{
                font-size: 35px;
            }
        }
        .heart{
            top: 85%;
            height: 100px;
            width: 80px;
            background-size: 80px 100px;
        }
}


@media (max-width: 850px) {
        .join{
            background-image: none;
            .title{
                line-height:45px;
            }
            .joinContainer{
                align-items: center;
                text-align: center;
                padding-left: initial;
            }
        }
        .heart{
            top: 90%;
            height: 80px;
            width: 60px;
            background-size: 60px 80px;
        }
}


@media (max-width: 760px) {
        .join{
            .title{
                font-size: 28px;
                line-height:28px;

            }
        }
}

@media (max-width: 550px) {
        .join{
            .joinContainer{
                flex-direction: column;

                p{
                    width: 100%;
                }
                
            }
        }
}
`

export default function Join() {

    return (
        <MyJoin id ='join' className='section-join'>

            <section className='join'>
                <h2 className='title'>
                    Vous nous rejoignez <br/>
                    dans l&#x27;aventure ? 
                </h2>
                <div className='joinContainer'>
                    
                    <p>
                        Nous sommes en recherche constante de 
                        <span> &nbsp; nouveaux partenaires  &nbsp; </span>
                        pour intégrer notre concept store ou le faire grandir. 
                        Que vous soyez un &nbsp;
                        <span> artisan &nbsp;</span> ou petit 
                        <span> &nbsp; commerçant.</span>
                    </p>
                    <Button link='mailto:bonjour.utopia@gmail.com' color='white'>
                        Nous rejoindre
                    </Button>

                    
                </div>
            </section>
            <div className='heart'/>
        </MyJoin>
    )
}