import React from 'react';

const NavBar = () => {
    return (
        <div className=' bg-base-100 shadow-sm'>
            <div className=" navbar max-w-6xl my-0 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="">Home</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <a className="text-[#130B2D] font-bold text-xs md:text-2xl">CS — Ticket System</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="leading-[150%] font-normal text-[16px] menu menu-horizontal px-1">
                            <li><a href="">Home</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <a className="px-4 py-3 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">+ New Ticket</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;