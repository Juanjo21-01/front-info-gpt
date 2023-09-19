import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          GPT-4 is OpenAI’s most advanced system
        </h1>

        <p>
          GPT-4 is more creative and collaborative than ever before. It can
          generate, edit, and iterate with users on creative and technical
          writing tasks, such as composing songs, writing screenplays, or
          learning a user’s writing style.
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
          <p>We spent 6 months making GPT-4 safer and more aligned</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
