import React from "react";
import TreeBG from "../../assets/processtrees.png";
import NavBar from "./NavBar.jsx";

function ProcessHome() {
  return (
    <section className=" grad-lgreen flex-wrap items-center justify-center h-viewheight flex flex-col">
      <div className="container  mx-6 my-3 flex  flex-wrap items-center justify-between max-w-screen-xl px-2 py-2 ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
        <div className="max-w-5/11 my-auto text-left sm:text-left darkgreen">
          <h1 className="text-6xl  sm:(text-7xl !leading-tight) font-medium capitalize lgreen">
            Understanding The Process
          </h1>

          <p className="max-w-10/12 mt-6 sm:leading-relaxed sm:text-xl">
            The best way for individuals and companies to plant trees, offset
            their carbon footprint and restore ecosystem.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 text-center">
            <a
              className="block w-1/2 px-30 py-4 text-base font-normal bg-lgreen rounded-lg shadow-md text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
              href="/about"
            >
              Plant now
            </a>
          </div>
        </div>
        <img
          src={TreeBG}
          alt="Tree illustration"
          // width={600}
          // height={600}
          // loading="lazy"
          className="absolute right-0 -top-70px w-55vw"
        />
      </div>
    </section>
  );
}
export default ProcessHome;
