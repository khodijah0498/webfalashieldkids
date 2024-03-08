import React from 'react';
const phone ="/images/contact us image.png";
const call ="/images/Call.png";
const website ="/images/Website.png";
const Email ="/images/Email.png";


const Contact = () => {
  return (
    <div className="pt-mid pb-tip px-mid">
      <div className="w-[1260px] h-[633px] flex  border-[0.4px] rounded-[16px]">
        <div className="w-[509px] ">
          <img src={phone} alt="contact Image" className="rounded-l-2xl" />
        </div>
        <div className="w-[754px] p-[32px] flex gap-10 flex-col">
          <h1 className="text-lg font-bold">Send Message</h1>
          <div className="flex flex-col gap-4">
            <form
              className="flex flex-col "
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="Name">FullName</label>
              <input
                type="text"
                name="FullName"
                className="border rounded-lg w-full outline-none "
              />
            </form>
            <form
              className="flex flex-col "
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="Email address">Email address</label>
              <input
                type="email"
                name="Email address"
                className="border rounded-md w-full outline-none "
              />
            </form>
            <form
              className="flex flex-col"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id=""
                cols="20"
                rows="8"
                className="border rounded-md w-full outline-none "
              ></textarea>
            </form>
            <div className="flex justify-end ">
              <button className="h-[50px] w-[170px] flex rounded-[8px] py-[13px]  px-16 mb-48 bg-primary hover:bg-secondary text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-24">
        <h1 className="text-lg font-bold">Reach out</h1>
        <p className="text-gray-500">
          You can reach out through the following platforms
        </p>
        <div className="flex gap-10 mt-10 ">
          <div className="flex flex-col gap-2">
            <div className="h-[48px] w-[48px] bg-primary rounded-full relative ml-8">
              <img
                src={call}
                alt="call-image"
                className="h-[24px] w-[24px] absolute top-3 left-3"
              />
            </div>
            <span className="">
              +234 906-777-4136
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[48px] w-[48px] bg-primary rounded-full relative ml-16">
              <img
                src={website}
                alt="call-image"
                className="h-[24px] w-[24px] absolute top-3 left-3 "
              />
            </div>
            <span>www.webfalainitiative.org</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[48px] w-[48px] bg-primary rounded-full relative ml-16">
              <img
                src={Email}
                alt="call-image"
                className="h-[24px] w-[24px] absolute top-3 left-3"
              />
            </div>

            <span>webfalainitiative@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact