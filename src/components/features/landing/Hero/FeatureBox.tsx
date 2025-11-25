export type FeatureBoxProps = {
  imgSrc: string;
  text: string;
};

const FeatureBox: React.FC<FeatureBoxProps> = ({ imgSrc, text }) => {
  return (
    <div className="flex flex-col gap-1.5 text-[13px] shadow-md rounded-2xl p-2 xl items-center text-center
                    transition transform duration-300 hover:scale-105 hover:shadow-xl">
      <img src={imgSrc} alt={"img"} className="w-20" />
      <p>{text}</p>
    </div>
  );
};

export default FeatureBox;
