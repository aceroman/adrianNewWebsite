import React from 'react';

const ProjectCard = ({ title, image, description, ...props }) => {
    return (
        <div className='flex flex-col bg-gray-400 shadow-sm rounded-lg p-4 w-full max-w-md mx-auto border border-black' {...props}>
            <img className='w-full object-cover rounded-md border border-black h-[275px]' src={image} alt={title}/>
            <h2 className='font-semibold text-2xl text-center mt-4'>{title}</h2>
            <p className='text-center text-gray-600 font-semibold break-words'>{description}</p>
        </div>
    );
};

export default ProjectCard;
