import React from "react";
import styles from "../style";
import teamlight from "../assets/team-light.svg"

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col ${styles.paddingY} justify-center items-center">
      <div className="flex items-end space-x-2 mt-10">
        <img src={teamlight} className="mb-0.5" />
        <h4 className="text-gray-800 text-base font-medium font-['Inter', sans-serif]">Team & Careers</h4>



      </div>
      <h1 className="text-center text-gray-900 text-[32px] font-medium font-['Inter', sans-serif] mt-5">The team from around the globe</h1>
      <h4 className="text-center text-gray-700 text-sm font-medium font-['Inter', sans-serif] mt-4">Creators, designer, engineers, entrepreneurs and and story tellers.</h4>
      <div>
        <div className="w-full  md:w-[339px] h-[46px] px-7 py-[5px] mt-8 mb-3 bg-gray-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-200 text-lg font-medium font-['Inter', sans-serit]">Open positions</div>
        </div>

        <div className="w-full md:w-[339px] h-[46px] px-7 py-[5px]  justify-center items-center gap-2.5 inline-flex">
          <div className="text-gray-901 text-lg font-medium font-['Inter', sans-serif]">Learn more</div>
        </div>
        <div >
        </div>
      </div>
    </section>
  )
}

export default Hero;
