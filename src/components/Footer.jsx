import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiTwitch,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:mt-24 flex flex-col lg:flex-row">
      <div className="lg:w-1/4 mb-3">
        <div className="mb-2">
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        </div>
        <div className="mb-2">binarcarrental@gmail.com</div>
        <div>081-233-334-808</div>
      </div>
      <div className="lg:w-1/4 mb-3">
        <div className="mb-2 font-semibold">Our services</div>
        <div className="mb-2 font-semibold">Why Us</div>
        <div className="mb-2 font-semibold">Testimonial</div>
        <div className="mb-2 font-semibold">FAQ</div>
      </div>
      <div className="lg:w-1/4 mb-4 flex flex-col">
        <div className="mb-4">Connect with us</div>
        <div className="flex space-x-2">
          <div>
            <FiFacebook className="h-7 w-7 bg-[#0D28A6] rounded-full text-white p-1" />
          </div>
          <div>
            <FiInstagram className="h-7 w-7 bg-[#0D28A6] rounded-full text-white p-1" />
          </div>
          <div>
            <FiTwitter className="h-7 w-7 bg-[#0D28A6] rounded-full text-white p-1" />
          </div>
          <div>
            <FiMail className="h-7 w-7 bg-[#0D28A6] rounded-full text-white p-1" />
          </div>
          <div>
            <FiTwitch className="h-7 w-7 bg-[#0D28A6] rounded-full text-white p-1" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 mb-3">
        <div className="mb-2">Copyright Binar 2022</div>
        <div>
          <div className="p-4 bg-[#0D28A6] w-1/3 lg:w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
