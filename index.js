/*
*
Parcel is continuously reloading which is also know as :- 
Hot Module Replacement

File Watcher Algorithm :- C++

PARCEL :- 
Bundling and Minification our code,
Cleaning our code,
Dev and Production Buil,
Image Optimizatio,
Caching while development,
Compression,
Compatible wiht older versions of browser,
It adds polyfils,
HTTPS on dev,
Manages Port NO.,
Consistent Hashing Algorithm,
Zero Config Bundler,
Transitive Dependencies :- To make a production ready
    application we use serveral modules and they need several
    dependencies. There is a dependency tree between these 
    dependencies.,
Tree Shaking
*
*
*
*/


import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () => (
//     <h1 id="title" key="h2">
//         Namste React
//     </h1>
// );

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
                    alt="App logo"
                    className="logo" 
                />
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

const restaurantList = [
        {
          "info": {
            "id": "590220",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "Vikas Puri  II",
            "areaName": "Alibaugh",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4,
            "parentId": "2456",
            "avgRatingString": "4.0",
            "totalRatingsString": "50+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-09 22:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": { },
                "textExtendedBadges": { }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": { },
              "subTitle": { },
              "message": { },
              "customIcon": { }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": { },
                "video": { }
              }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": { },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-a81c35f6-705e-4520-b58e-657e9d9483f9"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-vikas-puri-ii-alibaugh-mumbai-590220",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "919023",
            "name": "Akshaya Family Restaurant",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/1/3a5aa958-1bbc-4d05-8f24-e692b5d70270_919023.jpg",
            "locality": "Alibag",
            "areaName": "Alibag",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Default"
            ],
            "parentId": "36",
            "avgRatingString": "NEW",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-09 23:00:00",
              "opened": true
            },
            "badges": { },
            "isOpen": true,
            "aggregatedDiscountInfoV2": { },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": { },
                "textBased": { },
                "textExtendedBadges": { }
              }
            },
            "orderabilityCommunication": {
              "title": { },
              "subTitle": { },
              "message": { },
              "customIcon": { }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": { },
                "video": { }
              }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": { },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-a81c35f6-705e-4520-b58e-657e9d9483f9"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/akshaya-family-restaurant-alibag-mumbai-919023",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "899517",
            "name": "Five Star Chicken",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/4b98fba2-5a91-4201-b345-f4a6d2736b02_899517.jpg",
            "locality": "Maharshi Karve Rd",
            "areaName": "Alibag",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "376",
            "avgRatingString": "4.2",
            "totalRatingsString": "7",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-09 22:00:00",
              "opened": true
            },
            "badges": { },
            "isOpen": true,
            "aggregatedDiscountInfoV2": { },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": { },
                "textBased": { },
                "textExtendedBadges": { }
              }
            },
            "orderabilityCommunication": {
              "title": { },
              "subTitle": { },
              "message": { },
              "customIcon": { }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": { },
                "video": { }
              }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": { },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-a81c35f6-705e-4520-b58e-657e9d9483f9"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/five-star-chicken-maharshi-karve-rd-alibag-mumbai-899517",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "900969",
            "name": "7Th Avenue Waffles",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/30/997aea47-824e-40de-8664-a04cce43e3c9_900969.JPG",
            "locality": "Alibag Beach Rd",
            "areaName": "Alibag",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Beverages",
              "Waffle"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "467082",
            "avgRatingString": "4.1",
            "totalRatingsString": "8",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-09 23:00:00",
              "opened": true
            },
            "badges": { },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": { },
                "textBased": { },
                "textExtendedBadges": { }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
              "title": { },
              "subTitle": { },
              "message": { },
              "customIcon": { }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": { },
                "video": { }
              }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": { },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-a81c35f6-705e-4520-b58e-657e9d9483f9"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/7th-avenue-waffles-beach-rd-alibag-mumbai-900969",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "900647",
            "name": "Yewale Amruttulya",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/5f28f756-7e1b-4da6-81ad-6c94c851c55c_900647.jpg",
            "locality": "Alibaug Rewas Rd",
            "areaName": "Alibag",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Snacks",
              "Cafe"
            ],
            "veg": true,
            "parentId": "227900",
            "avgRatingString": "NEW",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-09 21:29:00",
              "opened": true
            },
            "badges": { },
            "isOpen": true,
            "aggregatedDiscountInfoV2": { },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": { },
                "textBased": { },
                "textExtendedBadges": { }
              }
            },
            "orderabilityCommunication": {
              "title": { },
              "subTitle": { },
              "message": { },
              "customIcon": { }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": { },
                "video": { }
              }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": { },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-a81c35f6-705e-4520-b58e-657e9d9483f9"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/yewale-amruttulya-alibaug-rewas-rd-alibag-mumbai-900647",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "897715",
            "name": "Hotel Rav",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/1d003bd6-114f-4094-a413-4a2a42a87179_897715.jpg",
            "locality": "Pen Rd",
            "areaName": "Alibag",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "101468",
            "avgRatingString": "4.3",
            "totalRatingsString": "10+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-09 23:00:00",
              "opened": true
            },
            "badges": { },
            "isOpen": true,
            "aggregatedDiscountInfoV2": { },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": { },
                "textBased": { },
                "textExtendedBadges": { }
              }
            },
            "orderabilityCommunication": {
              "title": { },
              "subTitle": { },
              "message": { },
              "customIcon": { }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": { },
                "video": { }
              }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": { },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-a81c35f6-705e-4520-b58e-657e9d9483f9"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-rav-pen-rd-alibag-mumbai-897715",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "900722",
            "name": "Cheesy Crust Cafe",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/2/b07b3eed-7cbb-4358-9dee-41f40f25aff4_900722.JPG",
            "locality": "Murud",
            "areaName": "Alibag",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Continental",
              "Burgers",
              "Cafe"
            ],
            "avgRating": 4.2,
            "parentId": "516235",
            "avgRatingString": "4.2",
            "totalRatingsString": "20+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-09 22:15:00",
              "opened": true
            },
            "badges": { },
            "isOpen": true,
            "aggregatedDiscountInfoV2": { },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": { },
                "textBased": { },
                "textExtendedBadges": { }
              }
            },
            "orderabilityCommunication": {
              "title": { },
              "subTitle": { },
              "message": { },
              "customIcon": { }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": { },
                "video": { }
              }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": { },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-a81c35f6-705e-4520-b58e-657e9d9483f9"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/cheesy-crust-cafe-murud-alibag-mumbai-900722",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "897758",
            "name": "Mithas Sweets",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/537bd7b6-bc0c-4ace-8fe6-bc2d1c43b4ce_897758.jpg",
            "locality": "Brahmin Ln",
            "areaName": "Alibag",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Sweets"
            ],
            "veg": true,
            "parentId": "236821",
            "avgRatingString": "NEW",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-07-09 22:30:00",
              "opened": true
            },
            "badges": { },
            "isOpen": true,
            "aggregatedDiscountInfoV2": { },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": { },
                "textBased": { },
                "textExtendedBadges": { }
              }
            },
            "orderabilityCommunication": {
              "title": { },
              "subTitle": { },
              "message": { },
              "customIcon": { }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": { },
                "video": { }
              }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": { },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-a81c35f6-705e-4520-b58e-657e9d9483f9"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mithas-sweets-brahmin-ln-alibag-mumbai-897758",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
]


const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className="card">
            <img 
                src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ " + 
                cloudinaryImageId } 
            />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="res-container">
                {restaurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
                })}
            </div>
        </div>
    );
};


const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Mohit Rana</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

//React.createElement => Object => HTML(DOM)




const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(<AppLayout />);