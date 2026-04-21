import Button from './Button';

export default function Hero({ title, subtitle, buttonText, onButtonClick, centered = false }) {
  return (
    <section className={`hero ${centered ? 'hero-centered' : ''}`}>
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {buttonText && <Button text={buttonText} onClick={onButtonClick} />}
      </div>
    </section>
  );
}
