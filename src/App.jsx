import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Features from './components/Features.jsx';
import LivePreview from './components/LivePreview.jsx';
import FooterCTA from './components/FooterCTA.jsx';
import './styles/landing.css';

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <TrustStrip />
      <Features />
      <LivePreview />
      <FooterCTA />
    </div>
  );
}
