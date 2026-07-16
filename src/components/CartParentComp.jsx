import React from 'react'

const CartParentComp = ({productId}) => {
  console.log('product id from cart', productId)
  
  return (
    <aside className='w-full max-w-[30%] bg-white p-5 rounded-2xl h-auto'>
      <div className='w-full flex justify-start items-center'>
        <h2 className='text-base md:text-2xl text-[#c73a0f] font-semibold'>Your Cart (0)</h2>
      </div>
      {/* cart content shows here */}
      <div className='h-atuo hidden'></div>
      {/* when cart is empty */}
      <div className='mx-auto flex flex-col gap-3 w-full'>

        <div className='w-[200px] h-auto min-h-[200px] mx-auto '>
          <img src="./images/illustration-empty-cart.svg" alt="Empty cart" className='w-full h-auto object-contain' />
        </div>
        <h3 className='text-center text-[#87635a] text-base font-normal'>Your added items will appear here</h3>
      </div>
    </aside>
  )
}

export default CartParentComp