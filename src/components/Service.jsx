import React from "react";
import GirlImage from "../assets/img_service.png";
import { BsCheckLg } from "react-icons/bs";

const Service = () => {
  return (
    <>
      <div
        id="service"
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-24 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-5">
          <img src={GirlImage} alt="" className="sm:w-4/5" />
        </div>
        <div className="lg:w-1/2 pr-8">
          <h1 className="text-2xl font-bold mb-5">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h1>
          <p className="mb-5">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul className="list-none">
            <li className="mb-4 flex items-center">
              <BsCheckLg className="h-7 w-7 mr-2 bg-[#CFD4ED] rounded-full text-[#0D28A6] p-1" />
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </li>
            <li className="mb-4 flex items-center">
              <BsCheckLg className="h-7 w-7 mr-2 bg-[#CFD4ED] rounded-full text-[#0D28A6] p-1" />
              <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
            </li>
            <li className="mb-4 flex items-center">
              <BsCheckLg className="h-7 w-7 mr-2 bg-[#CFD4ED] rounded-full text-[#0D28A6] p-1" />
              <span>Sewa Mobil Jangka Panjang Bulanan</span>
            </li>
            <li className="mb-4 flex items-center">
              <BsCheckLg className="h-7 w-7 mr-2 bg-[#CFD4ED] rounded-full text-[#0D28A6] p-1" />
              <span>Gratis Antar - Jemput Mobil di Bandara</span>
            </li>
            <li className="mb-4 flex items-center">
              <BsCheckLg className="h-7 w-7 mr-2 bg-[#CFD4ED] rounded-full text-[#0D28A6] p-1" />
              <span>Layanan Airport Transfer / Drop In Out</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Service;
