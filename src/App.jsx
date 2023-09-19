import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT,
} from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Cabecera */}
      
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      {/* Marca */}
      <Brand />

      {/* Informacion */}
      <WhatGPT />
      <h1>Informacion GPT</h1>

      <Features />
      <Possibility />

      {/* Otros */}
      <CTA />

      {/* Blog */}
      <Blog />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
