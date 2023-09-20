import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Texto',
    text: 'Nuestros modelos de texto son herramientas avanzadas de procesamiento del lenguaje que pueden generar, clasificar y resumir texto con altos niveles de coherencia y precisión.',
  },
  {
    title: 'Imagen',
    text: 'Nuestra investigación sobre modelado generativo de imágenes ha dado lugar a modelos de representación como CLIP, que crea un mapa entre texto e imágenes que una IA puede leer, y DALL-E, una herramienta para crear imágenes vívidas a partir de descripciones de texto.',
  },
  {
    title: 'Audio',
    text: 'Nuestra investigación sobre la aplicación de la IA al procesamiento y la generación de audio ha dado lugar a avances en el reconocimiento automático de voz y composiciones musicales originales.',
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          El futuro está aquí y sólo hay que darse cuenta. Da un paso hacia el
          futuro hoy y hazlo realidad.
        </h1>
        <p>Solicite acceso anticipado para comenzar</p>
      </div>
      <div className="features-container">
        {featuresData.map((feature) => (
          <Feature
            key={feature.title}
            titulo={feature.title}
            texto={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
