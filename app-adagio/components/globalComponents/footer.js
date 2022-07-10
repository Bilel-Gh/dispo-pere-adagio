import styled from 'styled-components'
import Newsletter from '@/components/globalComponents/newsletter'


const MyFooter = styled.footer`
    width: 100%;
    background-color: #333333;
    padding: 60px 72px 20px;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins-Regular';
        .footContainer-top,
        .footContainer-bottom{
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: #FDFCF3;
            }
            h1{
                font-size: 16px;
                font-family: 'Poppins-ExtraBold';
                margin: 0 0 2em 0;
            }
            ul{
                font-size: 16px;
                li{
                    margin-bottom: 1em;
                }
            }
            a{
                color: inherit;
                text-decoration: none;
                cursor: pointer;
            }
            .footContainer-top_first{
                width: 35%;
                figure{
                    margin: 0 0 1em 0;
                }
                .social-wrapper_responsive{
                    display: none;
                }
                p{
                    color: #EB5B2D;
                    font-family: 'Poppins-ExtraBold';
                    font-size: 16px;
                }
            }
            .footContainer-top_second,
            .footContainer-top_third{
                width: 25%;
                ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                }
            }
            .footContainer-top_fourth{
                width: 25%;
                display: flex;
                justify-content: flex-end;
                button{
                    all: unset;
                    padding: 12px 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Poppins-ExtraBold';
                    font-size: 16px;
                    background: #EB5B2D;
                    border-radius: 8px;
                    cursor: pointer;
                }
            }
        .footContainer-top{
            margin-bottom: 45px;
        }
        .footContainer-bottom{
            font-size: 14px;
            .social-wrapper{
                width: 10%;
                display: flex;
                justify-content: space-between;
                img{
                    cursor: pointer;
                }
            }
        }
        @media (max-width: 1149px) {
            .footContainer-top{
                display: flex;
                text-align: center;
                flex-wrap: wrap;
                .footContainer-top_first{
                    width: 100%;
                    margin-bottom: 2em;
                    .social-wrapper_responsive{
                        display: block;
                        width: 136px;
                        margin: 0 auto 2em auto;
                        display: flex;
                        justify-content: space-between;
                        img{
                            cursor: pointer;
                        }
                    }
                    p{
                        margin-bottom: 1em;
                    }
                }
                .footContainer-top_second,
                .footContainer-top_third{
                    width: 100%;
                    margin-bottom: 2em;
                    h1{
                        margin-bottom: 1em;
                    }
                }
                .footContainer-top_fourth{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    h1{
                        margin-bottom: 1em;
                    }
                }
            }
            .footContainer-bottom{
                justify-content: center;
                .social-wrapper{
                    display: none;
                }
            }
        }
`

export default function Footer() {
  return (
    <MyFooter id='footer' className='section-footer'>
      <div className='footContainer-top'>
          <div className='footContainer-top_first'>
              <figure>
                  <img src="/img/logoWhite.webp" width="143.01" height="80" alt='logo pa' />
              </figure>

              <div className='social-wrapper_responsive'>
                  <img className='facebook' src='/img/fb.webp' alt='facebook icon'></img>
                  <img className='instagram' src='/img/insta.webp' alt='instagram icon'></img>
                  <img className='linkedin' src='/img/linkedin.webp' alt='linkedin icon'></img>
              </div>

              <Newsletter/>
          </div>

          <div className='footContainer-top_second'>
              <h1>À Propos</h1>
              <ul>
                  <li><a href="#">Qui sommes-nous</a></li>
                  <li><a href="#">Le concept</a></li>
                  <li><a href="#">Mentions légales & CGU</a></li>
              </ul>
          </div>

          <div className='footContainer-top_third'>
              <h1>Le site</h1>
              <ul>
                  <li><a href="#">Les prochains pop-up stores</a></li>
                  <li><a href="#">Les évènements</a></li>
                  <li><a href="#">Inscription</a></li>
              </ul>
          </div>
          
          <div className='footContainer-top_fourth'>
              <div className='fourth-wrapper'>
                  <h1>Besoin d&#x27;aide ?</h1>
                  <button className='button'>
                      <a href='#'>Écrivez-nous !</a>
                  </button>
              </div>
          </div>
      </div>

      <div className='footContainer-bottom'>
          <a href='#'>©Copyright-UTOPIA</a>

          <div className='social-wrapper'>
              <img className='facebook' src='/img/rs_fb.svg' alt='facebook icon'></img>
              <img className='instagram' src='/img/rs_insta.svg' alt='instagram icon'></img>
              <img className='linkedin' src='/img/rs_linkedin.svg' alt='linkedin icon'></img>
          </div>
      </div>

    </MyFooter>
  )
}
