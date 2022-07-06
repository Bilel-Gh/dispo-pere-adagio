import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MySwitch = styled.label`
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: #fff;
  border: solid red;
  transition: background-color 0.2s;
  .react-switch-checkbox {
    height: 0;
    width: 0;
    position: absolute;
    visibility: hidden;
  }
  &, .react-switch-button {
    z-index: 1;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    transition: 0.2s;
    background: #000;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
 .react-switch-checkbox:checked + .react-switch-button {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

.react-switch-checkbox:active + .react-switch-button {
  width: 60px;
}

.react-switch-labels {
  display: relative;
  z-index: 0;
  height: 100%;
  font: 14pt "Segoe UI", Verdana, sans-serif;
}

.react-switch-labels span {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
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
    onColor, handleToggle,isOn
  } = props

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
        <span>PT</span>
        <span>EN</span>
      </div>
    </MySwitch>

    </section>

  )
}
