import React from "react";
import { FiThumbsUp, FiTag, FiClock, FiAward } from "react-icons/fi";

const data = [
  {
    title: "Mobil Lengkap",
    subtitle:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    icon: (
      <FiThumbsUp className="h-8 w-8 mr-2 bg-[#F9CC00] rounded-full text-white p-1 mb-4" />
    ),
  },
  {
    title: "Harga Murah",
    subtitle:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    icon: (
      <FiTag className="h-8 w-8 mr-2 bg-[#FA2C5A] rounded-full text-white p-1 mb-4" />
    ),
  },
  {
    title: "Layanan 24 Jam",
    subtitle:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    icon: (
      <FiClock className="h-8 w-8 mr-2 bg-[#0D28A6] rounded-full text-white p-1 mb-4" />
    ),
  },
  {
    title: "Sopir Profesional",
    subtitle:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    icon: (
      <FiAward className="h-8 w-8 mr-2 bg-[#5CB85F] rounded-full text-white p-1 mb-4" />
    ),
  },
];

const WhyUS = () => {
  return (
    <div id="why-us" className="py-8 px-4 mx-auto max-w-screen-xl">
      <h1 className="text-4xl font-bold mb-5">Why Us?</h1>
      <h1 className="font-normal">Mengapa harus pilih Binar Car Rental?</h1>
      <div className="py-8 px-4 mx-auto max-w-screen-xl flex flex-col lg:flex-row ">
        {data.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex-1 p-6 border-[#D0D0D0] border-2 rounded-lg mb-4 lg:mx-2">
            {item.icon}
            <h5 className="mb-4 text-base font-bold text-black">
              {item.title}
            </h5>
            <p className="font-normal text-black">{item.subtitle}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WhyUS;
