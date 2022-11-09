import type { FC, MouseEvent } from "react";

type RatingType = {
  ratingSelected: (id: number) => void;
};

const radioGroupData = [1, 2, 3, 4, 5];

const RadioGroup: FC<RatingType> = ({ ratingSelected }) => {
  const ratingSelectedHandler = (e: MouseEvent<HTMLInputElement>): void => {
    const ratingValue = parseInt(e.currentTarget.value);
    ratingSelected(ratingValue);
  };

  return (
    <div
      aria-label="Rating from 1 to 5"
      className="grid grid-cols-1 gap-4 mobile-md:grid-cols-5 mobile-md:justify-items-center"
      role="radiogroup"
    >
      {radioGroupData.map((data) => (
        <label htmlFor={`rating-button-${data}`} key={data}>
          <input
            className="peer fixed w-0 opacity-0"
            id={`rating-button-${data}`}
            name="rating-button"
            onClick={ratingSelectedHandler}
            type="radio"
            value={data}
          />
          <p className="block rounded-full bg-blue-very-dark-grayish px-0 py-[14px] text-center text-sm text-gray-light hover:bg-orange hover:text-white peer-checked:bg-gray-medium peer-checked:text-white peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-white peer-active:outline peer-active:outline-2 peer-active:outline-offset-2 peer-active:outline-white mobile-md:inline-block mobile-md:px-[21px]">
            {data}
          </p>
        </label>
      ))}

      {/* {radioGroupData.map((data) => (
        <button
          aria-label={`Rating of ${data} out of 5`}
          className="h-10 w-[40px] rounded-full bg-blue-very-dark-grayish text-sm text-gray-light hover:bg-orange hover:text-white focus:bg-gray-medium focus:text-white active:bg-gray-medium active:text-white"
          key={data}
          onClick={ratingSelectedHandler}
          type="button"
          value={data}
        >
          {data}
        </button>
      ))} */}
    </div>
  );
};

export default RadioGroup;
