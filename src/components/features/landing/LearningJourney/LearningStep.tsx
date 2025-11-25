import AnimatedHands from "@/components/shared/AnimatedHands";

export type Step = {
  id: number;
  img: string;
  title: string;
  desc: string;
  accent?: string;
  systemBase?: boolean;
  btnText?: string;
};

type LearningStepProps = {
  step: Step;
};

const LearningStep: React.FC<LearningStepProps> = ({ step }) => {
  return (
    <div key={step.id}>
      {step.systemBase && (
        <div className="flex justify-center text-3xl w-full -mt-9.5 mb-2">
          <AnimatedHands />
        </div>
      )}
      <div
        className={`relative flex flex-col gap-1.5 text-[13px] shadow-md rounded-2xl p-2 xl items-center text-center
        transition transform duration-300 hover:scale-105 hover:shadow-xl`}
      >
        {/* دایره رنگی پشت تصویر */}
        <div
          className={`absolute top-4 w-12 h-12 blur-2xl rounded-full pointer-events-none
          ${step.accent || ""}`}
        ></div>

        {step.btnText && (
          <p className="absolute top-2 left-2 text-white bg-black px-2 text-xs rounded-full animate-pulse">
            {step.btnText}
          </p>
        )}

        <img src={step.img} alt={step.title} className="w-20 relative z-10" />
        <h4 className="font-semibold text-gray-900">{step.title}</h4>
        <p className="text-gray-600">{step.desc}</p>
      </div>
    </div>
  );
};

export default LearningStep;
