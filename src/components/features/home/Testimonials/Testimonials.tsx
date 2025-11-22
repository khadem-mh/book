import TestimonialCard from "./TestimonialCard";

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
          <TestimonialCard
            key={i}
            name={t.name}
            icon={t.icon}
            text={t.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
