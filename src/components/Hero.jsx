import React from "react";
import CarImage from "../assets/img_car.png";

const Hero = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-24 lg:mb-32 flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold mb-5">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </h1>
        <p className="mb-4">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <a
          href="/cars"
          className="bg-[#5CB85F] p-2 w-120 rounded-sm text-white font-medium">
          Mulai Sewa Mobil
        </a>
      </div>
      <div className="lg:absolute mt-10 lg:right-0 lg:top-16">
        <img src={CarImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
