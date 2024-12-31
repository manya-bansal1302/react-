import RestaurantCard from "./RestaurantCard";
import resCards from "../utils/MockData";
import {useState} from "react";



const Body = () => {
  /*const arr = useState(resCards); (this is 2nd way because thos returns array destrucing)
  const [listOfRestaurants,setListOfRestaurants] = arr*/


const [listOfRestaurants,setListOfRestaurants] = useState(resCards);

  return (
    <div className="body">
      <div className="filter">
     <button className="filter-btn" onClick={() => {
        const filteredList = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4);
        setListOfRestaurants(filteredList)
     }}
     >
      Top Rated Restaurants</button>
     </div>
      <div className="restaurant-container">
      {
        listOfRestaurants.map(restaurant => <RestaurantCard  key={restaurant.card.card.info.id} resData ={restaurant}/>)
      }
      </div>
    </div>
  )

}

export default Body;