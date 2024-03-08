import React from 'react'

const Collection = ({img, des}) => {
  return (
    <div className="flex justify-between flex-col mt-8">
      <div className="relative">
        <img className="h-[348px] w-full object-cover" src={img} />
        <span className="absolute top-0 left-0 text-sm font-medium text-background mt-4 ml-3">
          Ade Adesina | Jan 20, 2024
        </span>
      </div>
      <div className="flex flex-col gap-4 bg-background">
        <h3 className="text-2xl font-bold ">{des}</h3>

        <p className="text-base  text-[#6C757D] font-normal">
          Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor
          pretium donec dictum. Vici consequat justo enim. Venenatis eget
          adipiscing luctus lorem.
        </p>
        <div className="">
          <button className="text-primary text-sm font-bold">View Post</button>
        </div>
      </div>
    </div>
  );
}

export default Collection