import { BaseSyntheticEvent } from "react";

const Recipe = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => {
  const handleClick = (e: BaseSyntheticEvent) => {
    console.log(e);
  };

  return (
    <div
      className="p-2 transition-all w-full hover:bg-gray-100/70 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center flex-row overflow-x-hidden">
        <div className="w-1/4 h-full">
          <img
            src={img}
            alt="recipe-img"
            className="block object-cover w-14 h-14 rounded-full"
          />
        </div>
        <div className="w-3/4">
          <h3 className="text-sm font-semibold text-nowrap text-gray-800">
            {title}
          </h3>
          <p className="mt-0.5 text-gray-700 text-xs">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
