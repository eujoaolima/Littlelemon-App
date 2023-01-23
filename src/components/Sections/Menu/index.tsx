import { PrevNext as PrevNextButtons, Title } from ".."

import Container from "../../Container"
import { Moussaka, Lasagna, Pizza, Souvlaki } from "../../Assets";
import { Ceviche, Gyros, Kofte, Octopus } from "../../Assets";
import { useState } from "react"

const foodItems = [
  {
    id: 1,
    title: 'Lasagna Bolognese',
    price: '15.95',
    imgSrc: Lasagna,
    imageURL: Lasagna,
    calories: '380',
    qty: '1',
    category: 'Italian'
  },

  {   
    id: 2,
    title: 'Moussaka',
    price: '15.65',
    imgSrc: Moussaka,
    imageURL: Moussaka,
    calories: '300',
    qty: '1',
    category: 'Greek'
  },

  {
    id: 3,
    title: 'Pizza Capricciosa',
    price: '14.25',
    imgSrc: Pizza,
    imageURL: Pizza,
    calories: '300',
    qty: '1',
    category: 'Italian'
  },

  {
    id: 4,
    title: 'Souvlaki',
    price: '12.25',
    imgSrc: Souvlaki,
    imageURL: Souvlaki,
    calories: '500',
    qty: '1',
    category: 'Greek'
  },

  {
    id: 5,
    title: 'Ceviche',
    price: '12.25',
    imgSrc: Ceviche,
    imageURL: Ceviche,
    calories: '240',
    qty: '1',
    category: 'Turkish'
  },

  {
    id: 6,
    title: 'Chicken Gyros',
    price: '11.95',
    imgSrc: Gyros,
    imageURL: Gyros,
    calories: '480',
    qty: '1',
    category: 'Greek'
  },
 
  {
    id: 7,
    title: 'Kofte',
    price: '12.45',
    imgSrc: Kofte,
    imageURL: Kofte,
    calories: '340',
    qty: '1',
    category: 'Turkish'
  },

  {
    id: 8,
    title: 'Roasted Octopus',
    price: '14.35',
    imgSrc: Octopus,
    imageURL: Octopus,
    calories: '410',
    qty: '1',
    category: 'Greek'
  }
]

const Menu = () => {
  const [scrollValue, setScrollValue] = useState(0)
  
  return (
      <section className="w-full my-5">
          <div className="w-full flex items-center justify-between">
            <Title title="Our Menu" />
            <PrevNextButtons 
              onNext={() => setScrollValue(1250)} 
              onPrev = {() => setScrollValue(-1250)} 
            />
          </div>
          <Container className="bg-containerbg" scrollOffset = {scrollValue} items = {foodItems} />
          
      </section>
  )
}

export default Menu
