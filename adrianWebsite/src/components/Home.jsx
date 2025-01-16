import React from 'react';
import adrianSynergy from '../assets/synergyPicture2.jpg';
import adrianGrad from '../assets/gradMenacho.jpg';
import adrianSHPE from '../assets/shpe2024Pic1.jpg';


function Home() {
    return(
    <div className='bg-[#A0A09B] min-h-screen p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center'>
        <img className='rounded-md w-full h-auto mx-auto max-w-xs sm:max-w-sm md:max-w-md' src={adrianSynergy} alt='Me giving a small talk at Synergy Conference' />
        <img className='rounded-md w-full h-auto mx-auto max-w-xs sm:max-w-sm md:max-w-md' src={adrianGrad} alt='Grad Pictures of me' />
        <img className='rounded-md w-full h-auto mx-auto max-w-xs sm:max-w-sm md:max-w-md' src={adrianSHPE} alt='' />
      </div>
    </div>
    )
}

export default Home