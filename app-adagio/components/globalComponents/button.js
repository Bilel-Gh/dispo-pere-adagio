import Link from 'next/link'
import styled from 'styled-components'


const Btn = styled.a`
  display: flex;
  background: #9F9FED;
  border-radius: 10px;
  text-transform: uppercase;
  color: #333333;
  font-family: 'Poppins-ExtraBold';
  height: 70px;
  align-items: center;
  justify-content: center;
`

export default function Button({children, ...props}) {
  console.log('oui')
  console.log('props', props)
  return (

      <Link href={props.href}>
        <Btn >
            {children}
        </Btn>
      </Link>
  )
}