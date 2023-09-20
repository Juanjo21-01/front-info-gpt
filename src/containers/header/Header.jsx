import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="header section__padding" id="inicio">
      <div className="header-content">
        <h1 className="gradient__text">
          GPT-4 es el sistema más avanzado de OpenAI
        </h1>

        <p>
          GPT-4 es más creativo y colaborativo que nunca. Puede generar, editar
          e iterar con los usuarios en tareas de escritura creativa y técnica,
          como componer canciones, escribir guiones o aprender el estilo de
          escritura de un usuario.
        </p>

        <div className="header-content-input">
          <input
            type="email"
            name=""
            id=""
            placeholder="Ingresa tu correo electronico"
          />
          <button>Empezar</button>
        </div>

        <div className="header-content-people">
          <img src={people} alt="people" />
          <p>
            Pasamos 6 meses haciendo que GPT-4 sea más seguro y esté más
            alineado
          </p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
