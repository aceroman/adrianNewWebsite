import React, {useEffect} from 'react';
import ProjectCard from './ProjectCard';
import test1 from '../assets/AboutPicture1.jpg';
import CyberPic from '../assets/cybersecurityChallengePic.jpeg';
import CMDAPic from '../assets/cmdaCapstonePicture1.JPG';
import SHPEConvention from '../assets/shpeConvention2024.png';
import RC4Pic from '../assets/RC4Picture.png';
import Synergy from '../assets/SynergyGSPPicture.jpg';
import cmda4654Pic from '../assets/4654Picture.png';
import Waller from '../assets/adrianWaller1.jpeg';


function Projects() {

    return (
        <div className='bg-[#A0A09B]'>

            <div className='flex justify-center'>
                <h1 className='text-5xl font-semibold text-center border-b-4 border-white p-4'>Experience</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[150px] pt-10'>
                <ProjectCard title='SHPE Cybersecurity Challenge' image={CyberPic} description='Particpated in 2024 SHPE Cybersecurity Challenge!' />
                <ProjectCard title="2024 SHPE National Convention" image={SHPEConvention} description='Attended the 2024 SHPE National Conference to connect with others'/>
                <ProjectCard title='AWS Summit Conference' image={test1} description='Attended the AWS Summit Conference to learn more about startups!'/>
                <ProjectCard title='Synergy Conference 2024' image={Synergy} description='Assisted in the Inagural Synergy Conference with the Graduate Student Programs' />
                <ProjectCard title='Data Analytics Research Assistant' image={Waller} description='Under Dr. Tremayne Waller, analyzed projects within the Graduate Student Programs' />
            </div>


            <div className='flex justify-center'>
                <h1 className='text-5xl font-semibold text-center border-b-4 border-white p-4'>Projects</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[150px] pt-10'>
                <ProjectCard title='CMDA Capstone Project' image={CMDAPic} description='The Three Ticketeers tacking Capstone together!'/>
                <ProjectCard title='RC4 MAGMA Implementation' image={RC4Pic} description='Researched and developed RC4 Cryptosystem using MAGMA'/>
                <ProjectCard title='Health Care Partial Least Squares' image={cmda4654Pic} description='Developed in-depth understanding of PLS using health care data'/>
             </div>

        </div>
    )
}

export default Projects