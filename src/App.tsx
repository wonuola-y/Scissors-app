import Nav from './components/Nav';
import Hero from './components/Heo';
import Info from './components/Info';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import { Form } from './components/Form';
import Starting from './components/Starting';
import Footer from './components/Footer-section';



function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Info />
      <Pricing />
      <Form />
      <Faq />
      <Starting />
      <Footer />
    </div>
  );
}

export default App;
