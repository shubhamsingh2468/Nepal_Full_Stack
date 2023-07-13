import React from 'react'
import { RiSearchLine } from 'react-icons/ri';
import Middle from './components/Middle'
import Footer from './components/Footer'
import 'tailwindcss/tailwind.css';







function App() {
  return (
    <>
    
    
    <div className=''>
    
    
    



    <div className='flex flex-row  bg-stone-950 h-20 justify-between '>
        <div className='text-white'>    
        
        shoppers</div>
  
         <div className='text-white'>
         <a href="/Shoppers">Shoppers</a>
         </div>
      
         <div className='text-white'>
         <a href="/Business">Business</a>

         </div>
          <div className='text-white' >investors</div>
        <div className='text-white'>careers</div>
         <div className='text-white'>contact</div>
         <div className=''>
          <RiSearchLine className='text-white' />
              </div>
      </div>

      <div className='flex flex-row bg-gray-200 h-20 justify-between '>
         <div className=''> stores</div>
        <div className=''>simon search</div>
        <div className=''>dining</div>
        <div className='' >home</div>
         <div className=''>luxury</div>
         <div className=''>map </div>
         <div className=''>deal</div>
        <div className=''>Event</div>
        <div className='' >investors</div>
         <div className=''>about </div>
         <div className=''>hour</div>
        <div className=''>
        more </div>
      
      </div>
     <div className='grid grid-flow-col bg-black mt-10 h-80'>
      <div>
          <h4 className='text-white text-center mt-20 text-4xl'>Current Store and Center Happenings</h4>
          <h4 className='text-white text-center text-6xl'>EVENTS &
NEWS</h4>
      </div>
      </div>
      
      
      </div>
      
      <Middle />
      
      <Footer />
      

      
      
      



    </>
  )
}

export default App