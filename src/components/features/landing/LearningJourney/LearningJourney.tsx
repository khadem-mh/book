import SectionHeader from "../components/SectionHeader";
import LearningStep from "./LearningStep";

export type Step = {
    id: number;
    img: string;
    title: string;
    desc: string;
    accent?: string;
    systemBase?: boolean;
    btnText?: string;
};

type LearningJourneyProps = {
    cards: Step[];
    title: string,
    subTitle: string
};

const LearningJourney = ({ cards, subTitle, title }: LearningJourneyProps) => {
    return (
        <section>
            <SectionHeader
                title={title}
                description={subTitle}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {cards.map((s) => (
                    <LearningStep key={s.id} step={s} />
                ))}
            </div>
        </section>
    );
};

export default LearningJourney;
