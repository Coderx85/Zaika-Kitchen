import { CDN_URL } from "../../utils/constants"; //named export is imported like this

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    areaName,
    cloudinaryImageId,
  } = resData?.info; //optional chaining
  const { deliveryTime } =
    resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-details">
        <div className="name-rating">
          <p className="res-name">{name}</p>
          <p className="res-rating">
            {avgRating}
            <i class="ri-star-fill"></i>
          </p>
        </div>
        <div className="cuisine-cost">
          <p className="cuisine">{cuisines.join(", ")}</p>
          <p className="cf2">{costForTwo}</p>
        </div>
        <div className="area-time">
          <p className="area">{areaName}</p>
          <p className="time">{deliveryTime} min</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
