
// const styleCard={
//     backgroundColor:'#f0f0f0',
// }

import { IMG_CDN_URL } from "../utils/contants.js";

const RestaurantCard=({
    id,
    cloudinaryImageId,
     name,
    cuisines=[],
    avgRating,
    costForTwo,
    sla
})=>{
  
return (
 // <div className='res-card' style={styleCard}>
 <div className='res-card' key={id}>
    {/* <img src={img} alt='res-logo' className='res-logo'/> */}
    <img src={IMG_CDN_URL + cloudinaryImageId} />
    <h3>{name}</h3>
    <h5>{cuisines.join(", ")}</h5>
    <h4>{avgRating}</h4>
     <h4>{costForTwo } </h4>
     <h4>{sla?.slaString}</h4>
 </div>
)
}

export default RestaurantCard