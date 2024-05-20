import RestaurantCard from "./RestaurantCard"
// import resList from "../utils/mockData"
import {useState,useEffect} from 'react'
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
const Body=()=>{
  //state variable
  const [listOfRestaurant,setListOfRestaurant]=useState([]);
  const [searchText,setSearchText]=useState('');
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);
   
console.log('body rendered')

useEffect(()=>{
  fetchData();
},[])


const fetchData= async ()=>{
  const data= await fetch(
    "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
  );
  const json=await data.json();

  // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  async function checkJsonData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {

      // initialize checkData for Swiggy Restaurant data
      let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }
  
  const resData = await checkJsonData(json);

  console.log(resData)
   setListOfRestaurant(resData)
   setFilteredRestaurant(resData)
}


// if(listOfRestaurant.length===0){
//   return <Shimmer/>
// }
const onlineStatus=useOnlineStatus();

if(onlineStatus===false) return <h1>Looks like you are offline!! Please check your internet connection</h1>
    return listOfRestaurant.length===0? (
    <Shimmer/> 
  ): (
        <div className='body'>
                  <div className='filter'>
                    <div className="search">
                      <input type="text"  className="searchBox"value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                      <button onClick={()=>{
                        //filter the restaurant cards and update the UI
                        //search text we will get from input box 
                        console.log(searchText)
                    const filteredRestaurant=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRestaurant)
                      }}>Search</button>
                    </div>
                    <button className='filter-btn' onClick={()=>{
                      console.log(listOfRestaurant)
                      const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>4)
                      setListOfRestaurant(filteredList)
                     //filter logic here
                    //  listOfRestaurant=listOfRestaurant.filter(
                    //   (res)=>res.data.avgRating>4
                    // );
                    // console.log(listOfRestaurant)
                    }}>Top Rated Restaurants</button>
                  </div>
                  <div className='res-containar'>
                    {filteredRestaurant.map(restaurant=>(
                      <Link to={'/restaurants/'+ restaurant.info.id}  key={restaurant?.info?.id}>
                    <RestaurantCard {...restaurant?.info} />
                      </Link>
                  
                  ))
                    }
                    {/* <RestaurantCard resData={resList[0]} />
                    <RestaurantCard resData={resList[1]} />
                    <RestaurantCard resData={resList[2]} />
                    <RestaurantCard resData={resList[3]} /> */}
                    {/* <RestaurantCard resName='KFC' cuisine='Burger,FastFood'/> */}
                   
                  </div>
        </div>
    ) 

}

export default Body