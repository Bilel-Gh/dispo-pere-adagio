import Link from 'next/link'
import styled from 'styled-components'


const Btn = styled.a`
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
  background: #9F9FED;
  border-radius: 10px;
  color: #333333;
  font-family: 'Poppins-ExtraBold';
  height: 70px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  width: max-content;
  &:hover{
    cursor: pointer
  }
`

export default function Button({children, ...props}) {
  return (

      <Link href={props.href}>
        <Btn >
            {children}
        </Btn>
      </Link>
  )
}