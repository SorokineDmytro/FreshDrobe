import React from 'react'
import CatalogItem from './CatalogItem'
import { productList } from '../../../../../../data/productList'

const Catalog = ({ list = productList}) => {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-5 lg:gap-5 lg:my-7.5'>
        {list.map((product) => (
            <CatalogItem product={product} key={product.id} />
        ))}
    </ul>
  )
}

export default Catalog
