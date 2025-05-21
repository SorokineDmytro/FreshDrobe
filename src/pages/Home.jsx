import React from 'react'
import AsideCatalog from '../components/Aside/AsideCatalog'
import { PromoCarousel } from '../components/Main/Home/PromoCarousel'
import CategoryPlates from '@/components/Main/Home/CategoryPlates/CategoryPlates'

const Home = () => {
  return (
    <div className="bg-gray-100 flex-grow py-4 md:py-5 lg:py-7.5 px-[2.5%]">
      <div className="2xl:w-[1630px] m-auto min-h-full flex">
        <aside className='hidden xl:flex flex-col gap-y-7.5 w-xs h-full mr-10'>
          <AsideCatalog />
        </aside>
        <main className='w-full lg:w-0 flex flex-col gap-y-2.5 md:gap-y-5 lg:gap-y-7.5 lg:flex-grow h-full'>
          <PromoCarousel />
          <CategoryPlates />
        </main>
      </div>
    </div>
  )
}

export default Home
