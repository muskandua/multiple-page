import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src={"/aboutbg.jpg"}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="filter brightness-50"
        />

        <div className="absolute inset-y-0 right-0 flex flex-col justify-center text-left bg-white/80 px-6   py-8 sm:px-8 md:px-12 lg:px-16 w-full sm:w-[60%] md:w-[50%] lg:w-[40%]">
          <h1 className="font-bold text-[32px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-gray-800 mb-4 leading-tight">
            About Us
          </h1>
          <h2 className="font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-600 leading-tight">
            Welcome to Watch World, where we believe a watch is more than just
            an accessory. It is a statement of style, precision, and
            craftsmanship. Our mission is to bring you a diverse selection of
            premium timepieces from around the globe, each chosen for its
            quality and unique design. Whether you are a connoisseur or simply
            appreciate the beauty of a well-made watch, we are here to help you
            find the perfect piece to complement your personality and elevate
            your look.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
