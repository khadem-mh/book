interface BackgroundBubblesProps {
  color1?: string;
  color2?: string;
  color3?: string;
}

const BackgroundBubbles: React.FC<BackgroundBubblesProps> = ({
  color1 = "rgba(14,165,233,0.06)",
  color2 = "rgba(251,146,60,0.045)",
  color3 = "rgba(99,102,241,0.03)",
}) => {
  const style: React.CSSProperties = {
    backgroundImage: `
      radial-gradient(circle at 10% 15%, ${color1} 0, transparent 12%),
      radial-gradient(circle at 80% 30%, ${color2} 0, transparent 16%),
      radial-gradient(circle at 50% 80%, ${color3} 0, transparent 20%)
    `,
    backgroundRepeat: "no-repeat",
  };

  return <div className="absolute inset-0 -z-10" style={style} aria-hidden />;
};

export default BackgroundBubbles;
