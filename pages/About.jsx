import React from 'react';
const world = "/images/About us image.png";

const About = () => {
  return (
    <div className="pt-2.5 pb-4 px-mid mb-36">
      <div className="md:grid py-mid grid-cols-2 ">
        <div className="flex  justify-start h-[468px] w-[462px]">
          <img src={world} alt="About Image" />
        </div>
        <div className="">
          <span className="text-secondary text-2xl font-bold leading-[33.6px]">
            Who we are
          </span>
          <div className="h-[777px] text-lg font-medium leading-[25.2px] text-justify flex gap-10 flex-col">
            <p>
              At ZERAB Report, we are on a mission to combat online abuse,
              protect the vulnerable, and create a safer digital space for all.
              Our platform stands as a beacon against the rising tide of
              misinformation, especially in the realms of sexual abuse, child
              exploitation, and other forms of online harm.
            </p>
            <div>
            <span className="text-primary ">What Sets Us Apart:</span>
            <p>
              ZERAB Report is not just a tool; it's a collective effort to
              empower digital guardianship. We've harnessed cutting-edge
              technology to create a platform that goes beyond image
              verification. Our commitment lies in spotlighting the unsung
              heroes who tirelessly battle against the shadows of
              misinformation, and we invite you to be part of this
              transformative journey. ZERAB Report is more than a website; it's
              a community-driven initiative. Whether you're an individual
              seeking to stay informed or an organization looking to collaborate
              in the fight against online abuse, there's a place for you here.
              Our "Get Involved" section provides avenues for support,
              collaboration, and making a tangible impact.
            </p>
            </div>
            <div>
              <span className="text-secondary">Key Features: </span>
              <p>
                <span className="text-primary">Unmasking the Unseen:</span>{" "}
                Explore the stories of individuals and organizations making
                significant strides in the fight against online abuse. Our
                "Guardians of Innocence" section unveils the narratives of these
                unsung champions, showcasing their resilience, commitment, and
                impact.
              </p>
              <p>
                <span className="text-primary"> Image Verification Tools:</span>{" "}
                 Empower yourself with our state-of-the-art tools designed to
                detect and combat the spread of fake images online. We provide
                resources and insights to contribute to a safer digital
                landscape.
              </p>
              <p>
                <span className="text-primary">How It Works:</span> Navigate
                seamlessly through our platform with user-friendly guides and
                tutorials. Learn about the simple yet powerful steps you can
                take to contribute to safer online community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mb-40 ">
        <div className="bg-[#FFFAE5] h-[226px] w-[644px] p-12 rounded-3xl">
          <span className='text-gold text-lg font-semibold'> OUR VISION</span>
          <p className='text-xl '>
            At ZERAB Report, we envision a world where individuals navigate
            online spaces without fear, fostering safety and nurturing. Our
            mission is to lead a global community in protecting the vulnerable
            and combating online abuse.
          </p>
        </div>
        <div className="bg-[#FFFAE5] h-[226px] w-[608px] p-12 rounded-3xl">
          <span className='text-gold text-lg font-semibold'>OUR MISSION </span>
          <p className='text-xl '>
            ZERAB Report is dedicated to combating online abuse, empowering
            digital guardianship, amplifying unsung heroes, promoting education,
            and building a collaborative community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About