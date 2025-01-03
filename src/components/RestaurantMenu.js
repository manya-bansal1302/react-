import Shimmer from "./shimmer";
//import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";
//import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

if (resInfo === null ) return <Shimmer/> ;

const {name,cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;


const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log(itemCards);

//console.log("resInfo: ", resInfo)

  return (
    <div className="menu">
       <h1>{name}</h1>
       <p>{cuisines.join(",")} - {costForTwoMessage}</p>
       <h2>Menu</h2>
       { <ul>
       
        {itemCards.map((item) => (
        <li key={item.card?.info?.id}>{item.card?.info?.name} - {item.card?.info?.price}</li> ))}
        </ul> }
    </div>
    // <>
    // {
    //  resInfo.cards.length > 0 && resInfo.cards.map((data, index) => {
    //   console.log("cards: ", index, data)
    //    console.log("type: ", card.card.card["@type"])
    //   const type = data?.card?.card["@type"]
    //   if(index === resInfo.cards.length - 1) return;
    //   return (
    //     <>
    //       {
    //         type === "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2" && <RestaurantHeading data={data}/>
    //       }
    //       {
    //         type === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant" && <RestaurantInfo data={data} />
    //       }
    //       {
    //         type === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&  <div>Offers</div>
    //       }
    //     </>
    //   )
    //  })
    // }
    // </>
  );
};

export default RestaurantMenu ;
