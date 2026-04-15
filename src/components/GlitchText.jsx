const GlitchText = ({ text, className = '' }) => {
  return (
    <span
      className={`glitch ${className}`}
      data-text={text}
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {text}
    </span>
  );
};

export default GlitchText;
