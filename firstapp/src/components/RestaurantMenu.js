import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer';
import {RESTAURANT_TYPE_KEY,MENU_ITEM_TYPE_KEY,MENU_URL} from '../utils/contants.js'
const  RestaurantMenu=()=>{
const [resInfo,setResInfo]=useState(null);
const [menuItems, setMenuItems] = useState([]);
const {resId}=useParams();
    useEffect(()=>{
     
     fetchMenu();

    },[])


    const fetchMenu=async()=>{
        const data=await fetch(MENU_URL+resId)
        const json=await data.json();
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        setResInfo(json.data)
        setMenuItems(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    
    //     const restaurantData = json?.data?.cards?.map(x => x.card)?.
    //     find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
    //     console.log(restaurantData)
    
    //    const  menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
    //     groupedCard?.cardGroupMap?.REGULAR?.
    //     cards?.map(x => x.card?.card)?.
    //     filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
    //     map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
    
    //     const uniqueMenuItems = [];
    //     menuItemsData.forEach((item) => {
    //       if (!uniqueMenuItems.find(x => x.id === item.id)) {
    //         uniqueMenuItems.push(item);
    //       }
    //     })
    //     setMenuItems(uniqueMenuItems);

}
// const {itemCards}=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    

 return (resInfo ===null)?(
  <Shimmer/>
 ):(
<>
<div className="menu">
    <h1>{resInfo?.cards[2]?.card?.card?.info?.name || 'restaurant Name Not Available'}</h1>
    <h1>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(' , ') || 'cuisine Not Available'}</h1>
    <h1>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage || 'cost not available'}</h1>

    <h2>Menu</h2>

    <div className='menu-container'>
        {menuItems.map((item)=>{
            return (
          <div key={item.card.info.id} className='menu-items'>
              <h2>{item.card.info.name}</h2>
              <h2>{item.card.info.description}</h2>
              <h2>Rs.{item.card.info.price/100 } </h2>
            </div>
            )
        })}
    </div>
    {/* <h2>{menuItems[0].card.info.name}</h2> */}
  
</div>

</>

    )
}
export default RestaurantMenu