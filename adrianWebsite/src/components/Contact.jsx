import React, {useState, useRef} from 'react';
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
            setNotification("Fill out all the information");
            return;
        }

        if(!verifyEmail(email)) {
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
        <div className='container mx-auto px-4 sm:px-8 lg:px-16 py-8 relative'>

            {/*The key part of the contact page! */}
            <h1 className='font-semibold text-black sm:text-4xl md:text-3xl xl:text-3xl text-center'>Feel free to reach out!</h1>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col bg-[#A0A09B] mx-auto max-w-5xl sm:w-3/4 md:w-3/5 lg:w-1/2 w-full rounded-md p-4 sm:p-6 lg:p-8 mt-8' >
                {notification && <p className='text-center text-red-700 text-sm sm:text-base'>{notification}</p>}
                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Name:</label>
                <input className='flex justify-center w-full px-2 py-1 rounded-md' placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)}/>

                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Email:</label>
                <input className='px-2 py-1 rounded-md w-full' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/> 

                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Message</label>
                <textarea className='px-2 py-1 rounded-md' placeholder='Message' cols='30' rows='7' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type='submit' className='mt-4 px-4 py-2 text-white font-semibold bg-[#911825] hover:shadow-lg hover:shadow-gray-500 rounded-lg text-center self-center'>Send Message</button>
            </form>

            {/*Button to my links */}
            <div className='flex justify-center gap-20 mt-8'>
                <button type="button" className='p-2 bg-transparent hover:opacity-80' onclick={() => window.open('https://github.com/aceroman', '_blank')}>
                    <img src={GithubIcon} alt='My github link' className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20'/>
                </button>
                <button type='button' className='p-2 bg-transparent hover:opacity-80' onClick={() => window.open('https://wwww.linkedin.com/in/adrian-menacho22/', '_blank')}>
                    <img src={LinkedInIcon} alt='My Linkedin link' className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
                </button>
                <button type='button' className='p-2 bg-transparent hover:opacity-80' onClick={() => window.open('mailto:adrianjosemenacho@outlook.com')}>
                    <img src={EmailIcon} alt='Email me!' className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20' />
                </button>
            </div>
        </div>
    
        
    );
};

export default Contact;