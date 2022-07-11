import styled from 'styled-components'
import Burger from './burger'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MyNav = styled.header`
  /* background-color: #FDFCF3; */
  z-index: 1;
  display: flex;
  width: 100%;
  padding: 0px 30px;
  justify-content: space-between;
  position: relative;
  height: 100px;
  align-items: center;
  .logo{
      position: absolute;
      right: 20px;
      top: 15px;
  }
  li{
      list-style: none;
  }
  @media (max-width: 880px) {
        display: flex;
        padding: 0px 30px;
  }
`

export default function NavBar({ }) {
  // console.table(window.localStorage.userConnected)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <MyNav id='nav' className='section-nav'
      style={{
        position: (router.asPath === '/' || router.asPath.includes('/#')) ? 'initial' : 'absolute'
      }}
    >
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
    </MyNav>
  )
}
