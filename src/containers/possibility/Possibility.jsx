import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="possibility-content">
        <h4>Solicite acceso anticipado para comenzar</h4>
        <h1 className="gradient__text">
          Las posibilidades están más allá de tu imaginación.
        </h1>
        <p>
          Cuando utilices algún sistema de chat con este modelo de lenguaje por
          inteligencia artificial, tendrás a tu disposición muchas funciones. Y
          es que con sistemas como ChatGPT puedes hacer muchas cosas, como
          pedirle que te explique cualquier cosa, concepto o evento. La IA
          mirará entre los datos con los que ha sido entrenada, y entonces te
          generará una respuesta.
        </p>
        <h4>Solicite acceso anticipado para comenzar</h4>
      </div>
    </div>
  );
};

export default Possibility;
