import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

type TestimonialsProps = {
  title?: string;
  items: TestimonialCardProps[];
};

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "دیدگاه کاربران",
  items,
}) => {
  return (
    <section>
      <h3 className="text-3xl font-bold">{title}</h3>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <TestimonialCard
            key={i}
            {...t}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
