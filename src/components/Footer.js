import React from 'react'

// import social data

import { social } from '../data'

// import logo

import Logo from '../assets/img/logo.png'

const Footer = () => {
  return <footer className="bg-tertiary py-5">
    <div class="container mx-auto">
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
            {/* social icons */}
            <div className='flex space-x-6 items-center justify-center'>
                {social.map((item, index) => {
                    const { href, icon } = item;
                    return <a className='text-accent text-base' href={href} key={index}>
                        {icon}
                        </a>
                })}
                <p className=''>Instagram</p>
            </div>
            {/* logo */}
            <div>
                <img src={Logo} alt="" width={200}/>
            </div>
            {/* copy right */}
            <div>
                <p className='text-accent text-sm text-center'>Sara Martins CRP:04/50812. &copy; 2025 - Todos os direitos reservados.</p>
                <p className='text-white text-sm text-center'>Desenvolvimento por: <a className='underline' href='https://github.com/teecoleonard'>Leonardo Henrique</a></p>
            </div>
        </div>
    </div>
  </footer>
  
};

export default Footer