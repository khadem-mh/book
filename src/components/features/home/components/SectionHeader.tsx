interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className }) => {
  return (
    <div className={`relative inline-block mb-6 ${className || ""}`}>
      <h3 className="text-2xl font-semibold relative z-10">{title}</h3>
      {description && (
        <p className="mt-1 text-sm relative z-10 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
