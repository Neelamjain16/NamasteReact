
// const styleCard={
//     backgroundColor:'#f0f0f0',
// }

const RestaurantCard=(props)=>{
    const {resData}=props;
    // console.log(props)
   const {img,
    name,
    cuisine,
    avgRating,
    costForTwo}=resData?.data
return (
 // <div className='res-card' style={styleCard}>
 <div className='res-card'>
    <img src={img} alt='res-logo' className='res-logo'/>
    <h3>{name}</h3>
    <h4>{cuisine.join(', ')}</h4>
    <h4>{avgRating}</h4>
     <h4>{costForTwo/100 } INR</h4>
 </div>
)
}

export default RestaurantCard