import './app.scss'
import Navbar from './components/Navbar/Navbar';
import Parallex from './components/Parallex/Parallex';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';

const App = () => {
  return (
    <div>
      <section id='HomePage'><Navbar /><Hero /></section>
      <section id='Services'><Parallex type="Services" /></section>
      <section><Services /></section>
      <section id='PortFolio'><Parallex type="Portfolio" /></section>
      <Portfolio />
      <section id='Contact'><Contact /></section>
    </div>);
};

export default App;
