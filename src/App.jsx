import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import DesertParentComp from './components/DesertParentComp'
import CartParentComp from './components/CartParentComp'



function App() {
  const [productId, setProductId] = useState("0");


  return (
    <main className='w-full  h-auto min-h-screen mx-auto p-5  bg-[#f4edeb] flex items-start justify-center'>
      <section className='max-w-[375px] md:max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-start justify-center gap-5'>
        <DesertParentComp setProductId={setProductId} />
        <CartParentComp productId={productId} />
      </section>
    </main>
  )
}

export default App
