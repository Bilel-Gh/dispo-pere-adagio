import styled from 'styled-components'
import Button from '@/components/globalComponents/button'

const MyRoad = styled.section`
  background-color: #F195BA;
    padding: 8%;
    .roadmapContainer{
        position: relative;
        display: flex;
        flex-direction: column;
        width: fit-content;
        padding: 0px 50px;
        align-items: center;
        margin: auto;
        justify-content: center;
        gap: 30px;
        h2{
            margin: 0;
            font-family: 'Poppins-ExtraBold';
            color: #333333;
            font-size: 45px;
            text-align: center;
            text-transform: uppercase;
            white-space: nowrap;
        }
        .arrow{
            left: 100%;
            position: absolute;
            height: 103px;
            width: 70px;
            background-image: url('/img/landing/arrow.webp');
            background-size: 70px 103px;
            background-repeat: no-repeat;
        }
    }
    @media (max-width: 900px) {
        .roadmapContainer{
            h2{
                font-size: 35px;
            }
        }
}

@media (max-width: 760px) {
        .roadmapContainer{
            width: 60%;
            h1{
                font-size: 28px;
            }
            .arrow{
                background : none
            }

        }
}

`

export default function Road() {
  return (
    <MyRoad id ='roadmap' className='section-roadmap'>
        <div className='roadmapContainer'>
            <h2>
                Notre plan d&#x27;action
            </h2>
            <div className='btn-roadmap'>
              <Button  link='/contact' name='btn-roadmap' color='black'>
                  Consulter notre roadmap
              </Button>
            </div>
            <div className='arrow'/>
        </div>
    </MyRoad>
  )
}
