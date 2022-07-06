import styled from 'styled-components'

const Home = styled.section`
  background-color: #FDFCF3;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
  .homeContainer{
      z-index: 0;
      display: flex;
      flex-direction: column;
      .main{
        background-image: url(/img/landing/butcherHome.webp);
        background-size:  50% 100%;
        background-repeat: no-repeat;
        background-position: 100% 0%;
        position: relative;
        display: flex;
        padding: 5% 5% 0% 5%;
        height: 60vh;
        justify-content: space-between;
        align-items: flex-end;
        .title{
          z-index: 2;
          position: relative;
          width: 55%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0px;
          gap: 5%;
          font-size: 6vw;
          color: #FDFCF3;
          text-transform: uppercase;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
          background-image: url('/img/landing/wind.webp');
          background-size: 110px 110px;
          background-repeat: no-repeat;
          justify-content: center;
          background-position: 15% 90%;
          span{
            &:nth-child(1){
              font-size: 3vw;
              width: fit-content;
              background: #F195BA;
              border-radius: 15px;
              padding: 10px;
              text-align: center;
            }
            &:nth-child(2){
              font-family: "Fascinate-Regular";
              span{
              text-transform: initial;
              font-size: 5vw;
              background: none;
              line-height: 0;
                z-index: 1;
                text-shadow:none;
                color: #000;
                width: fit-content;
                font-family: "BrittanySignature";
              }
            }
          }
        }
      }
      .info{
        display: flex;
        flex-direction: column;
        font-family: "Poppins-Regular";
        font-style: italic;
        align-items: center;
        margin: 0 auto;
        width: 60%;
        height: 100%;
        font-size: 19px;
        .infoTitle{
          font-family: "Poppins-ExtraBold";
          text-transform: uppercase;
        }
        .infoPara{
          text-align: center;
          span{
              font-family: "Poppins-ExtraBold";
          }
        }
      }

      
  }
  @media (max-width: 1360px) {
        .homeContainer{
          gap: 0px;
        }
      }

  @media (max-width: 1250px) {
    .homeContainer{
      .main{
        height: 50vh;
      }
    }
  }
  @media (max-width: 1090px) {
    min-height: auto;
    .homeContainer{
      .main{
        height: 40vh;
      }
    }
  }

@media (max-width: 935px) {
    .homeContainer{
      .main{
        background-image: none;
        flex-direction: column; //none
        .title, .info{
          width: 100%;
        }
        .title{
          font-size: 10vw;
          background-position: 10% 100%;
          span{
            &:nth-child(1){
              font-size: 5vw;
            }
          }
        }
      }
      .info{
        width: 80%;
      }
    }
  }

@media (max-width: 750px) {
    height: initial!important;
    min-height: auto;
    .homeContainer{
      .main{
        height: initial;
        .title{
          gap: 25px;
          border: solid;
          width: 100%;
          background-size: 115px 115px!important;
        }
        .info{
          width: 100%;

          font-size: 16px;
          div{
            margin: 0 auto;
            width: 80%;
            text-align: center;
          }
        }
      }
    }
}

@media (max-height: 750px) {
    .homeContainer{
      gap: 60px;

      .main{
        height: initial!important;
        margin: initial!important;
        padding:5% 5% 0% 5%;
      }
    }
    
  }

`

export default function Main() {
  return (
    <Home className='section-main'>
      <div className='homeContainer'>
        <main className='main'>
          <h1 className='title'>
            <span>Les espaces culinaires</span>
            <span>naissent
              <span>de la</span>
            </span>
            <span>symbiose</span>
          </h1>
        </main> 
        <section className='info'>
            <h1 className='infoTitle'>Père adagio</h1>
            <p className='infoPara'>
              <span>La première plateforme</span>  &nbsp;qui rassemble des
              acteurs de l&#x27;artisanat culinaire autour d&#x27;un projet commun, 
              la création d&#x27;espaces culinaires partagés, pour la valorisation 
              du secteur.
            </p>
        </section>
      </div>
    </Home>
  )
}
