import "./styles.css";

const RandomChar = () => {
  const randomChar = Math.random().toString(36).substr(2, 1);
  return (
    <div className="random-char-grid">
      <span className="random-char">{randomChar}</span>
    </div>
  );
};

export default RandomChar;
