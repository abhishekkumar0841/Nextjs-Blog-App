import CardList from '@/components/cardList/CardList'
import CategoryList from '@/components/categoryList/CategoryList'
import Feature from '@/components/feature/Feature'
import Menu from '@/components/menu/Menu'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Feature/>
      <CategoryList/>
      <div className=' flex items-center gap-24'>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

export default Home