import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  console.log(props);

  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.card.card.info
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img  
        className="rounded-lg"
        src={CDN_URL+cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-l">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestaurantCard;