import './feature.css';

const Feature = ({ titulo, texto }) => {
  return (
    <div className="features-container-feature">
      <div className="features-container-feature-title">
        <div />
        <h2>{titulo}</h2>
      </div>
      <div className="features-container-feature-text">
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default Feature;
