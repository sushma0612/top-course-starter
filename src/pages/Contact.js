import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";import { FaTwitter } from "react-icons/fa";import { FaInstagram } from "react-icons/fa";import { FaSkype } from "react-icons/fa";import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='mx-8 mr-8 mt-8 h-full bg-indigo-200 opacity-80  max-[420px]:mx-2 '>
       <div className=' flex flex-initial h-16 opacity-100 max-[420px]:h-10'>
         <div className=' self-center px-5 text-lg  max-[800px]:text-md max-[420px]:text-sm'>
          Contact
        </div>
        <div className=' self-center h-1 w-1/2 bg-indigo-400 max-[420px]:h-0.5'>
        </div>
      </div>
      <div className='px-5  text-4xl h-14 font-black max-[800px]:text-2xl max-[420px]:text-lg max-[420px]:h-8 max-[800px]:h-8 '>
        CONTACT ME....
      </div>

      <div className='flex flex-row flex-wrap justify-around '>
        <div className='flex flex-row justify-left items-center h-28 bg-indigo-400  mx-8 w-2/5 my-2 max-[800px]:mx-0 max-[800px]:w-4/5'  >
          <div className='mx-8 '>
          <IoLocationOutline className='text-3xl mx-2 max-[420px]:text-2xl'/>
          <div className='bg-indigo-100 h-12 rounded-full w-12 -mt-10 z-10 max-[420px]:h-10 max-[420px]:w-10 max-[420px]:-mt-8'></div>
          </div>
          <div className=''>
            <div className='text-xl font-bold max-[800px]:text-lg'>
              My Address
            </div>
            <div className=' max-[800px]:text-sm'>
            A108 Adam Street, New York, NY 535022
            </div>
          </div>
        </div>
        <div className='flex flex-row  justify-left  items-center h-28 bg-indigo-400 mx-8 w-2/5 my-2 max-[800px]:mx-0 max-[800px]:w-4/5'  >
          <div className='mx-8 '>
          <IoShareSocialOutline className='text-3xl mx-2 max-[420px]:text-2xl'/>
          <div className='bg-indigo-100 h-12 rounded-full w-12 -mt-10 z-10 max-[420px]:h-10 max-[420px]:w-10 max-[420px]:-mt-8'></div>
          </div>
          <div className=''>
            <div className='text-xl font-bold'>
              Social Profiles
            </div>
            <div className='flex flex-row my-2'>
            <FaTwitter className='mx-2'/>
            <FaFacebook className='mx-2'/>
            <FaInstagram className='mx-2'/>
            <FaSkype className='mx-2'/>
            <FaLinkedin className='mx-2' />
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center h-28 bg-indigo-400 mx-8 w-2/5 my-2   justify-left max-[800px]:mx-0 max-[800px]:w-4/5 '  >
          <div className='mx-8 '>
          <MdOutlineMailOutline  className='text-3xl mx-2 max-[420px]:text-2xl'/>
          <div className='bg-indigo-100 h-12 rounded-full w-12 -mt-10 z-10 max-[420px]:h-10 max-[420px]:w-10 max-[420px]:-mt-8'></div>
          </div>
          <div className='text-wrap'>
            <div className='text-xl font-bold'>
             Email Me
            </div>
            <div>
            contact@example.com
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center h-28 bg-indigo-400 mx-8 w-2/5 my-2 justify-left max-[800px]:mx-0 max-[800px]:w-4/5'  >
          <div className='mx-8 '>
          < MdWifiCalling3 className='text-3xl mx-2 max-[420px]:text-2xl'/>
          <div className='bg-indigo-100 h-12 rounded-full w-12 -mt-10 z-10 max-[420px]:h-10 max-[420px]:w-10 max-[420px]:-mt-8'></div>
          </div>
          <div className=''>
            <div className='text-xl font-bold'>
              Call Me
            </div>
            <div>
            +1 5589 55488 55
            </div>
          </div>
        </div>
      </div>


      <div className='bg-indigo-300 mx-10 my-4 flex flex-col '>
        <div className='max-[800px]:mx-4 flex flex-row h-20 items-center justify-around max-[800px]:flex-col'>
          <input type='text' className=' my-2 h-10 w-full ml-4 bg-indigo-400  placeholder:text-indigo-600  max-[800px]:mr-4' placeholder="Your Name">
          </input>
          <input  type='text' className=' my-2  h-10 w-full mx-4 bg-indigo-400  placeholder:text-indigo-600' placeholder="Your Email">
          </input>
        </div>
        <div className='ml-4 mr-4'>
          <input  type='text' className=' my-2 h-10 w-full mr-4 bg-indigo-400  placeholder:text-indigo-600' placeholder="Subject">
          </input>
        </div>
          <div className='ml-4 mr-4 flex flex-col items-start'>
          <input  type='text' className=' my-2 h-40 w-full mr-4 text-wrap bg-indigo-400  placeholder:text-indigo-600 pla' placeholder="Message">
          </input>
          </div>
      </div>
     <div className='flex flex-col items-center'> <button className='bg-violet-400 h-10 w-24 rounded-md'>
        Submit
      </button>
      </div>
      <div className='h-10'>

      </div>
    </div>
  )
}

export default Contact
