import React from 'react';
import adrianSynergy from '../assets/synergyPicture2.jpg';
import adrianGrad from '../assets/gradMenacho.jpg';
import adrianSHPE from '../assets/shpe2024Pic1.jpg';


function Home() {
    return(
    <div className='bg-[#A0A09B] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      <img className='rounded-md w-full h-auto mx-auto' src={adrianSynergy} alt='Me giving a small talk at Synergy Conference' />
      <img className='rounded-md w-full h-auto mx-auto' src={adrianGrad} alt='Grad Pictures of me' />
      <img className='rounded-md w-full h-auto mx-auto' src={adrianSHPE} alt='' />
    </div>
    )
}

export default Home