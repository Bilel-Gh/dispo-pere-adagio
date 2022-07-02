import Burger from './burger';
import { useState } from 'react';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='header'> 
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}