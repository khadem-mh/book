export type FlashcardFeatureProps = {
  title: string;
  desc: string;
  src: string;
};

const FlashcardFeature: React.FC<FlashcardFeatureProps> = ({ title, desc, src }) => {
  return (
    <div className="relative flex items-start gap-4 p-4 rounded-3xl bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl pointer-events-none bg-gradient-to-bl from-white via-orange-200 to-transparent"></div>

      <div className="flex-shrink-0 grid place-items-center">
        <img src={src} alt={title} className="w-24" />
      </div>

      <div>
        <h4 className="text-gray-900 font-semibold text-base">{title}</h4>
        <p className="mt-1 text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default FlashcardFeature;
