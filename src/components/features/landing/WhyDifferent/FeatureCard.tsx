export interface FeatureCardProps {
  src: string;
  title: string;
  desc: string;
  textBtn?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ src, title, desc, textBtn }) => {
  return (
    <div className="relative p-5 rounded-3xl bg-transparent shadow border-2 border-dashed border-black/40 transition-transform hover:scale-105 flex gap-4 items-start overflow-hidden">
      
      <div className="absolute -right-8 top-8 w-28 h-28 rounded-full bg-gradient-to-tr from-white to-black -z-10 pointer-events-none"></div>

      <div className="flex items-center gap-3">
        <img src={src} alt={title} className="w-24 bg-white rounded-full p-1" />
        
        {textBtn && (
          <p className="absolute top-2 left-2 text-white bg-black px-2 text-xs rounded-full animate-pulse">
            {textBtn}
          </p>
        )}

        <div className="text-right">
          <div className="font-semibold text-gray-800 text-base">{title}</div>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard