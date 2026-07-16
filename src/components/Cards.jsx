import React from 'react'

const Cards = ({ imgUrl, name, category, price , id, setProductId}) => {
    return (
        <article className=' h-auto flex flex-col gap-5 relative'>
            <div className='w-full  rounded-lg'>
                <img src={imgUrl?.desktop} alt="" className='w-full h-auto object-contain rounded-lg' />
            </div>
            <button onClick={() => setProductId(id)} className='flex gap-2 items-center justify-center border border-red-400 w-[70%] md:max-w-[60%] px-5 py-2 rounded-full absolute left-[15%] md:left-[20%] bg-white bottom-20'> <img src="./images/icon-add-to-cart.svg" alt="" /> Add to cart</button>
            <div className='flex flex-col items-start justify-start mt-2'>
                <h3 className='text-sm'>{name}</h3>
                <h2 className='text-base'>{category}</h2>
                <span className='text-[15px]'>${price}</span>
            </div>
        </article>
    )
}

export default Cards