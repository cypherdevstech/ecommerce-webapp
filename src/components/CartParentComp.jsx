import React, { useEffect, useLayoutEffect, useState } from 'react'
import { X } from "lucide-react";
import { products } from '../utils/products'

function calculateItemPrice(price, number) {
  return price * number
}

const CartParentComp = ({ productId }) => {
  const [cartStorage, setCartStorage] = useState([])
  useEffect(() => {

    const cartItem = products.find((product) => product?.id == productId);
    if (cartItem?.id) {
      setCartStorage((prev) => [...prev, cartItem])
    }
  }, [productId])

  const RemoveCartItem = (id) => {
    if (!id) return;
    const removedItems = cartStorage.filter((item) => item?.id !== id)
    setCartStorage((prev) => [...removedItems])
  }

  console.log('product from cart', cartStorage)
  return (
    <aside className='w-full max-w-[30%] bg-white p-5 rounded-2xl h-auto min-h-[250px]'>
      <div className='w-full flex justify-start items-center'>
        <h2 className='text-base md:text-2xl text-[#c73a0f] font-semibold'>Your Cart ({cartStorage?.length})</h2>
      </div>
      {/* cart content shows here */}
      {
        cartStorage?.length > 0 ? (<div className='h-atuo flex flex-col gap-4 mt-5 '>
          {
            cartStorage.map((item) => (
              <div key={item?.id} className='flex items-start justify-between  gap-1 border-b border-[#ad8985] pb-3'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-base text-black/90 font-medium'>{item?.name}</h2>
                  <div className='flex items-end jusify-start gap-2 text-sm'><span className='text-[#c73a0f] font-bold'>1x</span> <span className='font-normal text-[#ad8985]'>@{item?.price}</span><span className='font-bold text-[#260f08]'>${calculateItemPrice(1, item.price)}</span></div>
                </div>
                <button type='button' onClick={() => RemoveCartItem(item?.id)} className=' border border-[#ad8985] rounded-full h-[20px] w-[20px] cursor-pointer flex items-center justify-center'>
                  <X className='h-3.5 w-3.5 text-black/90' />
                </button>
              </div>
            ))
          }

        </div>) : (<div className='mx-auto flex flex-col gap-3 w-full'>

          <div className='w-[200px] h-auto min-h-[200px] mx-auto '>
            <img src="./images/illustration-empty-cart.svg" alt="Empty cart" className='w-full h-auto object-contain' />
          </div>
          <h3 className='text-center text-[#87635a] text-base font-normal'>Your added items will appear here</h3>
        </div>)
      }

      {/* when cart is empty */}

    </aside>
  )
}

export default CartParentComp