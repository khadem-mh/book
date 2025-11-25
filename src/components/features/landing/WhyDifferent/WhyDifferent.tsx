import FeatureCard, { FeatureCardProps } from "./FeatureCard";
import SectionHeader from "../components/SectionHeader";

export type WhyDifferentProps = {
    title: string;
    subTitle: string;
    cards: FeatureCardProps[];
};

const WhyDifferent = ({ title, subTitle, cards }: WhyDifferentProps) => {
    return (
        <section className="text-right relative">
            <SectionHeader
                title={title}
                description={subTitle}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((f, i) => (
                    <FeatureCard key={i} {...f} />
                ))}
            </div>
        </section>
    );
}

export default WhyDifferent;