import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full text-center py-6 bg-[#3B4141] text-white text-3xl">
            <p>{new Date().getFullYear()} © Adrian Menacho. All rights reserved.</p>
        </footer>
    );
}

export default Footer;