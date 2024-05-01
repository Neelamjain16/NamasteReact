import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import {useState,useEffect} from 'react'
const Body=()=>{
  //state variable
  const [listOfRestaurant,setListOfRestaurant]=useState(resList);

  //normal js variable
//   let listOfRestaurantJs=[{
//     data:{
//       id:'1',
//       name:' Pasta Corner',
//       cuisine:['Italian','Pasta'],
//       avgRating:'3.5',
//       costForTwo:'20000',
//       img:'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg'
//     }
//   },  {
//    data:{
//     id:'2',
//     name:'Dominos',
//     cuisine:['Italian','Pasta'],
//     avgRating:'4.5',
//     costForTwo:'20000',
//     img:'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg'
// }}
//   ]


useEffect(()=>{
  fetchData();
},[])


const fetchData= async ()=>{
  const data= await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json=await data.json();
  console.log(json)
  // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)//my api is wrong 
}
    return (
        <div className='body'>
                  <div className='filter'>
                    <button className='filter-btn' onClick={()=>{
                      const filteredList=listOfRestaurant.filter((res)=>res.data.avgRating>4)
                      setListOfRestaurant(filteredList)
                     //filter logic here
                    //  listOfRestaurant=listOfRestaurant.filter(
                    //   (res)=>res.data.avgRating>4
                    // );
                    // console.log(listOfRestaurant)
                    }}>Top Rated Restaurants</button>
                  </div>
                  <div className='res-containar'>
                    {listOfRestaurant.map(restaurant=>(
                    <RestaurantCard key={restaurant.data.id}  resData={restaurant}/>))
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