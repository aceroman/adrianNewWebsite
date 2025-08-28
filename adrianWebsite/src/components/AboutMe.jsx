import React from 'react';
import Adrian from '../assets/synergyPicture2.jpg'
import * as Si from 'react-icons/si';
import * as Fa from 'react-icons/fa';
import adrianGrad from '../assets/newAdrian.jpg';
import { IoSchoolSharp } from 'react-icons/io5';
import { FaUniversity } from "react-icons/fa";
import Skills from '../skillset.json'




function AboutMe() {
  const getIcon = (item) => {
    if (!item?.icon) return null;

    if (item.icon.startsWith("/icons/")) {
      const url = new URL(`${import.meta.env.BASE_URL}${item.icon.replace(/^\//, "")}`, window.location.origin).toString();
      return <img src={url} alt={item.name} className="w-4 h-4" aria-hidden />;
    }

    if (item.icon.endsWith(".svg") && !item.icon.includes("/")) {
      const url = new URL(`${import.meta.env.BASE_URL}icons/${item.icon}`, window.location.origin).toString();
      return <img src={url} alt={item.name} className="w-4 h-4" aria-hidden />;
    }

    const Icon = Si[item.icon] || Fa[item.icon];
    return Icon ? <Icon className="text-base shrink-0" aria-hidden /> : null;
  };

  const SkillCard = ({ category, items }) => (
    <div className="shadow-md rounded-2xl p-5 m-4 border-4 border-white bg-[#2F3535] backdrop-blur-sm">
      <h3 className="text-lg font-bold text-white mb-4 text-center border-b-2 border-white pb-2">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((raw, idx) => {
          const item = typeof raw === "string" ? { name: raw } : raw;

          return (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm
                       bg-white/10 text-white border border-white/10
                       hover:bg-white/20 hover:border-white/20 hover:scale-105 transition"
            >
              {getIcon(item)}
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );




  return (
    <div className='p-4 bg-[#3B4141] min-h-screen w-full px-4 flex flex-col items-center justify-center'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 pt-10 px-4 xl:gap-72'>
        <div className='flex flex-col items-center'>
          <img className='w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg h-full rounded-3xl shadow-lg' src={adrianGrad} />


        </div>
        <div className='flex flex-col items-center gap-5'>
          <div className='mt-10 p-6 text-white rounded-lg shadow-lg flex flex-col items-center border-4 transition-transform transform hover:scale-105'>
            <div className='text-4xl mb-4'>
              <FaUniversity />
            </div>
            <h3 className='text-xl font-bold'>Education</h3>
            <p className='mt-2 font-semibold'>Virginia Tech</p>
            <p className='mt-1 text-sm'>B.S. in Computational Modeling and Data Analytics</p>
          </div>
          <div className='mt-10 p-6 text-white rounded-lg shadow-lg flex flex-col items-center border-4 transition-transform transform hover:scale-105'>
            <div className='text-4xl mb-4'>
              <IoSchoolSharp />
            </div>
            <h3 className='text-xl font-bold'>Scholarship</h3>
            <p className='mt-2 font-semibold'>Virginia Tech</p>
            <p className='mt-1 text-sm'>Presidential Campus Enrichment Grant Recipient</p>
          </div>

        </div>

      </div>

      <div className='flex flex-col items-center justify-center p-6'>
        <h1 className="text-4xl font-semibold text-white pt-6 mb-6 border-b-4 border-white">
          Technical Skillset
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
          {Skills.skills.map((skill, index) => (
            <SkillCard key={index} category={skill.category} items={skill.items} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default AboutMe