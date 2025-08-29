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
    const [successMessage, setSuccessMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setNotification("");
        setSuccessMessage("");


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
                setSuccessMessage("You're Message has been sent successfully!");
                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000);

            },
            (error) => {
                console.log("FAILED... Why just why.", error.text);
                setNotification("Something went wrong, Check back later!");
            }
        );
    };

    const verifyEmail = (email) => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(String(email).toLowerCase());
    }

    /* Add new animation of my contact buttons */
    const SocialLink = ({ href, label, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="
      group relative inline-flex items-center justify-center
      h-16 w-16 sm:h-20 sm:w-20
      rounded-2xl bg-white/95 shadow-md ring-1 ring-black/10
      transition-transform duration-200
      hover:-translate-y-0.5 hover:shadow-xl hover:ring-[#911825]/40
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#911825]
      focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B4141]
    "
        >
            <span
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white to-white/80 opacity-90 group-hover:opacity-100"
                aria-hidden
            />
            {children}
        </a>
    );



    return (
        <div className='mx-auto px-4 sm:px-8 lg:px-16 py-8 relative bg-[#3B4141] min-h-screen'>

            {/*The key part of the contact page! */}
            <div className="flex flex-wrap space-x-2 justify-center font-semibold text-white sm:text-2xl md:text-3xl xl:text-5xl text-center pt-10">
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
                {successMessage && <p className='text-center text-green-800 bg-green-100 border border-green-300 rounded-xl px-3 py-2 text-sm sm:text-base mb-3'>{successMessage}</p>}
                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Name:</label>
                <input className='flex justify-center w-full px-2 py-1 rounded-md' placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />

                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Email:</label>
                <input className='px-2 py-1 rounded-md w-full' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className='font-bold text-sm sm:text-base lg:text-lg mt-4'>Message</label>
                <textarea className='px-2 py-1 rounded-md' placeholder='Message' cols='30' rows='7' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type='submit' className='mt-4 px-4 py-2 text-white font-semibold bg-[#911825] hover:shadow-lg hover:shadow-gray-500 rounded-lg text-center self-center'>Send Message</button>
            </form>

            {/*Button to my links */}
            {/* Replace your current social button block with this */}
            <div className="flex justify-center gap-8 sm:gap-12 mt-10">
                <SocialLink href="https://github.com/aceroman" label="GitHub">
                    <img
                        src={GithubIcon}
                        alt=""
                        className="relative h-9 w-9 sm:h-10 sm:w-10 transition-transform duration-200 group-hover:scale-150"
                    />
                </SocialLink>

                <SocialLink href="https://www.linkedin.com/in/adrian-menacho22/" label="LinkedIn">
                    <img
                        src={LinkedInIcon}
                        alt=""
                        className="relative h-9 w-9 sm:h-10 sm:w-10 transition-transform duration-200 group-hover:scale-150"
                    />
                </SocialLink>

                <SocialLink href="mailto:adrianjosemenacho@outlook.com" label="Email Adrian">
                    <img
                        src={EmailIcon}
                        alt=""
                        className="relative h-9 w-9 sm:h-10 sm:w-10 transition-transform duration-200 group-hover:scale-150"
                    />
                </SocialLink>
            </div>

        </div>


    );
};

export default Contact;