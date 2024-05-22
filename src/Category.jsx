import React from 'react'

const Category = ({finalData,setSpecicProduct}) => {
    let cat = finalData.map((v,i) =>{
        return(
             <li key={i} onClick={() => {setSpecicProduct(v)}} className='bg-[#ccc] cursor-pointer text-[20px] font-serif font-semibold font-[500] mb-2'>{v}</li>
        )
    })
  return (
    <div>
      <h1 className='text-[25px] font-[500] p-10'>Product Category</h1>
      <ul>
            {cat}
      </ul>
    </div>
  )
}

export default Category
