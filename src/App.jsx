import './app.scss'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Test from './test';

const App = () => {
  return <div>
    <section id='HomePage'>
      <Navbar />
      <Hero />
    </section>
    <section id='Services'>Parallex</section>
    <section>Services</section>
    <section id='PortFolio'>Parallex</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
    {/* <Test /> */}
  </div>;
};

export default App;
