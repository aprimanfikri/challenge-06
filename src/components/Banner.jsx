import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-8 mx-auto max-w-screen-xl lg:h-80 rounded-lg bg-[#0D28A6] mb-20 text-center">
      <h1 className="text-4xl font-bold mb-5 text-white">
        Sewa Mobil di (Lokasimu) Sekarang
      </h1>
      <p className="text-white mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a
        href="/cars"
        className="bg-[#5CB85F] p-2 w-120 rounded-sm text-white font-medium">
        Mulai Sewa Mobil
      </a>
    </div>
  );
};

export default Banner;
