export type TestimonialCardProps = {
  name: string;
  job: string;
  src: string;
  text: string;
  level: "senior" | "mid" | "junior";
};

const levelStyles = {
  senior: "bg-black/80 text-white",
  mid: "bg-sky-100 text-sky-700",
  junior: "bg-orange-100 text-orange-700",
};

const levelTitles = {
  senior: "Senior",
  mid: "Mid-level",
  junior: "Junior",
};

const TestimonialCard = ({ name, job, src, text, level }: TestimonialCardProps) => {
  return (
    <div
      className="shadow-md relative gap-4 p-4 rounded-3xl bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl pointer-events-none bg-gradient-to-bl from-white via-sky-200 to-transparent"></div>

      <div className="flex items-center justify-between">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <img src={`/images/home/testimonials/${src}`} alt="img" className="w-24" />

          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">{name}</span>
            <span className="text-xs text-gray-500">{job}</span>
          </div>
        </div>

        {/* Level Badge */}
        <span
          className={`
          ${levelStyles[level]} 
          text-xs px-3 py-0.5 rounded-xl font-medium inline-block mb-4
        `}
        >
          {levelTitles[level]}
        </span>
      </div>

      {/* Text */}
      <p className="text-sm text-gray-600 leading-7">{text}</p>
    </div>
  );
};

export default TestimonialCard;
