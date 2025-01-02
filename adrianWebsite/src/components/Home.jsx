import React from 'react';
import adrianSynergy from '../assets/synergyPicture2.jpg';


function Home() {
    return(
    <div className='bg-[#A0A09B] flex items-center'>
      <img className='h-[600px] rounded-md pl-20 pt-5' src={adrianSynergy} alt='Me giving a small talk at Synergy Conference' />
    </div>
    )
}

export default Home