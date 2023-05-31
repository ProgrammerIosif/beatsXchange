'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className='flex justify-between text-lg font-semibold relative py-2 section max-md:max-w-[100vw]'>
        <ul className="flex">
          <li>
            <Link href="/" className='font-bold text-primary z-40 flex mr-8 gap-2 pb-1 h-full text-3xl items-center justify-center'>
              <img className="w-12 lg:w-16" src="https://cdn-icons-png.flaticon.com/512/6190/6190871.png" width="80"/>
              <p>BeatsXchange</p>
            </Link>
          </li>
        {/* desktop only*/}
          <Link href="/shop" className="pr-5 cursor-pointer py-5 max-lg:hidden">Shop</Link>
          <Link href="/headphones" className="pr-5 cursor-pointer py-5 max-lg:hidden">HeadPhones</Link>
          <Link href="/speakers" className="pr-5 cursor-pointer py-5 max-lg:hidden">Speakers</Link>
          <li className="max-lg:hidden py-5"><Link href='/pricing'>Cart</Link></li>
        </ul>
        <div className="flex max-lg:hidden">
          <Link className="my-auto ml-8 py-1.5 px-3 border rounded-md" href="/start">Log In</Link>
        </div>
        {/* mobile only*/}
        <div className="lg:hidden w-8 py-5 flex flex-col justify-between cursor-pointer" onClick={() => setDropdownVisibility(true)}>
          <div className="h-0.5 bg-current"></div>
          <div className="h-0.5 bg-current"></div>
          <div className="h-0.5 bg-current"></div>
        </div>
      </div>
      <div className={`${dropdownVisibility ? 'absolute' : 'scale-0 scale'} z-10 lg:hidden origin-top-right ease-in-out duration-500 transition-all w-[400px] max-sm:w-[calc(100vw-1rem)] md:w-[480px] absolute bg-white right-2 top-3 py-5 rounded-xl  shadow-dropdown`}>
        <div onClick={() => setDropdownVisibility(false)}>
          <img className="absolute right-3 top-3 invert cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/458/458595.png" alt="" width='12' height='12'/>
        </div>
        {content.map((category,idx) =>
          <>
            {idx != 0 ? <hr className="my-4"/> : <></>}
            <div className="px-5">
              <div className="text-[#72777d] uppercase my-1">
                {category.title}
              </div>
              <ul className="grid grid-cols-2">
                {category.links.map(item =>
                  <Link href={item.link} className="max-md:text-sm text-[#055d9c] font-semibold my-1">
                    {item.name}
                  </Link>)}
              </ul>
            </div>
          </>)}
      </div>
    </nav>
  )
}

export default Nav

const content = [
  {
    title: 'Products',
    links: [
      {
        name: 'Headphones',
        link: '/headphones'
      },
      {
        name: 'Speakers',
        link: '/speakers'
      },
      {
        name: 'Shop',
        link: '/shop'
      }
    ]
  },
]
