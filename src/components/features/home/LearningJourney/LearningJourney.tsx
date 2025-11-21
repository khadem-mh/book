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
            <div className="mb-6">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-gray-600 mt-2">{subTitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {cards.map((s) => (
                    <LearningStep key={s.id} step={s} />
                ))}
            </div>
        </section>
    );
};

export default LearningJourney;
