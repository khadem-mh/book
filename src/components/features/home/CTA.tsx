export type CTAProps = {
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  note?: string;
  bookImages: string[];
};

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  description,
  badge,
  note,
  bookImages,
}) => {
  return (
    <section>
      <div
        className="flex flex-col md:flex-row-reverse items-center gap-6 border border-slate-200 shadow-lg rounded-3xl p-6 bg-gradient-to-br from-white/90 via-sky-50/50 to-orange-50/50 backdrop-blur-md"
        role="region"
        aria-label="call-to-action"
      >
        {/* تصاویر کتاب */}
        <div className="flex-shrink-0 flex -space-x-6">
          {bookImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Book ${idx + 1}`}
              className="w-36 rounded-xl shadow-lg border border-gray-100 object-cover cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:z-10"
              style={{ filter: `drop-shadow(0 4px 8px rgba(0,0,0,0.1))` }}
            />
          ))}
        </div>

        {/* محتوا */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-3 flex-wrap">
            {badge && (
              <span className="text-xs px-4 py-1 rounded-xl w-fit text-gray-500 bg-gradient-to-r from-sky-50 to-orange-50">
                {badge}
              </span>
            )}
            <h4 className="text-lg font-bold text-gray-900 leading-tight">
              {title}
            </h4>
            {subtitle && (
              <h5 className="text-sm text-gray-700">{subtitle}</h5>
            )}
          </div>

          <p className="mt-2 text-sm text-gray-600">{description}</p>

          {note && (
            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <div className="ml-auto text-xs text-gray-500 hidden sm:inline">
                {note}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
