import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-footer mt-7">
      <div className="container pl-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ul className="">
          <li className="text-white text-base font-semibold py-6">
            Company Info
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">Aboute us</li>
          <li className="text-gray-400 text-sm py-1 font-medium">Contact us</li>
          <li className="text-gray-400 text-sm py-1 font-medium">Careers</li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Business With Us
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Find a Store
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Press & Talent
          </li>
        </ul>
        <ul>
          <li className="text-white text-base font-semibold py-6">
            Let Us Help You
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">Orders</li>
          <li className="text-gray-400 text-sm py-1 font-medium">Downloads</li>
          <li className="text-gray-400 text-sm py-1 font-medium">Addresses</li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Account details
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Lost password
          </li>
        </ul>
        <ul>
          <li className="text-white text-base font-semibold py-6">
            Quiq Links
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Spessial Offers
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">Gift Cards</li>
          <li className="text-gray-400 text-sm py-1 font-medium">F21 Red</li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Privacy Policy
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Teams of Use
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">Portfolio</li>
        </ul>
        <ul>
          <li className="text-white text-base font-semibold py-6">
            Company Info
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">Aboute us</li>
          <li className="text-gray-400 text-sm py-1 font-medium">Contact us</li>
          <li className="text-gray-400 text-sm py-1 font-medium">Careers</li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Business With Us
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Find a Store
          </li>
          <li className="text-gray-400 text-sm py-1 font-medium">
            Press & Talent
          </li>
        </ul>
      </div>
      <div className="border-[1px] border-gray-500"></div>
      <div className="bg-gray-900">
        <div className="container py-[60px] my-[56px] lg:flex lg:flex-wrap lg:my-0 lg:mt-[56px] xl:justify-between">
          <div className="text-gray-500">
            Copyright © 2019 amera Theme by Lionthemes88
          </div>
          <div>
            <ul className="flex flex-wrap gap-x-6 px-3 border-l-[2px] border-gray-500">
              <li>
                <Link className="text-white text-sm font-medium" href={"/"}>
                  Site Map
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm font-medium" href={"/"}>
                  Search Terms
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm font-medium" href={"/"}>
                  Advanced Search
                </Link>
              </li>
              <li>
                <Link className="text-white text-sm font-medium" href={"/"}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Image width={250} height={250} src="/paypal.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer