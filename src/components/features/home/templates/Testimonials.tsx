export type TestimonialItem = {
  name: string;
  icon: React.ReactNode;
  text: string;
};

type TestimonialsProps = {
  title?: string;
  items: TestimonialItem[];
};

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "دیدگاه کاربران",
  items,
}) => {
  return (
    <section className="max-w-7xl mx-auto mt-16 text-right">
      <h3 className="text-3xl font-bold">{title}</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div
            key={i}
            className="
              p-6 rounded-3xl bg-white shadow-sm hover:shadow-lg
              border border-gray-100 transition-all duration-300
              hover:-translate-y-1 hover:bg-gradient-to-br
              hover:from-sky-50 hover:to-orange-50
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gray-50 grid place-items-center shadow-inner">
                {t.icon}
              </div>
              <div className="font-semibold text-gray-800">{t.name}</div>
            </div>

            <p className="text-sm text-gray-600 leading-7">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;