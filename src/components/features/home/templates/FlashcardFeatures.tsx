import FlashcardFeature, { FlashcardFeatureProps } from "../components/FlashcardFeature";

export type FeatureItem = FlashcardFeatureProps;

type FlashcardFeaturesProps = {
  title?: string;
  items: FeatureItem[];
};

const FlashcardFeatures: React.FC<FlashcardFeaturesProps> = ({
  title = "ویژگی‌های فلش‌کارت‌ها",
  items,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 text-right">
      <h3 className="text-2xl font-bold mb-8">{title}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <FlashcardFeature
            key={index}
            title={item.title}
            desc={item.desc}
            src={item.src}
          />
        ))}
      </div>
    </section>
  );
};

export default FlashcardFeatures;