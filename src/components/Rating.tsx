import { MouseEvent, useState } from "react";
import RadioGroup from "./RadioGroup";

const Rating = () => {
  const [rating, setRating] = useState(-1);
  const [selected, setSelected] = useState(false);

  const submitRatingHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    setSelected((prev) => !prev);
  };

  const ratingSelectedHandler = (id: number): void => {
    setRating((prev) => id);
  };

  const icon = !selected ? (
    <img
      className="rounded-full bg-blue-very-dark-grayish p-4"
      src="./icon-star.svg"
      alt="How did we do?"
    />
  ) : (
    <img
      className="mx-auto"
      src="./illustration-thank-you.svg"
      alt="Thank you!"
    />
  );

  const heading = !selected ? (
    <h2 className="text-[22px] font-bold text-white mobile-lg:text-[25px]">
      How did we do?
    </h2>
  ) : (
    <h2 className="text-center text-[22px] font-bold text-white mobile-lg:text-[25px]">
      Thank you!
    </h2>
  );

  const message = !selected ? (
    <p className="text-sm text-gray-light">
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
  ) : (
    <p className="text-center text-[15px] text-gray-light">
      We appreciate you taking the time to give a rating. If you ever need more
      support, don’t hesitate to get in touch!
    </p>
  );

  return (
    <section className="grid gap-y-6">
      {icon}
      {selected && (
        <p className="mx-auto max-w-[192px] rounded-full bg-blue-very-dark-grayish py-2 px-5 text-center text-[15px] text-orange">
          You selected {rating} of 5
        </p>
      )}
      {heading}
      {message}
      {!selected && <RadioGroup ratingSelected={ratingSelectedHandler} />}
      {!selected && (
        <button
          className="rounded-full bg-orange py-4 text-sm uppercase text-white enabled:hover:bg-white enabled:hover:text-orange enabled:active:bg-white enabled:active:text-orange disabled:opacity-50"
          disabled={rating < 0}
          onClick={submitRatingHandler}
          type="button"
        >
          Submit
        </button>
      )}
    </section>
  );
};

export default Rating;
