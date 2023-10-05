import { CDN_URL } from "../../utils/constants"; //named export is imported like this

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, avgRating, cuisines, costForTwo, areaName } = resData?.info; //optional chaining
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
