import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-20 bg-black">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        <div>
          <div className="flex items-center space-x-2">
            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
              <FaHouse />
            </div>
            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
              HomeHub
            </h1>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, laboriosam.
          </p>
          <p className="text-gray-300 mt-4 font-semibold">example@gmail.com</p>
          <p className="text-gray-300 mt-2 font-semibold">+123 456 789</p>
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="w-6 h-6 text-blue-600" />
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <FaYoutube className="w-6 h-6 text-red-700" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
        <div className="md:mx-auto">
          <h1 className="footer__heading">Popular Search</h1>
          <p className="footer__link">Apartment For Rent</p>
          <p className="footer__link">Apartment Low to High</p>
          <p className="footer__link">Offices For Buy</p>
          <p className="footer__link">Offices For Rent</p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="footer__heading">Quick Link</h1>
          <p className="footer__link">Terms pf use</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Pricing Plans</p>
          <p className="footer__link">Our Services</p>
          <p className="footer__link">Contact Support</p>
          <p className="footer__link">Careers</p>
          <p className="footer__link">FAQs</p>
        </div>
        <div className="md:mx-auto">
          <h1 className="footer__heading">Discover</h1>
          <p className="footer__link">Miami</p>
          <p className="footer__link">Los Angles</p>
          <p className="footer__link">Chicago</p>
          <p className="footer__link">New York</p>
          <p className="footer__link">London</p>
          <p className="footer__link">Cambodia</p>
        </div>
      </div>
      <p className="text-center mt-4 text-base text-white opacity-70">
        &copy;Copyright 2024 by thyy
      </p>
    </div>
  );
};

export default Footer;
