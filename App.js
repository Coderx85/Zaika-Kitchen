import React from "react";
import ReactDOM from "react-dom/client";

/* Basic layout of website- 

Header
   -logo
   -nav items

Body
   -Search
   -Restraunt Container
   -Restraunt Card
     -Img 
     -Name
     -Star Rating
     -Cuisine, delivery time
     -price

Footer
   -Copyright
   -links
   -Address
   -Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img
          className="brand_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3d5OTRg8jgtxX22MoEYUWeP4haZ1K-GZoKqM3fb9i1quzE6wBvLI--RqegXHVYbKCkQ&usqp=CAU"
        />
        <h1 className="brand_name">Baratie</h1>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.areaName}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

//resObj is array of objects and each object represents restaurant
const resList = [
  {
    info: {
      id: "45862",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "The Grand Venice Mall",
      areaName: "Surajpur Site 4",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "45862",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4200,
      },
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-05 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹129",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-the-grand-venice-mall-surajpur-site-4-noida-1-45862",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "39126",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Ansal Plaza Mall",
      areaName: "Knowledge Park",
      costForTwo: "₹450 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "39126",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4900,
      },
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-05 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      loyaltyDiscoverPresentationInfo: {
        logoCtx: {
          text: "BENEFITS",
          logo: "v1634558776/swiggy_one/OneLogo_3x.png",
        },
        freedelMessage: "FREE DELIVERY",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-ansal-plaza-mall-knowledge-park-noida-1-39126",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
      
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
