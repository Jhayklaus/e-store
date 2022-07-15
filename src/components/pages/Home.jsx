import React from 'react'
import Hero from '../Hero'
import Categories from '../Categories'
import Offers from '../Offers'
import Header from '../Header'
import FeaturedCategories from '../FeaturedCategories'

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <FeaturedCategories/>
        <Categories/>
        <Offers />
    </>
  )
}

export default Home
