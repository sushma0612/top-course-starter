import React from 'react'
// import Developer from '/Users/sushma/Downloads/top-course-starter/src/pictures/Developer.jpeg'
import { SlArrowRight } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { FaHeadset } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
const Abt = () => {
  return (
   
    <div >
    
     <div className='mx-8 mr-8 mt-8 h-full bg-indigo-200 opacity-80 max-[420px]:mx-2'>
     
       <div className=' flex flex-initial h-16 opacity-100 max-[420px]:h-10'>
         <div className=' self-center px-5 text-lg  max-[800px]:text-md max-[420px]:text-sm'>
          About
        </div>
        <div className=' self-center h-1 w-1/2 bg-indigo-400 max-[420px]:h-0.5'>
        </div>
      </div>
      <div className='px-5  text-4xl h-12 font-black max-[800px]:text-2xl max-[420px]:text-lg max-[420px]:h-8 max-[800px]:h-8' >
        LEARN MORE ABOUT ME....
      </div>

      <div className='flex flex-row flex-wrap mx-5 mt-4 h-1/2 max-[420px]:mt-0 max-[800px]:mt-4'>
      
        <div className='flex flex-col h-full w-full'>
            <div className='ml-10 text-4xl  text-indigo-500 max-[700px]:text-2xl max-[800px]:ml-0 max-[420px]:text-lg max-[420px]:ml-0'>
              SOFTWARE DEVELOPER
            </div>
            <div className=' mx-10 mt-5 h-full  text-justify text-xl  max-[600px]:text-base max-[420px]:mx-0 max-[420px]:text-sm max-[420px]:mt-1 max-[800px]:mx-2 max-[800px]:text-md max-[800px]:mt-4' >
            
            Hello! I’m Jhon Doe, a software developer with 4 years of experience in building robust 
            applications and solving complex problems. My journey in the tech world has equipped me with a diverse skill set and a relentless drive to keep learning and improving.
            <br/>
            My mission is to leverage technology to create impactful solutions that drive success and innovation.

            <div className='py-2 grid grid-rows-4 grid-flow-col gap-4 max-[800px]:grid-rows-8  '>
           <div className='flex flex-row items-center'> 
            <SlArrowRight className='text-indigo-800 ' />
            <div className='mx-2 font-semibold '>
             Birthday:
            </div>
            <div>
              1 May 1995
            </div>
            </div>

            <div className='flex flex-row items-center'>
               <SlArrowRight className='text-indigo-800 ' />
               <div className='mx-2 font-semibold'>
             Age:
            </div>
            <div>
              30
            </div>
            </div>
            <div className='flex flex-row items-center'> 
              <SlArrowRight className='text-indigo-800 '/>
              <div className='mx-2 font-semibold'>
             Website:
            </div>
            <div>
            www.example.com
            </div>
            </div>
            <div className='flex flex-row items-center'>
              <SlArrowRight className='text-indigo-800 '/>
              <div className='mx-2 font-semibold'>
              Phone:

            </div>
            <div>
            +123 456 7890
            </div>
            </div>
            <div className='flex flex-row items-center'>
              <SlArrowRight className='text-indigo-800 '/>
              <div className='mx-2 font-semibold'>
              City:

            </div>
            <div>
            New York, USA
            </div>
            </div>
            <div className='flex flex-row items-center'>
              <SlArrowRight className='text-indigo-800 ' />
              <div className='mx-2 font-semibold'>
              Degree:

            </div>
            <div>
            Master
            </div>
            </div>

            <div className='flex flex-row items-center'> 
              <SlArrowRight className='text-indigo-800 '/>
              <div className='mx-2 font-semibold'>
              PhEmailone:

            </div>
            <div >
            email@example.com
            </div>
            </div> 

            <div className='flex flex-row items-center'> 
              <SlArrowRight className='text-indigo-800 '/>
              <div className='mx-2 font-semibold'>
              Freelance:
            </div>
            <div>    
            Available
            </div>
            </div> 
              </div>   
            
            </div>
           
        </div>
      </div>

      <div className='flex justify-around  w-full h-28 mt-10 max-[420px]:flex-wrap max-[420px]:h-56 '>
        <div className='flex flex-col bg-indigo-400  h-30 w-52 items-center max-[420px]:h-20 max-[420px]:w-2/5 max-[800px]:w-1/5'>
          <div className='text-4xl text-indigo-700 z-30 max-[420px]:text-2xl  '>
          <CiFaceSmile className='-mt-4 ' />
          </div>
          <div className='bg-indigo-100 h-12 rounded-full w-12 -mt-10 z-10 max-[420px]:-mt-8 max-[420px]:h-10 max-[420px]:w-10'></div>
          <div className='text-2xl font-bold mt-2 max-[420px]:text-sm'>
            232
          </div>
          <div className='font-semibold max-[420px]:text-sm text-center'>
            Happy Clients
          </div>
        </div>

        <div className='flex flex-col bg-indigo-400  h-30 w-52 items-center max-[420px]:h-20 max-[420px]:w-2/5 max-[800px]:w-1/5'>
          <div className='text-4xl text-indigo-700 z-30 max-[420px]:text-2xl '>
          <GoProjectSymlink className='-mt-4' />
          </div>
          <div className='bg-indigo-100 h-12 rounded-full w-12 -mt-10 z-10 max-[420px]:-mt-8 max-[420px]:h-10 max-[420px]:w-10'></div>
          <div className='text-2xl font-bold mt-2 max-[420px]:text-sm'>
            521
          </div>
          <div className='font-semibold max-[420px]:text-sm'>
           Projects
          </div>
        </div>
        <div className='flex flex-col bg-indigo-400  h-30 w-60 items-center max-[420px]:h-20 max-[420px]:w-2/5 max-[420px]:mt-8 max-[800px]:w-1/5'>
          <div className='text-4xl text-indigo-700 z-30 max-[420px]:text-2xl '>
          <FaHeadset  className='-mt-4' />
          </div>
          <div className='bg-indigo-100 h-12 rounded-full w-12 -mt-10 z-10 max-[420px]:-mt-8 max-[420px]:h-10 max-[420px]:w-10'></div>
          <div className='text-2xl font-bold mt-2 max-[420px]:text-sm'>
            1463
          </div>
          <div className='font-semibold max-[420px]:text-sm text-center'>
            Hours of support 
          </div>
        </div>
        <div className='flex flex-col bg-indigo-400  h-30 w-52 items-center max-[420px]:h-20 max-[420px]:w-2/5 max-[420px]:mt-8 max-[800px]:w-1/5'>
          <div className='text-4xl text-indigo-700 z-30 max-[420px]:text-2xl '>
          <FaAward className='-mt-4' />
          </div>
          <div className='bg-indigo-100 h-12 rounded-full w-12 -mt-10 z-10 max-[420px]:-mt-8 max-[420px]:h-10 max-[420px]:w-10'></div>
          <div className='text-2xl font-bold mt-2 max-[420px]:text-sm'>
            24
          </div>
          <div className='font-semibold max-[420px]:text-sm'>
            Awards
          </div>
        </div>
      </div>
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
      <div className='h-10'></div>

      </div>      
      
    </div>

  )
}

export default Abt
