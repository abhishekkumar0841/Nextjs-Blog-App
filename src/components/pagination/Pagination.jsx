import React from 'react'

const Pagination = () => {
  return (
    <div className=' flex justify-between my-14'>
      <button className=' w-32 py-2 font-semibold text-xl bg-red-500 rounded-xl'>Previous</button>
      <button  className=' w-32 py-2 font-semibold text-xl bg-red-500 rounded-xl'>Next</button>
    </div>
  )
}

export default Pagination