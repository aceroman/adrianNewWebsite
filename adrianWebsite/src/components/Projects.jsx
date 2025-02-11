import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import Experiences from '../experiences.json';


function Projects() {

    const [images, setImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const imgMap = {};
            for (const category of Object.keys(Experiences)) { 
                for (const item of Experiences[category]) {
                    try {
                        imgMap[item.image] = (await import(`../${item.image}`)).default;
                    } catch (error) {
                        console.error(`Error loading image: ${item.image}`, error);
                    }
                }
            }
            setImages(imgMap);
        };

        loadImages();
    }, []);

    return (
        <div className='bg-[#3B4141] px-4 lg:px-16 xl:px-24'>

            <div className='flex justify-center'>
                <h1 className='text-white text-5xl font-semibold text-center border-b-4 border-white p-4'>Experience</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[150px] md:gap-12 xl:gap-28 pt-10'>
                {Experiences.experiences.map((exp, index) =>(
                    <ProjectCard key={index} title={exp.title} image={images[exp.image] || ''} description={exp.description} websiteLink={exp.website} />
                ))}
            </div>

            <div className='flex justify-center mt-12'>
                <h1 className='text-white text-5xl font-semibold text-center border-b-4 border-white p-4'>Professional Developement</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[150px] md:gap-12 xl:gap-28 pt-10'>
                {Experiences.professional.map((prof, index) => (
                    <ProjectCard key={index} title={prof.title} image={images[prof.image] || ''} description={prof.description} websiteLink={prof.website} />
                ))}
            </div>


            <div className='flex justify-center mt-12'>
                <h1 className='text-white text-5xl font-semibold text-center border-b-4 border-white p-4'>Projects</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[150px] md:gap-12 xl:gap-28 pt-10'>
                {Experiences.projects.map((proj, index) => (
                    <ProjectCard key={index} title={proj.title} image={images[proj.image] || ''} description={proj.description} websiteLink={proj.website} />
                ))}
            </div>

        </div>
    )
}

export default Projects