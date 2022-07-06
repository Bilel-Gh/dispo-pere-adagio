import styled from 'styled-components'
import Newsletter from '@/components/globalComponents/newsletter'


const MyFooter = styled.footer`
position: relative;
    background: #333333;
    text-align: center;
    padding: 10px 0px 100px 0px;
    .container{
        width: 90%;
        margin: 0 auto; 
        color: #FDFCF3;

        .title{
            font-family: "Poppins-ExtraBold";
            text-transform: uppercase;
            font-size: 45px;
        }
        .formNewL{
            display: flex;
            justify-content: center;
            gap: 20px;
            .inputMail{
                padding: 10px;
                border: 2px solid #FDFCF3;
                background-color: transparent;
                border-radius: 54px;
                width: 30%;
                height: 40px;
            }
        }
        .bottomFooter{
            display: flex;
            margin-top: 5%;
            gap: 5%;
            justify-content: center;
            .logo{
                img{
                    width: 200px!important;
                    height: 110px!important;
                }
            }
            .more{
                gap: 20%;
                width: 40%;
                white-space: pre;
                display: flex;
                justify-content: center;
                .aboutUs,.letsTalk{
                    display: flex;
                    flex-direction: column;
                h2{
                    white-space: nowrap;
                    text-align: left;
                    font-size: 20px;
                    font-family: "Poppins-ExtraBold";
                    text-transform: uppercase;
                }
            }
            }
            
            ul{
                padding-left: 0;
                list-style: none;
                li{
                    font-style: italic;
                    text-align: left;
                }
            }
            
        }
        .copyRight{
            color: #FDFCF3;
            font-size: 14px;
            font-family: 'Helvetica-Regular';
            position: absolute;
            bottom: 10px;
            right: 50%;
            transform: translate(50%,-50%);

        }
    }
    @media (max-width: 900px) {
        .container{
            .title{
                font-size: 35px;
            }
            .formNewL{
                flex-direction: column;
                justify-content: center;
                gap: 15px;
                align-items: center;
                .inputMail{
                    width: 60%!important
                }
            }
            .footer{
                .container{
                    .bottomFooter{
                        flex-direction: column-reverse;
                        align-items: center;
                        gap: 30px;
                        .logo{
                            img{
                                width: 155px!important;
                                height: 86px!important;
                            }
                        }
                    }
                }
            }
        }
}

@media (max-width: 760px) {
        .container{
            .title{
                font-size: 28px;
            }
        }
    }
`

export default function Footer() {
  return (
    <MyFooter id='footer' className='section-footer'>
      <div className='container'>
          <h2 className='title'>Notre newsletter</h2>
          <p>Restez informer de nos actualités</p>
          <Newsletter/>

          <section className='bottomFooter'>
            <figure className='logo'>
                <img alt={'icon logo'} src='img/landing/logoWhite.webp' widht='200' height='110'/>
            </figure>
            
            <div className='more'>
              <div className='aboutUs'>
                <h2>À propos </h2>
                <ul>
                  <li>Qui sommes-nous ? </li>
                  <li>Nos locaux</li>
                </ul>
              </div>
              <div className='letsTalk'>
                <h2>On papote </h2>
                <ul>
                    <li>Nous écrire </li>
                </ul>
              </div>
            </div>

          </section>

          <span className='copyRight'>
            ©Copyright-UTOPIA
          </span>

      </div>
    </MyFooter>
  )
}
