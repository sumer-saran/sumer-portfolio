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
            <div class="max-w-4xl mx-auto my-8 text-center">
              <h2 class="text-4xl sm:text-5xl font-extrabold mt-2">Get to know me...</h2>
              <p class="mt-4 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                👨‍💻 Hey there! I'm <span class="font-semibold">Sumer Saran Aligh</span>, a
                <a class="text-green-300 hover:text-green-500 duration-300" href="https://www.linkedin.com/in/sumersaranaligh/"> Full Stack Developer </a> passionate about building scalable, high-performance applications that solve real-world problems.
                With a strong foundation in <span class="font-semibold">Python, PHP, and JavaScript</span>, I craft robust backend systems and seamless frontend experiences, ensuring efficiency and top-notch user engagement.
              </p>
              <p class="mt-6 text-lg sm:text-xl leading-relaxed">
                🚀 Currently, I work as a <span class="font-semibold">Full Stack Developer at Panafrican Group</span>, leveraging cutting-edge technologies to develop solutions that drive business growth.
                Previously, I contributed at <span class="font-semibold">Sharaf DG, Dubai</span>, delivering impactful projects that optimized operations and enhanced customer experiences.
              </p>

              <div class="mt-8 text-left">
                <h3 class="text-2xl font-bold text-green-300">Tech Stack & Expertise</h3>
                <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg leading-relaxed">
                  <li>✅ <span class="font-semibold">Backend:</span> Django, Flask, Laravel, Node.js</li>
                  <li>✅ <span class="font-semibold">Frontend:</span> React.js, JavaScript (jQuery), HTML, CSS</li>
                  <li>✅ <span class="font-semibold">DevOps & Infrastructure:</span> Docker, Kubernetes, Git, Azure DevOps</li>
                  <li>✅ <span class="font-semibold">Architecture:</span> Microservices, API Development, Cloud Solutions</li>
                </ul>
              </div>

              <div class="mt-8 text-left">
                <h3 class="text-2xl font-bold text-green-300">Beyond Code</h3>
                <ul class="mt-4 text-lg leading-relaxed">
                  <li>🏏 <span class="font-semibold">Cricket Enthusiast</span> – Led my university and school teams as captain, strategizing on and off the field.</li>
                  <li>🎸 <span class="font-semibold">Musician at Heart</span> – I love playing the guitar and singing. Feel free to check out my
                    <a href="https://www.instagram.com/sumerplays/" class="text-green-300 hover:text-green-500 duration-300"> Instagram </a> for my covers!
                  </li>
                </ul>
              </div>

              <p class="mt-8 text-lg sm:text-xl leading-relaxed">
                With a problem-solving mindset and a passion for continuous learning, I am always looking for exciting challenges that push the boundaries of technology.
                <span class="font-semibold">Let's connect and build something amazing! 🚀</span>
              </p>
            </div>

            <div className="flex justify-center gap-4 sm:gap-8">
              <ButtonLink
                url='https://docs.google.com/document/d/13Cqzche8LBBJlOC_gafl4aY9aamyqjb9zf9L-V-LH4I/edit?usp=sharing'
                text='View Resume →'
                padding={`p-3`}
              />
              <ButtonLink
                url='https://www.linkedin.com/in/sumersaranaligh/'
                text='View LinkedIn →'
                padding={`p-3`}
              />
            </div>

          </div>
          <div className='mt-10 flex justify-center flex-wrap gap-8'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;