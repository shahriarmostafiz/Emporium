import { useState } from 'react'
import './App.css'
import { NavLink, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeCard/CoffeeCard';
import Navbar from './Components/Navbar/Navbar';

function App() {
  // const [count, setCount] = useState(0)
  const loadedcoffees = useLoaderData()
  const [allcoffee, setCoffee] = useState(loadedcoffees)
  // console.log(allcoffee);
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-center'>
        <div className='grid md:grid-cols-2 gap-6'>
          {
            allcoffee?.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} setCoffee={setCoffee} allCoffee={allcoffee}></CoffeeCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
