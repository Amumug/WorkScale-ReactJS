import React from "react";
import book from "../assets/book.svg"
import health from "../assets/health.svg"
import laptop from "../assets/computer.svg"
import desk from "../assets/desk.svg"
import duo from "../assets/duo.svg"
import card from "../assets/card.svg"



const Stats = () => {
  return (
    <>
      <div className="flex-col justify-start items-start inline-flex mt-10">
        < div className="flex-col justify-start items-start gap-3.5 inline-flex " >
          <img src={book} />
          <p className="ext-neutral-700 text-[22px] font-semibold font-['Inter', sans-serif]">Build for career growth</p>
          <p className="text-zinc-500 text-[13px] font-medium font-['Inter', sans-serif] leading-normal">We help you grow in your career with ongoing
            mentorship, and help you can build your network.</p>
        </div >

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


      </div >
    </>
  )
}

export default Stats;
