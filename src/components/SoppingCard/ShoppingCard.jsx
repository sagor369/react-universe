import React from "react";

const ShoppingCard = (props) => {
  console.log(props);
  const { id, name, features, image,published_in } = props.card;
  return (
    <>
      <div className="card bg-accent text-whate shadow-xl">
        <figure>
          <img className="w-full" src={image} />{" "}
        </figure>
        <div className="card-body">
          <h2 className="card-title">Feature:</h2>
          <div className="">
            {features.map((feature, index) => (
              // console.log(feature,index)
              <p>
                {" "}
                {index + 1} : {feature}{" "}
              </p>
            ))}
          </div>
          <hr></hr>
          <div className="card-actions flex justify-between items-center mt-5">
            <div>
              <h2 className="text-3xl font-bold">{name}</h2>
              <div className="flex gap-2 mt-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </p>
                <p><small>{published_in}</small></p>
              </div>
            </div>
            <button className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
