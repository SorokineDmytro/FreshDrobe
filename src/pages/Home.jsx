import React from 'react'
import AsideCatalog from '../components/Aside/AsideCatalog'
import { PromoCarousel } from '../components/Main/Home/PromoCarousel'
import CategoryMenu from '@/components/Main/Home/CategoryMenu/CategoryMenu'
import Sales from '@/components/Aside/Sales'
import ArticlesList from '@/components/Aside/Articles/ArticlesList'
import CatalogNew from '@/components/Main/Home/Catalogs/CatalogNew'

const Home = () => {
  return (
    <div className="bg-gray-100 flex-grow py-4 md:py-5 lg:py-7.5 px-[2.5%]">
      <div className="2xl:w-[1630px] m-auto min-h-full flex">
        <aside className='hidden xl:flex flex-col gap-y-7.5 w-[300px] 2xl:w-xs h-full mr-10'>
          <AsideCatalog />
          <Sales />
          <ArticlesList />
        </aside>
        <main className='w-full lg:w-0 flex flex-col gap-y-2.5 md:gap-y-5 lg:gap-y-7.5 lg:flex-grow h-full'>
          <PromoCarousel />
          <CategoryMenu />
          <CatalogNew />
          <div className='lg:hidden'>
            <Sales />
          </div>
          <div className='lg:hidden'>
            <ArticlesList />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
