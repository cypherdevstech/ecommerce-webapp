import React from 'react'
import DesertParentCompTopCont from './DesertParentCompTopCont'
import DesertGridLayoutComp from './DesertGridLayoutComp'

const DesertParentComp = ({setProductId}) => {
    return (
        <section className='w-full max-w-[70%] flex flex-col gap-5'>
            <DesertParentCompTopCont />
            <DesertGridLayoutComp setProductId={setProductId}/>
        </section>
    )
}

export default DesertParentComp