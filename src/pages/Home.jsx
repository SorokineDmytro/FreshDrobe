import React from 'react'
import AsideCatalog from '../components/Main/AsideCatalog'

const Home = () => {
  return (
    <div className="bg-gray-100 flex-grow py-7.5">
      <div className="2xl:w-[1630px] m-auto min-h-full flex">
        <aside className='hidden lg:flex flex-col gap-y-7.5 w-xs h-full mr-10'>
          <AsideCatalog />
        </aside>
        <main className='flex-grow h-full py-7.5'>
          
        </main>
      </div>
    </div>
  )
}

export default Home
