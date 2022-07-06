import styled from 'styled-components'
import Header from '@/components/globalComponents/nav'


const MyForm = styled.section`
  background-color: #FDFCF3;
    position: relative;
    min-height: 100vh;
    .form{
        min-height: calc( 100vh - 100px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        .formInfo{
            display: flex;
            width: 100%;
            gap: 10%;
            align-items: center;
            justify-content: center;
            p{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                label{
                    text-align: center;
                    color: #333333;
                    font-style: italic;
                    font-family: "Poppins-ExtraBold";
                    font-size: 15px;
                }
                input{
                    color: #9F9FED;
                    border: 2px solid #9F9FED;
                    border-radius: 10px;
                    height: 63px;
                    width: 30vw;
                    padding: 5%;
                    &::placeholder {
                        font-family: "Poppins-ExtraBold";
                        color: #9F9FED;
                    }
                }
            }
        }
        .formQuestion{
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 10px;
            .formContainer{
                border: 2px solid #F195BA;
                border-radius: 10px;
                padding: 10px 30px;
                width: 25%;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                justify-content: space-between;
                .formtitle{
                    h2{
                        font-family: "Poppins-ExtraBold";
                        color:#F195BA;
                        font-size: 15px;
                        .line{
                            height: 2px;
                            width: 100%;
                        }
                    }
                }
                .formmain{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    label{
                        color: #333333;
                        font-style: italic;
                        font-family: "Poppins-ExtraBold";
                        font-size: 13px;
                    }
                    textarea{
                        border: solid;
                        color: #9F9FED;
                        border: 2px solid #9F9FED;
                        border-radius: 10px;
                        height: 63px;
                        padding: 5%;
                        min-height: 63px;
                        resize: vertical;
                        &::placeholder {
                            font-family: "Poppins-ExtraBold";
                            color: #9F9FED;
                        }
                    }
                    
                }
                
            }
        }
        .btn{
            width: 20%;
            cursor: pointer;
            position: relative;
            border-radius: 10px;
            border: none;
            font-weight: bold;
            display: flex;
            text-transform: uppercase;
            padding: 15px;
            align-items: center;
            justify-content: center; 
            font-family: "Poppins-ExtraBold";
            justify-content: center;
            font-weight:'bold';
            background-color:#9F9FED; 
            color:#333333; 
            &:hover{
                background-color:#333333; 
                color:#9F9FED; 
    }
        }
    }
    @media (max-width: 1130px) {
        .form{
            justify-content: flex-start;
            .formQuestion{
                gap: 70px;
                width: 100%;
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                align-items: center;
                .formContainer{
                    width: 70%;
                    .formmain{
                        width: 80%;
                        textarea{
                            height: 103px;
                            min-height:103px;
                            width: 100%;
                    }
                        
                    }
                }
            }
            padding-bottom: 5%;
        }
}

@media (max-width: 550px) {
        .form{
            .formInfo{
                width: 100%;

                flex-direction: column;
                p{
                width: 100%;

                    input{
                        width: 75%;

                    }
                }
            }
            .formQuestion{
                .formContainer{
                    padding: 10px 0px;
                    .formmain{
                        textarea{
                            width: 100%;
                        }
                    }
                }
            }
        }
}

`

export default function Form() {


    const questions= [
        {
            id: 'aide',
            title : 'J’ai besoin d’aide sur un de mes projets',
            question : 'Comment résumeriez-vous votre besoin en quelques mots ?',
            value : 'Répondez ici'
        },
        {
            id: 'dev',
            title : 'J’ai une idée de développement de concept store',
            question : 'Comment résumeriez-vous votre idées en quelques mots ?',
            value : 'Répondez ici'
        },
        {
            id:'contact',
            title : 'J’ai simplement envie de vous contacter',
            question : 'Pourquoi souhaitez vous nous contacter ?',
            value : 'Répondez ici'
        },
    ]

  return (
    <MyForm id ='form' className='section-form'>
        <Header />

        <div className='form'>
            <div className='formInfo'>
                <p>
                    <label>Quel est votre prenom ?</label>
                    <input type="text" id="name" name="name" required placeholder='Pierre'/>
                </p>
                <p>
                    <label >Quel est votre adresse mail ?</label>
                    <input type="text" id="email" name="email" required placeholder='pierre@example.com'/>
                </p>
                
            </div>
            <section className='formQuestion'>
                {questions.map((q,index) => (
                    <article className='formContainer' id={q.id} key={index}>
                        <div className='formtitle'>
                            <h2>{q.title}</h2>
                            <div className='line'></div>
                        </div>
                        <div className='formmain'>
                            <label>{q.question}</label>
                            <textarea type="text" id="email" name="email" required placeholder={q.value}/>
                        </div>
                    </article>
                ))
                }
            </section>
            <div className='btn'>
              Envoyer
            </div>
            


        </div>

    </MyForm>
  )
}