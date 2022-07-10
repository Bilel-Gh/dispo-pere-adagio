import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


const MyBtn = styled.div`
  .btn{
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    display: flex;
    text-transform: uppercase;
    padding: 10px;
    align-items: center;
    justify-content: center; 
    font-family: "Poppins-ExtraBold";
    justify-content: center;
    width:100% ;
    font-weight:'bold'
}

.violet{
    background-color:#9F9FED; 
    color:#333333; 
    &:hover{
        background-color:#333333; 
        color:#9F9FED; 
    }
    
}
.black{
    background-color:#333333; 
    color:#FDFCF3; 
    &:hover{
        background-color:#FDFCF3; 
        color:#333333; 
    }
}
.white{
    background-color:#FDFCF3; 
    color:#333333; 
    &:hover{
        background-color:#333333; 
        color:#FDFCF3; 
    }
}
.white-low{
    background-color:#FDFCF3; 
    color:#333333; 
    text-transform: initial;
    font-family: "Poppins-Regular";
    &:hover{
        background-color:#333333; 
        color:#FDFCF3; 
    }
}
.pink{
    background-color:#F195BA; 
    color:#333333; 
    text-align: center;
    &:hover{
        background-color:#333333; 
        color:#F195BA; 
    }
}
.orange{
    background-color:#EB5B2D; 
    text-transform: initial;
    color:#FDFCF3; 
    font-family: "Poppins-Regular";
    &:hover{
        background-color:#333333; 
        color:#FDFCF3; 
    }
}
`


export default function Button({children, color, link,  name}) {

  const switchColor = (color) => {
    switch(color){
      case "violet":
        return "violet"
      case "black":
        return "black"
      case "white":
        return "white"
      case "white-low":
        return "white-low"
      case "pink":
        return "pink"
      case "orange":
        return "orange"
      default:
        return "neutral"
    }
  }

  return (

    <MyBtn>
      <Link href={link}>
      <a className={`btn ${name} ${switchColor(color)}`}>
        {children}
      </a>
      </Link>
    </MyBtn>
  )
}