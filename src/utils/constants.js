const IMAGE_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill";

const MOBILE_DEVICE_TYPE =
  "/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i";

const CARD_TYPE = {
  CAROUSELS: "carousel",
  ALL_RESTURANTS: "seeAllRestaurants",
};

const RESTAURANTS_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.461094843480193&lng=78.55619128793478&page_type=DESKTOP_WEB_LISTING";

const SEARCH_URL =
  "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=25.461094843480193&lng=78.55619128793478";

export {
  IMAGE_CDN_URL,
  MOBILE_DEVICE_TYPE,
  SEARCH_URL,
  RESTAURANTS_URL,
  CARD_TYPE,
};
