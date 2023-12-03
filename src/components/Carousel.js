import { ASSETS_BASE_URL } from "../constants";

export default function Carousel({ restaurants }) {
  if (!restaurants || restaurants.length === 0) {
    return null;
  }
  return (
    <div className="max-w-screen-2xl mx-auto py-6">
      <h1 className="text-2xl font-semibold text-black-500 text-start mb-5 ml-10">
        Best offers for you
      </h1>
      <div className="max-w-screen-2xl w-full px-10 py-50 flex gap-10 overflow-x-auto scroll-snap-type-x-mandatory">
        <style>
          {`
            .max-w-screen-2xl::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {restaurants.map(({ id, imageId, accessibility }) => (
          <img
            key={id}
            className="h-56 w-120 bg-deeppink rounded-8 scroll-snap-align-center flex-shrink-0"
            src={ASSETS_BASE_URL + imageId}
            alt={accessibility?.altText}
          />
        ))}
      </div>
    </div>
  );
}
