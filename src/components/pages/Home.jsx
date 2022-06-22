import React from 'react'
import Hero from '../Hero'
import Categories from '../Categories'
import Offers from '../Offers'
import Featured from '../Featured'
import Header from '../Header'

const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Categories/>
        <Offers />
        <Featured />
    </>
  )
}

export default Home
