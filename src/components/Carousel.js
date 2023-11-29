import { Lazy, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/swiper-react.mjs";
import { Mousewheel, Pagination, Lazy } from "swiper/modules";
import "swiper/swiper.scss";
import "swiper/modules/navigation.scss";
import "swiper/modules/pagination.scss";

import { ASSETS_BASE_URL } from "../constants";

// export default function Carousel({ filteredrestaurants }) {
//   if (
//     !filteredrestaurants ||
//     !filteredrestaurants[0]?.card?.card?.imageGridCards?.info
//   ) {
//     return null;
//   }

//   const images = filteredrestaurants[0]?.card?.card?.imageGridCards?.info;
//   console.log(images);
//   return (
//     <Swiper
//       direction={"horizontal"}
//       slidesPerView={1}
//       spaceBetween={30}
//       mousewheel={true}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Mousewheel, Pagination]}
//       className="mySwiper"
//     >
//       {images.map((image) => (
//         <SwiperSlide key={image.id}>
//           <img
//             className="w-auto h-auto"
//             src={ASSETS_BASE_URL + image.imageId}
//             alt={image?.accessibility?.altText}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
export default function Carousel({ filteredrestaurants }) {
  if (
    !filteredrestaurants ||
    !filteredrestaurants[0]?.card?.card?.imageGridCards?.info
  ) {
    return null;
  }

  const images = filteredrestaurants[0]?.card?.card?.imageGridCards?.info;

  return (
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="text-4xl font-semibold text-orange-500 text-center mb-8">
        Trending Food
      </h1>
      <Swiper
        direction={"horizontal"}
        slidesPerView={3}
        spaceBetween={30}
        mousewheel={true}
        speed={400} 
        modules={[Mousewheel, Pagination]}
        className="h-auto swiper-container"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.id}
            className="flex justify-center items-center transition-all duration-500 ease-in-out" // Tailwind transition classes for smoothness
          >
            <img
              className="h-auto object-cover w-full"
              src={ASSETS_BASE_URL + image.imageId}
              alt={image?.accessibility?.altText}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
