import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from 'styled-components'

import React, { useEffect } from 'react';


const MyNewsletter = styled.section`
.form {
    div{
        display: flex;
        gap: 20px;
    }
    input{
        padding: 10px;
        border: 2px solid #FDFCF3;
        color: #FDFCF3;
        background-color: transparent;
        border-radius: 10px;
        height: 40px;
        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color:#A1A1AA;
            opacity: 1; /* Firefox */
            font-family: "Poppins-Regular";

        }
    }
    button{
        background-color:#EB5B2D;
        text-transform: uppercase;
        color: #FFFFFF;
        cursor: pointer;
        position: relative;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        display: flex;
        width: 20%;
        align-items: center;
        justify-content: center; 
        font-family: "Poppins-ExtraBold";
        justify-content: center;
    }
}
@media (max-width: 1149px) {
    .form {
        div{
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            align-items: center;
            input{
                width: 60%!important
            }
        }
        button{
            padding: 10px;
        }
    }

}

    
`

function Newsletter() {
    const url = 'https://gmail.us11.list-manage.com/subscribe/post?u=3d31f48a331b75f9227fcef84&amp;id=01527515d4';
    const SimpleForm = () => < MailchimpSubscribe url={url} />
   
    useEffect(() => {
        document.querySelector("input[type='email']").placeholder='indiquer votre mail';
        document.querySelector("input[type='email']").parentNode.lastChild.textContent="Valider";
        document.querySelector("input[type='email']").parentNode.lastChild.classList.add("btn-send-mail");
    });

    return (
        <MyNewsletter className='section-newsletter'>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                <section className='form'>
                    <SimpleForm  onSubmitted={formData => subscribe(formData)} />
                    {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                    {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                    
                </section>
                )}
            />
        </MyNewsletter>
    );
  }
  
  export default Newsletter;