import Nav from '@/components/globalComponents/nav'
import Main from './sections/main'
import Concept from './sections/concept'
import RoadMap from './sections/roadmap'
import Datas from './sections/datas'
import Join from './sections/join'
import Faq from './sections/faq'
import Footer from '@/components/globalComponents/footer'


export default function Landing() {
  return (
    <section className='section-lading'>
      <Nav/>
      <Main/>
      <Concept/>
      <RoadMap/>
      <Datas/>
      <Join/>
      <Faq/>
      <Footer/>
    </section>
  )
}
