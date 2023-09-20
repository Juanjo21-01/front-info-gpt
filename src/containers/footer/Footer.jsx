import logo from '../../assets/logo4.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer section__padding ">
      <div className="footer-heading">
        <h1 className="gradient__text">
          ¿Quieres entrar en el futuro antes que los demás?
        </h1>
      </div>
      <div className="footer-btn">
        <button> Solicitar Acceso</button>
      </div>
      <div className="footer-links">
        <div className="footer-links-logo">
          <img src={logo} alt="logo" />
          <p>Todos los derechos reservados.</p>
        </div>
        <div className="footer-links-div">
          <h4>Enlaces</h4>
          <p>Redes Sociales</p>
          <p>Counters</p>
          <p>Contacto</p>
        </div>
        <div className="footer-links-div">
          <h4>Compañia</h4>
          <p>Terminos & Condiciones</p>
          <p>Politicas de Privacidad</p>
          <p>Contacto</p>
        </div>
        <div className="footer-links-div">
          <h4>Contáctanos</h4>
          <p>Juan José</p>
          <p>+502 12345678</p>
          <p>ejemplo@ejemplo.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          &copy; 2023 GPT-4. Desarrollado por
          <a
            href="https://github.com/Juanjo21-01"
            target="_blank"
            rel=" noreferrer"
          >
            {' '}
            Juan José López
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
