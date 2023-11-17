import React from 'react'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import Card from '../../components/card'

const Home = () => {
  return (
    <div className='homeWrapper'>
        <Header/>
        <Slider/>
        <Card/>

    </div>
  )
}

export default Home