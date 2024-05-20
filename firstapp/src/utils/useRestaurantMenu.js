import { useEffect, useState } from "react";
import {  MENU_URL } from '../utils/contants.js';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
            fetchData();
    }, []);

    const fetchData = async()=> {
            const data = await fetch(MENU_URL + resId);
            const json = await data.json();
            setResInfo(json.data);
       
    };

    console.log('Current resInfo:', resInfo);
    return resInfo;
};

export default useRestaurantMenu;
