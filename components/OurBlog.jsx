import React from 'react'
const stop ="/images/stop.png"

const OurBlog = () => {
  return (
    <div className=''>
      <div className="font-bold text-5xl text-center mb-8">
        Explore Our Blog
      </div>
      <div className="flex gap-7">
        <div className="w-[404px] h-[389px] rounded-md">
          <img src={stop} alt="stop-image" className="h-[310px]" />
          <span className="font-light text-base">
            Empowering Survivors: Overcoming Challenges in Reporting Sexual
            Assault
          </span>
        </div>
        <div className="w-[404px] h-[389px] rounded-md">
          <img src={stop} alt="stop-image" className="h-[310px]" />
          <span className="font-light text-base">
            Protecting Our Young: Recognizing Signs of Child Abuse and Taking
            Action
          </span>
        </div>
        <div className="w-[404px] h-[389px] rounded-md">
          <img src={stop} alt="stop-image" />
          <span className="font-light text-base ">
            Healing from Invisible Wounds: Understanding and Addressing
            Emotional Abuse
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className="border text-primary py-[10px] px-[16px]">see more</button>
      </div>
    </div>
  );
}

export default OurBlog