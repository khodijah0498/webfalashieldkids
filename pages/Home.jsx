import React from 'react';
import { Link } from 'react-router-dom';
import HomeAbout from '../components/HomeAbout';
import Partners from '../components/Partners';
import OurReport from '../components/OurReport';
import OurBlog from '../components/OurBlog';
const heroImg = '/images/Home hero.png'

const Home = () => {
  return (
    <div className="pt-mid pb-tip px-mid bg-background">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[80px] leading-[75px] font-[900] md:w-[746px] text-secondary text-center">
          Trailblazers for Digital Safety
        </p>
        <p className="text-black text-md md:w-[746px] py-5 text-center">
          Discover the untold stories of champions paving the way for a safer
          online space, showcasing unwavering commitment and innovative
          strategies. Join their journey towards a secure digital landscape for
          all.
        </p>
        <div className="flex gap-10">
          <Link
            to=""
            className="py-2 h-fit w-fit text-small hover:bg-secondary duration-200 rounded-md px-4 border border-primary bg-primary text-white"
          >
            Make a Report
          </Link>
          <Link
            to="/contact"
            className="py-2 h-fit w-fit text-small rounded-md border-primary text-primary px-8 border bg-transparent hover:bg-secondary duration-200 hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="my-5">
        <img className="h-full" src={heroImg} alt="Hero Image" />
      </div>
      <HomeAbout />
      <Partners />
      <OurReport />
      <OurBlog/>
    </div>
  );
}

export default Home