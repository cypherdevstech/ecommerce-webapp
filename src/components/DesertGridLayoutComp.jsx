import React from 'react'
import Cards from './Cards'
import { products } from '../utils/products'

const DesertGridLayoutComp = ({setProductId}) => {
    console.log('products', products)
    // imgUrl, name, category, price
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
            {
                products.map((product) => (
                    <Cards key={product?.id ?? ''} imgUrl={product?.image} name={product?.name} category={product?.category} price={product?.price} id={product?.id} setProductId={setProductId} />
                ))
            }
        </section>
    )
}

export default DesertGridLayoutComp