import React from "react";
import CImage from "../../shared/image";
import samalimg from "./samal.jpg";
import enchanted from "./enchantedcover.jpg";

const Content = () => {
  return (
    <section className="relative w-auto flex flex-col">
      <div className="bg-blue-500/10 absolute top-0 inset-x-0 h-[500px] z-20"></div>
      <CImage
        img={enchanted}
        altImg="Samal Image"
        className="w-full h-[500px] object-cover"
      />
      <figure className="container mx-auto flex">
        <figcaption className="flex-1 flex flex-col justify-evenly">
          <h2 className="w-4/5 text-4xl font-normal tracking-widest leading-normal">
            <span className="text-5xl font-bold tracking-widest uppercase">
              Create Memorable
            </span>
            <br /> Moments With Us
          </h2>
          <p className="w-4/5 text-xl font-normal tracking-wider text-justify leading-relaxed">
            We will give you satisfactory results of places you want to visit.
            Samal Island or the Island Garden City of Samal in Davao del Norte,
            Mindanao is known as the largest resort city in the Philippines
          </p>
          <button
            type="button"
            className="inline-block w-40 py-3 rounded bg-blue-600 text-2xl font-normal
        uppercase leading-tight text-white shadow-md 
        transition duration-150 ease-in-out 
        hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
        focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg md:w-64
        md:animate-none md:py-3 md:text-lg md:font-semibold"
          >
            Book Now
          </button>
        </figcaption>
        <CImage
          img={samalimg}
          altImg="Samal Image"
          className="-mt-72 h-[800px] w-[700px] object-cover border-[25px] border-white rounded-2xl z-30"
          imgClassname="rounded-2xl"
        />
      </figure>
      <figure className="container mx-auto flex mt-32">
        <CImage
          img={samalimg}
          altImg="Samal Image"
          className="h-[700px] w-[700px] object-cover rounded-2xl z-30"
          imgClassname="rounded-2xl"
        />
        <figcaption className="flex-1 flex flex-col justify-evenly items-center">
          <h2 className="w-4/5 text-5xl font-bold tracking-widest leading-normal uppercase">
            <span className="text-4xl font-normal tracking-widest">
              We Will Find
            </span>
            <br />
            <span className="text-4xl font-normal tracking-widest">
              A Best Place For Your
            </span>
            <br /> dream staycation
          </h2>
          <p className="w-4/5 text-xl font-normal tracking-wider text-justify leading-relaxed">
            A perfect place to get away from city noise and provide lovely
            location for relaxation and unwind. Whatever you need will be there
          </p>
          <div className="flex w-4/5 space-x-40">
            <div className="flex flex-col space-y-3 justify-center">
              <span className="italic text-4xl font-bold text-blue-500">
                10
              </span>
              <span className="text-xl font-bold text-gray-400">Airlines</span>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="italic text-4xl font-bold text-blue-500">
                100 K+
              </span>
              <span className="text-xl font-bold text-gray-400">
                Satisfied Traveler
              </span>
            </div>
          </div>
          <div className="flex w-4/5 space-x-40">
            <div className="flex flex-col space-y-3">
              <span className="italic text-4xl font-bold text-blue-500">
                30+
              </span>
              <span className="text-xl font-bold text-gray-400">Packages</span>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="italic text-4xl font-bold text-blue-500">
                105
              </span>
              <span className="italic text-xl font-bold text-gray-400">
                Hotels
              </span>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default Content;
