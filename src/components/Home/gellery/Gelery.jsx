
import React, { useEffect, useState } from 'react';
import GeleryCard from '../GeleryCard/GeleryCard';


const Gallery = () => {
   const [toys,setToys] =useState([])
useEffect(()=>{
fetch('https://assignment-11-server-blue-rho.vercel.app/gelery')
.then(res=>res.json())
.then(data=>{ 
   
   console.log(data._id)
   setToys(data)})
},[])

   return (
      <div className='my-6 md:my-16 '>


         <h1 className="text-2xl md:text-4xl font-bold text-center text-primary mb-1 md:mb-4">Toys Gallery</h1>
         <p className="text-lg text-center md:mb-8 mb-2 px-6 sm:px-10">
            Welcome to our Toy Gallery, 
         </p>

         <div className=" md:grid grid-cols-3 gap-4">
            {
               toys.map(toy => <GeleryCard toy={toy} key={toy._id}></GeleryCard>)
            }
         </div>
      </div>
   );
};

export default Gallery;














