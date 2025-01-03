import RestaurantCard from "./RestaurantCard";
import resCards from "../utils/MockData";
import {useState, useEffect} from "react";
import {Link} from "react-router";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


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

const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return (
<h1>
  Looks like you're offline!! Please check your internet connectivity
</h1>
)


return listOfRestaurants.length === 0 ? (
     <Shimmer/>
) : (
    <div className="body">
      <div className="filter flex">
       <div  className="search m-4 p-4"> 
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) =>  {
              setSearchText(e.target.value);
          }} />

          <button 
            className="px-3 py-2 bg-green-100 rounded-sm "
           onClick={() => {
            console.log(searchText);
           const filterRestaurant =  listOfRestaurants.filter((res) => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
           setFilteredRestaurant(filterRestaurant);

          }}>Search</button>
           </div>
      <div  className="search m-4 p-4 flex items-center">
         <button
          className="px-4 py-2 bg-gray-100 rounded-md" onClick={() => {
             const filteredList = listOfRestaurants.filter((res) => res.card.card.info.avgRating > 4);
                setListOfRestaurants(filteredList)
                 }}
                   >
                      Top Rated Restaurants
                        </button>
             </div>
         </div>
      <div className="flex flex-wrap">
      {
        filteredRestaurant.map((restaurant) => (
        <Link  key={restaurant.card.card.info.id} to={"/restaurants/" + restaurant.card.card.info.id}><RestaurantCard  resData ={restaurant}/></Link>)
      )}
      </div>
    </div>
  );

};

export default Body;