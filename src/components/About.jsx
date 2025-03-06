import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

    <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about px-4 py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Sumer Saran Aligh, a 2023 CSE graduate from BITS Pilani🎓 with a passion for crafting robust solutions adhering to complex business requirements. As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/sumersaranaligh/' target='_blank'>Full Stack Developer</a>, I specialize in creating solid backend systems using Node.js, Express.js, PHP (Woocommerce & Laravel), Python (Flask & Django) and fluent in React, JavaScript (jQuery), HTML, CSS for a perfect UX 🚀. 
          <br/><br/>
            Apart from development, I am a sportsperson and played cricket throughout my journey as the captain of my university and school team. 
            <br/>
            I also love to play the guitar sing along with it. Do check out my singing instagram handle and give your valuable feedback.
            <br/><br/>
            I am currently working as a Junior Software Developer at Sharaf DG, Dubai, UAE with a track record of delivering complex projects timely helping to grow the business by substantial margins. You can read more about my work in the experience section or view my resume.
          </p>
          <br/><br/>
          <ButtonLink
            url='https://docs.google.com/document/d/14H0FDivvmYsD8k9MIAPx4qi-9l4JXS4HrrlmE0gYGE4/edit?usp=sharing'
            text='View Resume →'
            padding={`p-3`}
          />
          <ButtonLink
            url='https://www.instagram.com/sumerplays/'
            text='View Instagram →'
            padding={`p-3`}
          />         

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;