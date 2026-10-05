import TopBar from '../components/TopBar.jsx';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import TrustBar from '../components/TrustBar.jsx';
import About from '../components/About.jsx';
import Leader from '../components/Leader.jsx';
import FocusAreas from '../components/FocusAreas.jsx';
import Vision from '../components/Vision.jsx';
import Impact from '../components/Impact.jsx';
import Activities from '../components/Activities.jsx';
import Events from '../components/Events.jsx';
import Join from '../components/Join.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Leader />
        <FocusAreas />
        <Vision />
        <Impact />
        <Activities />
        <Events />
        <Join />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
