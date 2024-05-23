import React from "react";
import styles from "../style";
import teamlight from "../assets/team-light.svg"
import book from "../assets/book.svg"
import health from "../assets/health.svg"
import laptop from "../assets/computer.svg"
import desk from "../assets/desk.svg"
import duo from "../assets/duo.svg"
import card from "../assets/card.svg"
import worldmaplight from "../assets/World Map-light.png"

const Hero = () => {
  return (
    <section className="flex flex-row flex-col ${styles.paddingY} justify-center items-center">
      <div className="flex items-end space-x-2 mt-10">
        <img src={teamlight} className="mb-0.5" />
        <h4 className="text-gray-800 text-base font-medium font-['Inter', sans-serif]">Team & Careers</h4>



      </div>
      <h1 className="text-center text-gray-900 text-[32px] font-medium font-['Inter', sans-serif] mt-5">The team from around the globe</h1>
      <h4 className="text-center text-gray-700 text-sm font-medium font-['Inter', sans-serif] mt-4">Creators, designer, engineers, entrepreneurs and and story tellers.</h4>
      <div>
        <div>
          <div className="w-full md:w-[339px] h-[46px] px-7 py-[5px] mt-8 mb-3 bg-gray-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-200 text-lg font-medium font-['Inter', sans-serit]">Open positions</div>
          </div>

          <div className="w-full md:w-[339px] h-[46px] px-7 py-[5px]  justify-center items-center gap-2.5 inline-flex">
            <div className="text-gray-901 text-lg font-medium font-['Inter', sans-serif]">Learn more</div>
          </div>
        </div>

        <img src={worldmaplight} className="w-full hidden md:block" />
        <div className="flex-col justify-start items-start inline-flex mt-10">
          <div className="flex-col justify-start items-start gap-3.5 inline-flex ">
            <img src={book} />
            <p className="ext-neutral-700 text-[22px] font-semibold font-['Inter', sans-serif]">Build for career growth</p>
            <p className="text-zinc-500 text-[13px] font-medium font-['Inter', sans-serif] leading-normal">We help you grow in your career with ongoing
              mentorship, and help you can build your network.</p>
          </div>

          <div className="flex-col justify-start items-start gap-3.5 mt-12 inline-flex ">
            <img src={laptop} />
            <p className="ext-neutral-700 text-[22px] font-semibold font-['Inter', sans-serif]">Work-life balance</p>
            <p className="text-zinc-500 text-[13px] font-medium font-['Inter', sans-serif] leading-normal">We pffer an open vacation policy with a recommended
              4-weeks per year. Recharge whenever you need to.</p>
          </div>

          <div className="flex-col justify-start items-start gap-3.5 mt-12 inline-flex ">
            <img src={desk} />
            <p className="ext-neutral-700 text-[22px] font-semibold font-['Inter', sans-serif]">100% remote-friendly</p>
            <p className="text-zinc-500 text-[13px] font-medium font-['Inter', sans-serif] leading-normal">We are 100% remote-friendly, work with team mates
              from different time zones across the globe.</p>
          </div>
          <div className="flex-col justify-start items-start gap-3.5 mt-12 inline-flex ">
            <img src={duo} />
            <p className="ext-neutral-700 text-[22px] font-semibold font-['Inter', sans-serif]">Diversity and inclusion</p>
            <p className="text-zinc-500 text-[13px] font-medium font-['Inter', sans-serif] leading-normal">We help you grow in your career with ongoing
              mentorship, and help you can build your network.</p>
          </div>
          <div className="flex-col justify-start items-start gap-3.5 mt-12 inline-flex ">
            <img src={health} />
            <p className="ext-neutral-700 text-[22px] font-semibold font-['Inter', sans-serif]">Full health care package</p>
            <p className="text-zinc-500 text-[13px] font-medium font-['Inter', sans-serif] leading-normal">We care about your well-being, and offer dental and
              vision benefits for you and your family.</p>
          </div>
          <div className="flex-col justify-start items-start gap-3.5 mt-12 inline-flex ">
            <img src={card} />
            <p className="ext-neutral-700 text-[22px] font-semibold font-['Inter', sans-serif]">Perk stipends program</p>
            <p className="text-zinc-500 text-[13px] font-medium font-['Inter', sans-serif] leading-normal">We offer several perk stipends to support healthy
              home office ergonomics and continuous learning.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;
