type TestimonialCardProps = {
  name: string;
  icon: React.ReactNode;
  text: string;
};

const TestimonialCard = ({ name, icon, text }: TestimonialCardProps) => {
  return (
    <div
      className="
        p-6 rounded-3xl bg-white shadow-sm hover:shadow-lg
        border border-gray-100 transition-all duration-300
        hover:-translate-y-1 hover:bg-gradient-to-br
        hover:from-sky-50 hover:to-orange-50
      "
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-gray-50 grid place-items-center shadow-inner">
          {icon}
        </div>
        <div className="font-semibold text-gray-800">{name}</div>
      </div>

      <p className="text-sm text-gray-600 leading-7">{text}</p>
    </div>
  );
};

export default TestimonialCard;
