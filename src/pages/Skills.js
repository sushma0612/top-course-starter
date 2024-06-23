import React from 'react'
import { CiShop } from "react-icons/ci";

const Skills = () => {
  return (
   
      <div className='mx-8 mr-8 mt-8 h-full bg-indigo-200 opacity-80'>

      <div className=' flex flex-initial h-16 opacity-100'>
         <div className=' self-center px-5 text-lg '>
          Skills
        </div>
        <div className=' self-center h-1 w-1/2 bg-indigo-400'>
        </div>
      </div>

      <div className='w-full flex flex-wrap justify-around'>
      <div className='mx-4 w-2/5 max-[600px]:w-4/5'>
        <div className='flex flex-row justify-between'>
          <div>
            HTML
          </div>
          <div>
            100%
          </div>
        </div>
        <div className='h-3 mt-1 w-full bg-white z-5'>
          <div className='h-full w-full bg-indigo-700'>

          </div>
        </div>
      </div>
      <div className='mx-4 w-2/5 max-[600px]:w-4/5 max-[600px]:mt-4'>
        <div className='flex flex-row justify-between'>
          <div>
            PHP
          </div>
          <div>
            80%
          </div>
        </div>
        <div className='h-3 mt-1 w-full bg-white z-5'>
          <div className='h-full w-4/5 bg-indigo-700'>

          </div>
        </div>
      </div>
      <div className='mx-4 w-2/5 mt-4 max-[600px]:w-4/5'>
        <div className='flex flex-row justify-between'>
          <div>
            CSS
          </div>
          <div>
            90%
          </div>
        </div>
        <div className='h-3 mt-1 w-full bg-white z-5'>
          <div className='h-full w-11/12 bg-indigo-700'>

          </div>
        </div>
      </div>
      <div className='mx-4 w-2/5 mt-4 max-[600px]:w-4/5'>
        <div className='flex flex-row justify-between'>
          <div>
          WORDPRESS/CMS
          </div>
          <div>
            90%
          </div>
        </div>
        <div className='h-3 mt-1 w-full bg-white z-5'>
          <div className='h-full w-11/12 bg-indigo-700'>

          </div>
        </div>
      </div>
      <div className='mx-4 w-2/5 mt-4 max-[600px]:w-4/5'>
        <div className='flex flex-row justify-between'>
          <div>
          JAVASCRIPT
          </div>
          <div>
            75%
          </div>
        </div>
        <div className='h-3 mt-1 w-full bg-white z-5'>
          <div className='h-full w-3/4 bg-indigo-700'>

          </div>
        </div>
      </div>
      <div className='mx-4 w-2/5 mt-4 max-[600px]:w-4/5'>
        <div className='flex flex-row justify-between'>
          <div>
          PHOTOSHOP
          </div>
          <div>
            55%
          </div>
        </div>
        <div className='h-3 mt-1 w-full bg-white z-5'>
          <div className='h-full w-7/12 bg-indigo-700'>

          </div>
        </div>
      </div>

      </div>

      <div className=' flex flex-initial h-16 opacity-100 mt-4'>
         <div className=' self-center px-5 text-lg '>
          Interests
        </div>
        <div className=' self-center h-1 w-1/2 bg-indigo-400'>
        </div>
      </div>

      <div className='flex flex-row flex-wrap justify-around'>

        <div className='bg-indigo-300 h-20 w-1/4'>
          <div>
          <CiShop />
          </div>
          <div>

Lorem Ipsum
          </div>
        </div>





      </div>
     
    

    </div>
  )
}

export default Skills
