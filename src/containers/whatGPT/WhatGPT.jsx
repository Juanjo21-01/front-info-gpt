import Feature from '../../components/feature/Feature';
import './whatGPT.css';

const WhatGPT = () => {
  return (
    <div className="gpt section__margin" id="que-es">
      <div className="gpt-feature">
        <Feature
          titulo="¿Qué es GPT-4?"
          texto="es un sistema que ha sido entrenado para mantener conversaciones con cualquier persona, y en cualquier idioma en el que le escribas. Sus algoritmos analizan las palabras que le escribes, entienden su orden, su sentido e interpretan lo que quieres decir, y luego generan una respuesta basada en la información con la que ha sido entrenada."
        />
      </div>
      <div className="gpt-heading">
        <h1 className="gradient__text">
          Las posibilidades están más allá de tu imaginación.
        </h1>
        <p>Explora la biblioteca</p>
      </div>
      <div className="gpt-container">
        <Feature
          titulo="Seguridad y alineación"
          texto="Incorporamos más comentarios humanos, incluidos comentarios enviados por usuarios de ChatGPT, para mejorar el comportamiento de GPT-4. También trabajamos con más de 50 expertos para obtener comentarios tempranos en dominios que incluyen la seguridad de la IA."
        />
        <Feature
          titulo="Infraestructura"
          texto="
          GPT-4 fue entrenado en supercomputadoras Microsoft Azure AI. La infraestructura optimizada para IA de Azure también nos permite entregar GPT-4 a usuarios de todo el mundo."
        />
        <Feature
          titulo="Limitaciones"
          texto="GPT-4 todavía tiene muchas limitaciones conocidas que estamos trabajando para abordar, como prejuicios sociales, alucinaciones e indicaciones adversas. Fomentamos y facilitamos la transparencia, la educación de los usuarios y una alfabetización más amplia en IA a medida que la sociedad adopta estos modelos."
        />
      </div>
    </div>
  );
};

export default WhatGPT;
