import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";
//import { CDN_URL } from "../utils/constants";


// const RestaurantHeading = (props) => {
//   const { data } = props;

//   return (
//     <>
//      {data?.card?.card?.text}
//     </>
//   )
// }

// const RestaurantInfo = (props) => {
//   const { data } = props;
//   console.log("props: ", data)
//   return (
//     <>
//     <img src={`${CDN_URL}${data?.card?.card?.info.cloudinaryImageId}`} style={{ height: "200px", width: "200px"}}></img>
//      {data?.card?.card?.info.costForTwo}
//      {data?.card?.card?.info.city}
//     </>
//   )
// }


const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  },[]);

  fetch(MENU_API + resId, {
  method: 'GET',
  mode: 'no-cors'
})
.then(response => console.log(response))
.catch(error => console.error('Error:', error));

const fetchMenu = async () => {
  fetch(MENU_API + resId, {
    method: 'GET',
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then(res => {
      setResInfo(res.data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
  // const json = await data.json();
  //setResInfo(json.data.cards[2].card.card.info);
  // setResInfo(json.data);
};

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
