import React from "react";

function Stars({ number, totalReviews,title }) {
  const stars = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];

  return (
    <div>
      <h2 className=" font-bold font-mono text-lg">{title}</h2>
      <hr></hr>
      <div className="rating rating-md rating-half flex flex-row justify-between">
        <h2 className="font-bold font-mono text-3xl mx-auto">{number}</h2>
        <div className="text-center mx-auto">
          <input
            type="radio"
            name="rating-10"
            className="rating-hidden"
            disabled
          />
          {stars.map((star) => {
            if (star % 1 === 0) {
              return (
                <input
                  type="radio"
                  name="rating-10"
                  disabled
                  className={
                    star < number
                      ? "mask mask-star-2 mask-half-1 bg-[#00cc7a]"
                      : "mask mask-star-2 mask-half-1 bg-gray-300"
                  }
                />
              );
            } else {
              return (
                <input
                  disabled
                  type="radio"
                  name="rating-10"
                  className={
                    star < number
                      ? "mask mask-star-2 mask-half-2 bg-[#00cc7a]"
                      : "mask mask-star-2 mask-half-2 bg-gray-300"
                  }
                />
              );
            }
          })}
          <h2 className="text-lg">{totalReviews} reviews</h2>
        </div>
      </div>
    </div>
  );
}

export default Stars;
