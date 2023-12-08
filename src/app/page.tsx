import Hero from './hero/page'
import AboutMe from './aboutme/page'
import Masonry from './masonry/page'
import Blog from './blog/page'
import Form from './form/page'
import Footer from './footer/page'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Masonry />
      <Blog />
      <Form />
      <Footer />
    </main>
  )
}
