import Main from './sections/main'
import Concept from './sections/concept'
import RoadMap from './sections/roadmap'
import Datas from './sections/datas'
import Join from './sections/join'
import Faq from './sections/faq'

export default function Landing() {
  return (
    <section className='section-lading'>
      <Main/>
      <Concept/>
      <RoadMap/>
      <Datas/>
      <Join/>
      <Faq/>
    </section>
  )
}
