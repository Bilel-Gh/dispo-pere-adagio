import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from 'styled-components'
import React, { useEffect } from 'react';

const Section = styled.section`
    width: 100%;
`

const Form = styled.section`
    div{
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }
    input{
        padding: 10px;
        border: 2px solid #9F9FED;
        color: #9F9FED;
        background-color: transparent;
        border-radius: 10px;
        width: 30%;
        height: 40px;
        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: rgba(159, 159, 237, 0.5);
            font-family: 'Poppins-ExtraBold';
            opacity: 1; /* Firefox */
        }
    }
    button{
        background-color: #9F9FED;
        text-transform: uppercase;
        color: #333333;
        font-family: 'Poppins-ExtraBold';
        cursor: pointer;
        position: relative;
        border-radius: 10px;
        border: none;
        display: flex;
        width: 20%;
        align-items: center;
        justify-content: center; 
    }

`


function Newsletter() {
    const url = 'https://gmail.us11.list-manage.com/subscribe/post?u=3d31f48a331b75f9227fcef84&amp;id=01527515d4';
    const SimpleForm = () => < MailchimpSubscribe url={url} />
   
    useEffect(() => {
        document.querySelector("input[type='email']").placeholder='Indiquez votre adresse mail';
        document.querySelector("input[type='email']").parentNode.lastChild.textContent="Valider";
    });

    return (
        <Section className='formsection'>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                <Form className='form'>
                    <SimpleForm  onSubmitted={formData => subscribe(formData)} />
                    {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                    {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                    
                </Form>
                )}
            />
        </Section>
    );
  }
  
  export default Newsletter;