import { useAos } from './useAos'
import Header from './components/Header'
import Hero from './components/Hero'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import VideoSection from './components/VideoSection'
import FifthSection from './components/FifthSection'
import SixthSection from './components/SixthSection'
import SeventhSection from './components/SeventhSection'
import EighthSection from './components/EighthSection'
import NinthSection from './components/NinthSection'
import Tenth2 from './components/Tenth2'
import Testimional from './components/Testimional'
import TenthSection from './components/TenthSection'
import Footer from './components/Footer'

export default function App() {
  useAos()
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <VideoSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <NinthSection />
        <Tenth2 />
        <Testimional />
        <TenthSection />
      </main>
      <Footer />
    </>
  )
}
