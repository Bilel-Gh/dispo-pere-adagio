import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MySwitch = styled.label`
display: flex;
  cursor: pointer;
  cursor: pointer;
  width: 576px ;
  height: 90px;
  background: #FDFCF3;
  border: 4px solid #333333;
  border-radius: 10px;
  position: relative;
  transition: background-color 0.4s;
  .react-switch-checkbox {
    height: 0;
    width: 0;
    position: absolute;
    visibility: hidden;
  }
  .react-switch-button { // notselected
    position: absolute;
    z-index: 1;
    width: calc(576px / 2);
    height: 83px;
    // transition: 0.2s;
    /* background: #ff000078; */
    background: red;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    // border: solid red; 
  }
  .react-switch-checkbox:checked + .react-switch-button {
    left: 100%;
    transform: translateX(-100%);
  }
  
  // .react-switch-checkbox:active + .react-switch-button {
  //   width: 60px;
  // }

  .react-switch-labels {
    display: relative;
    z-index: 0;
    height: 100%;
    font: 14pt "Segoe UI", Verdana, sans-serif;
  }
  
  .react-switch-labels span {
    position: absolute;
    color: #333333;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    font-family: 'Poppins-Regular';
    
  }  
  .react-switch-labels span:first-child {
    left: 0;
  }
  .react-switch-labels span:last-child {
    right: 0;
  }
  
 

`

export default function Switch(props) {
  const {
    onColor, handleToggle,isOn, valOne, valTwo
  } = props

  console.log('handleToggle', isOn)

  return (
    <section className='section-switch'>
      <MySwitch style={{ background: isOn && onColor }} className="react-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        <span>{valOne}</span>
        <span>{valTwo}</span>
      </div>
    </MySwitch>

    </section>

  )
}
