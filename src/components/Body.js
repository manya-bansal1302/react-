import RestaurantCard from "./RestaurantCard";
import resCards from "../utils/MockData";
import {useState, useEffect} from "react";
import Shimmer from "./shimmer";



const Body = () => {
  /*const arr = useState(resCards); (this is 2nd way because thos returns array destrucing)
  const [listOfRestaurants,setListOfRestaurants] = arr*/


const [listOfRestaurants,setListOfRestaurants] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]); 
const [searchText,setSearchText] = useState("")


useEffect(() => {
  fetchData();
} , []);

const fetchData = async () => {
  const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.20600&lng=74.93020&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  const response = await res.json();
 // console.log("response: ", response)
 // console.log("data: ", response.data.cards)
  //console.log("after: ", response.data.cards.slice(3))
  // setListOfRestaurants()
  //optional chaining
  setListOfRestaurants(response?.data?.cards?.slice(3));
  setFilteredRestaurant(response?.data?.cards?.slice(3));
};


return listOfRestaurants.length === 0 ? (
     <Shimmer/>
) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) =>  {
              setSearchText(e.target.value);
          }} />
          <button onClick={() => {
            console.log(searchText)

           const filterRestaurant =  listOfRestaurants.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));

           setFilteredRestaurant(filterRestaurant);

          }}>Search</button>
        </div>
     <button className="filter-btn" onClick={() => {
        const filteredList = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4);
        setListOfRestaurants(filteredList)
     }}
     >
      Top Rated Restaurants</button>
     </div>
      <div className="restaurant-container">
      {
        filteredRestaurant.map((restaurant) => ( <RestaurantCard  key={restaurant.card.card.info.id} resData ={restaurant}/>)
      )}
      </div>
    </div>
  );

};

export default Body;