import { GiKebabSpit, GiPizzaSlice, GiBeerBottle, GiBowlOfRice } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import {FaFish} from "react-icons/fa";

export const Categories = [
    {
        id: 1,
        name: " Italian",
        urlParam: 'chicken',
        icon: <GiPizzaSlice />,
    },
    {
        id: 2,
        name: " Greek",
        urlParam: 'fruits',
        icon: <GiKebabSpit />,
    },
    {
        id: 3,
        name: " Turkish",
        urlParam: 'fish',
        icon: <FaFish />,
    },
    {
        id: 4,
        name: " Soft Drinks",
        urlParam: 'drinks',
        icon: <GiBeerBottle />,
    },
    {
        id: 5,
        name: " Desserts",
        urlParam: 'desserts',

    },
    {
        id: 6,
        name: " Ice Creams",
        urlParam: 'icecreams',
        icon: <MdOutlineIcecream />,
    },
]