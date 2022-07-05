import Burger from './burger';
import { useState } from 'react';
import styled from 'styled-components'

const MyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
`

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MyHeader className='header'> 
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
    </MyHeader>
  )
}