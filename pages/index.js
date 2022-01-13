import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  return(
    <div className='flex items-center justify-center h-[100vh] w-[100vw] font-light'>
        
      <Image src='/17.jpg' layout='fill'/>
      <div className='bg-white/20 backdrop-blur-md h-[550px] w-[400px]  md:w-[650px] lg:w-[800px] rounded-xl shadow-xl flex flex-row'>
     
        <div className='text-black/80 md:basis-1/2'>
          <div className='text-3xl pt-20 pb-12 text-center sm:text-left mx-32 font-semibold'>Login</div>
          <table className='text-xl'>
            <tr>
              <td className='pr-24 px-6 py-3'>Username :</td>
              <td><input className='bg-transparent placeholder-black/50 w-[120px] font-thin hover:shadow-inner rounded-full px-2'  placeholder='Name...'/></td>
            </tr>
            <tr>
              <td className='px-6 py-3'>Email :</td>
              <td><input className='bg-transparent placeholder-black/50 w-[120px] font-thin hover:shadow-inner rounded-full px-2' placeholder='Email...'/></td>
            </tr>
            <tr>
              <td className='px-6 py-3'>Password :</td>
              <td><input className='bg-transparent placeholder-black/50  w-[120px] font-thin hover:shadow-inner rounded-full px-2' placeholder='Password...'/></td>
            </tr>
            <tr>
              <td className='px-6 py-3 pb-16'>Confirm password :</td>
              <td><input className='bg-transparent placeholder-black/50  w-[120px] mb-12 font-thin hover:shadow-inner rounded-full px-2'  placeholder='Password...'/></td>
            </tr>
          </table>
          <button className='bg-white/5 backdrop-blur-sm w-[130px] h-[40px] rounded-full shadow-lg hover:bg-white/20 mx-32 text-xl'>Login</button>
        </div>
        <div className=' w-full h-full hidden md:flex'>
                 <Image src='/32.png' className='w-16 h-16' width={1200} height={120} objectFit='contain'/>
        </div>
      </div>
    </div>
  )
}
