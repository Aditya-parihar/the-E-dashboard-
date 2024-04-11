import React from 'react'

const AddProduct = () => {
  return (
    <div className='flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <form className='flex flex-col p-4 mb-20'>
          <input className='mb-2 px-4 py-2 border rounded text-lg' type='text' name='name' placeholder='Enter the name'/>
          <input className='mb-2 px-4 py-2 border rounded text-lg' type='text' name='price' placeholder='Enter the price'/>
          <input className='mb-2 px-4 py-2 border rounded text-lg' type='text' name='category' placeholder='Enter the category'/>
          <input className='mb-2 px-4 py-2 border rounded text-lg' type='text' name='id' placeholder='Enter the Id'/>
          <button className=' px-4 py-2 border rounded bg-blue-500' type='button'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct