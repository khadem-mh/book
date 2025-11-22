import SectionHeader from "../components/SectionHeader";
import FlashcardFeature, { FlashcardFeatureProps } from "./FlashcardFeature";

export type FeatureItem = FlashcardFeatureProps;

type FlashcardFeaturesProps = {
  title?: string;
  subTitle?: string;
  items: FeatureItem[];
};

const FlashcardFeatures: React.FC<FlashcardFeaturesProps> = ({
  title = "",
  subTitle = "",
  items,
}) => {
  return (
    <section>
      <SectionHeader
        title={title}
        description={subTitle}
      />

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