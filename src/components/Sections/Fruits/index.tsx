import { PrevNext as PrevNextButtons, Title } from ".."

import Container from "../../Container"
import {Tzatziki, Kebab, Icecream, Pide} from "../../Assets";
import {Tiramisu, Parmegiana, Galaktoboureko, Spaghetti} from "../../Assets";
import { useState } from "react"

const foodItems = [
  {
    id: 1,
    title: 'Ram Kebab',
    price: '9.25',
    imgSrc: Kebab,
    imageURL: Kebab,
    calories: '200',
    qty: '1',
    category: 'Turkish'
  },

  {   
    id: 2,
    title: 'Pide',
    price: '15.65',
    imgSrc: Pide,
    imageURL: Pide,
    calories: '300',
    qty: '1',
    category: 'Turkish'
  },
  {
    id: 3,
    title: 'Sundae',
    price: '18.25',
    imgSrc: Icecream,
    imageURL: Icecream,
    calories: '400',
    qty: '1',
    category: 'Dessert'
  },

  {
    id: 4,
    title: 'Tzatziki',
    price: '12.25',
    imgSrc: Tzatziki,
    imageURL: Tzatziki,
    calories: '500',
    qty: '1',
    category: 'Italian'
  },

  {
    id: 5,
    title: 'Galaktoboureko',
    price: '13.25',
    imgSrc: Galaktoboureko,
    imageURL: Galaktoboureko,
    calories: '300',
    qty: '1',
    category: 'Turkish'
  },

  {
    id: 6,
    title: 'Spaghetti',
    price: '12.25',
    imgSrc: Spaghetti,
    imageURL: Spaghetti,
    calories: '500',
    qty: '1',
    category: 'Italian'
  },

  {
    id: 7,
    title: 'Chicken Parmegiana',
    price: '19.25',
    imgSrc: Parmegiana,
    imageURL: Parmegiana,
    calories: '600',
    qty: '1',
    category: 'Italian'
  },

  {
    id: 8,
    title: 'Tiramisu',
    price: '16.75',
    imgSrc: Tiramisu,
    imageURL: Tiramisu,
    calories: '500',
    qty: '1',
    category: 'Dessert'
  },
]

const Fruits = () => {
  const [scrollValue, setScrollValue] = useState(0)
  
  return (
      <section className="w-full my-5">
          <div className="w-full flex items-center justify-between">
            <Title title="Our best plates" />
            <PrevNextButtons onNext={() => setScrollValue(1250)} onPrev = {() => setScrollValue(-1250)} />
          </div>
          <Container className="bg-containerbg" scrollOffset = {scrollValue} items = {foodItems} />
      </section>
  )
}

export default Fruits