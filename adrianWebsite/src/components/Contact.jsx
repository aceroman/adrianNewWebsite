import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from '../assets/GithubIcon.png';
import LinkedInIcon from '../assets/LinkedInIcon.png';
import EmailIcon from '../assets/EmailIcon.png';



const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [notification, setNotification] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setNotification("Please fill out all the information");
            return;
        }

        if (!verifyEmail(email)) {
            setNotification("Please enter a valid email");
            return;
        }

        const serviceID = "service_lp9pmgq";
        const templateID = "template_b0k851f";
        const publickey = "32Rfd6INv4Zx86pQv";

        const templateParameters = {
            from_name: name,
            from_email: email,
            to_name: "Adrian",
            message: message
        };

        emailjs.init({
            blockHeadless: true,
            limitRate: {
                id: 'app',
                throttle: 10000,
            },
        });

        emailjs.send(serviceID, templateID, templateParameters, publickey).then(
            () => {
                console.log("SUCCESS!!");
                setName("");
                setEmail("");
                setMessage("");
            },
            (error) => {
                console.log("FAILED... Why just why.", error.text);
            }
        );
    };

    const verifyEmail = (email) => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(String(email).toLowerCase());
    }


    return (
        <div className='mx-auto px-4 sm:px-8 lg:px-16 py-8 relative bg-[#3B4141] min-h-screen'>

            {/*The key part of the contact page! */}
            <div className="flex flex-wrap space-x-2 justify-center font-semibold text-white sm:text-2xl md:text-3xl xl:text-5xl text-center">
                {"Feel free to reach out!".split("").map((char, index) => (
                    <span
                        key={index}
                        className="inline-block animate-wave"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>


            <form ref={form} onSubmit={sendEmail} className='flex flex-col bg-[#A0A09B] mx-auto max-w-5xl sm:w-3/4 md:w-3/5 lg:w-1/2 w-full rounded-md p-4 sm:p-6 lg:p-8 mt-8' >
                {notification && <p className='text-center text-red-700 text-sm sm:text-base'>{notification}</p>}
                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Name:</label>
                <input className='flex justify-center w-full px-2 py-1 rounded-md' placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />

                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Email:</label>
                <input className='px-2 py-1 rounded-md w-full' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Message</label>
                <textarea className='px-2 py-1 rounded-md' placeholder='Message' cols='30' rows='7' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type='submit' className='mt-4 px-4 py-2 text-white font-semibold bg-[#911825] hover:shadow-lg hover:shadow-gray-500 rounded-lg text-center self-center'>Send Message</button>
            </form>

            {/*Button to my links */}
            <div className='flex justify-center gap-20 mt-8'>
                <button type="button" className='p-2 bg-transparent hover:opacity-70' onClick={() => window.open('https://github.com/aceroman', '_blank')}>
                    <div className='bg-white rounded-full'>
                        <img src={GithubIcon} alt='My github link' className='w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24' />
                    </div>
                </button>
                <button type='button' className='p-2 bg-transparent hover:opacity-70  rounded-full transition duration-300 ease-in-out' onClick={() => window.open('https://www.linkedin.com/in/adrian-menacho22/', '_blank')}>
                    <div className='bg-white rounded-3xl'>
                        <img src={LinkedInIcon} alt='My Linkedin link' className='w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24' />
                    </div>
                </button>
                <button type='button' className='p-2 bg-transparent hover:opacity-70' onClick={() => window.open('mailto:adrianjosemenacho@outlook.com')}>
                    <div className='bg-white rounded-3xl'>
                        <img src={EmailIcon} alt='Email me!' className='w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24' />
                    </div>
                </button>
            </div>
        </div>


    );
};

export default Contact;