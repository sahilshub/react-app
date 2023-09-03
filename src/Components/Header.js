import React from 'react'
import icon from '../assets/logo.png'
import navimg from '../assets/navimg.png'
import aboutimg from '../assets/chencon.jpeg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img11 from '../assets/11.jpg'
import img6 from '../assets/6.jpeg'
import img7 from '../assets/7.jpg'
import img9 from '../assets/9.jpeg'
import img10 from '../assets/10.jpeg'
import newsl from '../assets/newsl.png'

import {BsCheck2All} from 'react-icons/bs'
import { useState } from 'react'

const Header = () => {
  const [Open, setOpen] = useState(false)
  const [Selectedmenus, setSelectedmenus] = useState(1)

  const menuClick = () =>{
    console.log('clicked')
    setOpen(!Open)
  }

  const year = new Date()

  return (
    <main>
      <section id='home' className="p-3 md:p-5 " >
       <div className="bg-purple-200 rounded-2xl lg:pb-10 relative">
       <nav className=" px-5 sm:py-2 md:px-6 lg:px-10 font-body md:mt-5 lg:mt-0 ">
          <div className='flex flex-wrap items-center  pl-1'>
          <a href="#home"><img src={icon} alt="" className='w-12 h-12 lg:w-20 lg:h-20 object-cover  mt-3 md:mt-2'/></a>
           <h1 className='text-black text-2xl md:text-2xl lg:text-3xl font-bold ml-3 mt-3 md:mt-0'>IETE<span className='text-blue-700'>.</span></h1>
           <p className='text-xs font-medium lg:font-semibold pt-2 ml-2 text-slate-800 hidden md:block'>The Institution of Electronics and Telecommunication Engineers, Chennai.</p>
           <div className="hidden lg:block ml-auto">
         
               <ul className='flex flex-wrap'>
               <li class=" bg-white shadow rounded">
                <a class="text-gray-900" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                  </svg>
                </a>
              </li>
              <li class=" bg-white shadow rounded ml-4">
                <a class="text-gray-900" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
               </ul>
               
         
           </div>
        
         <button onClick={menuClick} className='lg:hidden ml-auto mt-3 md:mt-1 pr-5  '>
               {!Open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor " className="hover:transform hover:scale-110 hover:duration-150 shadow-md w-6 h-6 rounded-md bg-purple-100 text-black font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:transform hover:scale-110 hover:duration-150 shadow-md w-6 h-6 rounded-md  bg-purple-100 text-black font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
               }
            </button>
    
          </div>
          
           <div className={`${Open ? "block": "hidden"} lg:block flex relative z-40`}>
              <ul className=' absolute top-2 right-5 lg:static flex lg:flex-row flex-wrap flex-col lg:justify-center lg:gap-x-7 gap-y-8 text-xs lg:text-sm mb-5   bg-slate-300 lg:bg-transparent rounded-2xl lg:mx-0 py-7 lg:py-0 md:mt-2 lg:mt-0'>
               <a href="#" className='px-10 lg:px-0'><li onClick={()=>setSelectedmenus(1)} className={` ${Selectedmenus === 1 ? 'bg-purple-800 text-white rounded-2xl text-center font-medium py-1 px-3 hover:transform hover:scale-110 duration-150':'nav'}`}>Home</li></a>
               <a href="#services" className='px-10 lg:px-0'><li onClick={()=>setSelectedmenus()} className={` ${Selectedmenus === 2 ? 'bg-purple-800 text-white rounded-2xl text-center font-medium py-1 px-3 hover:transform hover:scale-110 duration-150':'nav'}`}>About Us</li></a>
               <a href="#team" className='px-10 lg:px-0'><li onClick={()=>setSelectedmenus()} className={` ${Selectedmenus === 3 ? 'bg-purple-800 text-white rounded-2xl text-center font-medium py-1 px-3 hover:transform hover:scale-110 duration-150':'nav'}`}>Team</li></a>
               <a href="http://ietechennai.in/contact.html" className='px-10 lg:px-0'><li onClick={()=>setSelectedmenus(4)} className={` ${Selectedmenus === 4 ? 'bg-purple-800 text-white rounded-2xl text-center font-medium py-1 px-3 hover:transform hover:scale-110 duration-150':'nav'}`}>Contact In</li></a>
               <a href="http://ietechennai.in/pricing.html" className=' px-10 lg:px-0'><li onClick={()=>setSelectedmenus(5)} className={` ${Selectedmenus === 5 ? 'bg-purple-800 text-white rounded-2xl text-center font-medium py-1 px-3 hover:transform hover:scale-110 duration-150 flex flex-wrap':'nav flex flex-wrap'}`}>Get Started<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 animate-pulse w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>
</li></a>         
             </ul>
            </div>
            
        </nav>            
        <div className="flex flex-wrap items-center md:mt-20 lg:mt-0 p-2 md:p-5 py-5 md:py-0 ">
        
            <div className='font-body w-full md:w-1/2 order-last md:order-first static'>
               <p className='ml-12 md:ml-10 lg:ml-16 pl-1 text-slate-600 text-xs lg:text-sm font-medium '>Welcome to IETE,chennai</p>
              <h1 className='text-2xl md:text-3xl lg:text-5xl text-slate-900 font-bold ml-12 md:ml-10 lg:ml-16 mt-2'>Learning Today,<br />
              <span className=''>Leading Tommorow.</span></h1>
              <p className=' text-sm lg:text-lg text-purple-900 ml-12 md:ml-10 lg:ml-16 mb-16 lg:mb-8 mt-3 mx-14 md:mx-8 lg:mx-12 pt-2 border border-transparent border-t-slate-500'>"You have to dream before your dreams comes true."<br/><span className='text-xs lg:text-sm text-slate-800 mt-1 pl-28 lg:pl-80' >-APJ ABDUL KALAM</span></p>
          </div>
        
        <div className="w-full md:w-1/2  order-first md:order-last z-0 ">
          <img src={navimg} alt="" className='object-cover h-full w-full relative mb-10'/>
          <div className='absolute lg:top-72 top-44 md:top-58  right-16 md:right-24 lg:right-48'>
             <a href="http://ietechennai.in/events.html">
              <button className='shadow-md shadow-purple-400 px-3 py-1 bg-purple-500 rounded-lg animate-bounce text-xs lg:text-sm font-medium text-white'>Events
            <button type="button" class="w-4 h-4 text-xs -top-1 absolute rounded-full text-white bg-red-500">
                <span class="p-1 text-xs">
                    1
                </span>
            </button>
            </button>
             </a>

          </div>
          <div className='absolute lg:top-96 top-56 md:top-74  right-64 lg:right-[400px]'>
            <a href="etechennai.in/chencon.html">
            <button className='shadow-md shadow-sky-500 px-3 py-1 bg-sky-600 rounded-lg animate-bounce font-medium text-xs lg:text-sm text-white'>Chencon
            <button type="button" class="w-4 h-4 text-xs -top-1 -left-1 absolute rounded-full text-white bg-red-500">
                <span class="p-1 text-xs">
                    2
                </span>
            </button>
            </button>

            </a>

          </div>
        </div>
       </div>
       </div>
      </section>
      <section className='bg-gray-900 mt-10 shadow-xl relative mx-16 md:mx-10 bottom-24 md:bottom-20 rounded-2xl '>
      
<section class="text-gray-500 font-display mx-10">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-3 rounded-lg">
      
          <h2 class="title-font font-medium text-4xl lg:text-5xl text-white">12060+</h2>
          <p class="leading-relaxed">Students</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-3 rounded-lg">
         
          <h2 class="title-font font-medium text-4xl lg:text-5xl text-white">13592</h2>
          <p class="leading-relaxed">Staffs</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-3 rounded-lg">
       
          <h2 class="title-font font-medium text-4xl lg:text-5xl text-white">42+</h2>
          <p class="leading-relaxed">Events</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-3 rounded-lg">
         
          <h2 class="title-font font-medium text-4xl lg:text-5xl text-white">15</h2>
          <p class="leading-relaxed">Colleges</p>
        </div>
      </div>
      <div className='text-slate-500 p-2 px-3 flex flex-wrap'>
        <p className= 'leading-normal text-left border text-xs lg:text-base border-transparent border-t-white pt-5 pb-5'><span>Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training. </span><a href="#about" className='ml-2 text-white'>Read More</a></p>
      </div>
    </div>
  
</section>
                
      </section>
      <section id='services' class="bg-sky-100 rounded-2xl mb-10 px-5 mx-3 md:mx-5">
    <div class="container mx-auto">
      <div class="py-12 lg:py-20">
        <h4 className='text-base text-slate-700 animate-pulse text-center mb-1'>What we do ?</h4>
        <h2 class="text-center text-blue-900  text-3xl lg:text-5xl font-bold font-body">
          Our Services
        </h2>
      </div>
      <div class="flex flex-wrap pb-16 md:pb-20 justify-center font-display">
        <div class="w-full md:w-1/2 xl:w-1/3 py-1 lg:py-3 lg:p-5 md:order-1 lg:mt-0 ">
          <div class="bg-white p-10 md:p-5 lg:p-10 md:py-6 rounded-2xl shadow-lg hover:transition hover:scale-105 hover:duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 mb-7 text-blue-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>

            <h3 class="text-2xl md:font-lg lg:text-2xl font-bold text-gray-700">Design</h3>
            <p class="mt-3 md:mt-4 lg:mt-3 md:text-sm lg:text-base">
            Its vision is to reach the unreached and empower the youth through Technical Education and Skill development with a Mission for Advancement of Electronics, Telecommunication, Information Technology & other related disciplines.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 py-1 lg:py-5 lg:p-4 md:order-3">
          <div class="bg-white p-10 md:p-5 lg:p-9 rounded-2xl md:mt-3 lg:mt-0 shadow-lg hover:transition hover:scale-105 hover:duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 mb-7 text-blue-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>

            <h3 class="text-2xl md:font-lg lg:text-2xl font-bold text-gray-700">Contribution</h3>
            <p class="mt-3 md:text-sm lg:text-base">
            To contribute in Nation's Human Resource & Infrastructure Development through our Engineers & Scientists. The Government of India, Ministry of Science and Technology, Department of Scientific & Industrial Research has recognized IETE as a Scientific and Industrial Research Organization (SIRO)
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-1/3 py-1 lg:py-3 lg:p-5 md:order-2 ">
          <div class="bg-white p-10 md:p-5 lg:p-10 rounded-2xl shadow-lg hover:transition hover:scale-105 hover:duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10 mb-7 md:mb-6 lg:mb-7 text-blue-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>

            <h3 class="text-2xl md:font-lg lg:text-2xl font-bold text-gray-700">Development</h3>
            <p class="mt-3 md:text-sm lg:text-base">
            To keep pace with technological development and achieve the mission, it organizes conferences, conventions, symposia, seminars, workshops, publications and brain storming sessions for continued knowledge upgradation of its members. 
            </p>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  
  <section id='about' class="bg-purple-100 rounded-2xl p-3 md:p-5 mb-10 mx-3 md:mx-5 font-display">
    <div class="container mx-auto sm:px-12 py-20">
      <div class="flex flex-wrap px-10 md:px-30 bg-white rounded-xl shadow-lg py-3 font-body">
        <div class="w-full lg:w-1/2 lg:pr-10  flex">
          <iframe width="560 " className='rounded-2xl shadow-md ml-3 md:ml-0 w-64 md:w-full my-auto' height="315" src="https://www.youtube.com/embed/Lhz0DSZRebg?si=REDNdb4pbZIbVp0d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-5 py-5">
          <div>
            <h2 class="text-2xl animate-pulse md:text-4xl text-purple-800 font-display">
              <span className='font-bold'>About Us</span>
            </h2>
            <p class="mt-7 text-gray-600 text-sm lg:text-base">
            Founded in 1953, the Institution of Electronics and Telecommunication Engineers (IETE) is a leading professional society. Its vision is to reach the unreached and empower the youth through Technical Education and Skill development with a Mission for Advancement of Electronics, Telecommunication, Information Technology & other related disciplines; to contribute in Nation's Human Resource & Infrastructure Development through our Engineers & Scientists. The Government of India, Ministry of Science and Technology, Department of Scientific & Industrial Research has recognized IETE as a Scientific and Industrial Research Organization (SIRO). 
            </p>
          </div>
        </div>
      </div>
      <div className='border border-transparent border-b-slate-400 mt-5 pb-2 '><p className='mt-10 text-sm lg:text-base text-slate-600'>The Institution has also been notified as an Educational Institution of National Eminence by the Government of India. IETE is governed by its elected Governing Council headed by an elected President. It has on its roll the Secretary General – the head of IETE Secretariat as Chief Executive. The Institution is managed through various Committees and Boards nominated by the Governing Council. The 63 Centers are spread all over India 02 abroad and are managed by respective Executive Committees. To keep pace with technological development and achieve the mission, it organizes conferences, conventions, symposia, seminars, workshops, publications and brain storming sessions for continued knowledge upgradation of its members. </p></div>
      <div class="flex flex-wrap mt-5 font-body">
      <div class="w-full lg:w-1/2 lg:pl-5 py-5">
          <div>
            <h2 class="text-lg md:text-2xl text-purple-800 font-semibold">
              Chennai Center
            </h2>
            <p class="mt-10 text-gray-600 text-sm lg:text-base">
            Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training. 
            </p>
            <p class="mt-3 text-gray-600 text-sm lg:text-base">
            The Centre assigns top priority to the basic need for ‘education transformation’ in keeping pace with time, and aims at to develop the highest quality of manpower to cater to the needs & expectations of industry, R&D and educational institutions, with higher degree of employability for today and tomorrow. 
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-10 mt-5 flex">
          <img class="rounded-xl shadow-lg w-96 lg:w-full m-auto" src={aboutimg} alt=""/>
        </div>
        <div class="w-full lg:pl-5 py-5">
          <div>
            <h2 class="text-lg md:text-2xl text-purple-800 font-semibold">
              Goals
            </h2>
           <div className="">
           <div className='flex mt-10'><BsCheck2All className='h-6 w-6 mt-4 mr-1 hidden md:block' />
           <p class=" text-white text-sm lg:text-base bg-purple-600 rounded-3xl p-3 px-5">
            
            <span className='text-black font-semibold text-lg mr-3 '> Vision: </span> Reaching the un-reached and empowering the youth through Technical Education and Skill Development.
            </p></div>
            <div className="flex mt-3"><BsCheck2All className='h-9 w-9 mt-4 mr-1 hidden md:block' />
            <p class=" text-white text-sm lg:text-base bg-purple-600 rounded-3xl p-3 px-5">
              <span className='text-black font-semibold text-lg mr-2'>  Mission: </span> Advancement of Electronics, Telecommunication, Information Technology & other related disciplines to contribute in Nation’s Human Resource & Infrastructure Development through our Engineers.
            </p>
            </div>
            <div className="flex mt-3"><BsCheck2All className='h-9 w-9 mt-4 mr-1 hidden md:block' />
            <p class=" text-white text-sm lg:text-base bg-purple-600 rounded-3xl p-3 px-5 ">
              <span className='text-black font-semibold text-lg mr-2 '> Motives: </span>  IETE is helping it's students to learn and grow in the emerging field of Electronics and Telecommunication. One of the missions of IETE is to provide the best mode of studying a Btech degree programme.
            </p>
            </div>
            
           </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id='team' class="rounded-2xl p-5 mb-10">
    <div class="container mx-auto">
      <div class="py-16 lg:py-28">
        <p className='text-center text-slate-600 animate-pulse text-small'>Our Executive</p>
        <h2 class="text-center text-3xl lg:text-5xl font-bold font-body">
          Committe Members
        </h2>
      </div>
      <div class="mt-12">
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img1} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Dr.N.Venkateswaran</h2>
            <p class="text-gray-400 font-semibold">Chairman</p>
            <p className='text-gray-400 text-xs pt-2 text-center'>Professor,Dept. of ECE Sri Siva Subramaniya Nadar College Of Engineering</p>
            <p className='text-purple-600 text-xs pt-2 text-center'>venkateswaran.iete@gmail.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img2} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Dr. Tata Sudhakar</h2>
            <p class="text-gray-400 font-semibold">Immd Post Chairman</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>tatasudhakar@gmail.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img11}  alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Mr. Shakthi Murugan</h2>
            <p class="text-gray-400 font-semibold">Honarary Secretary</p>
            <p className='text-gray-400 text-xs pt-2 text-center'>Assistant Professor / ECE Jeppiaar Maamallan Engineering College</p>
            <p className='text-purple-600 text-xs pt-2 text-center'>shakthimuruganece@gmail.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full pl-2 shadow-md w-52" src={img3} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Mrs T J Jeyaprabha</h2>
            <p class="text-gray-400 font-semibold">Honarary Treasurer</p>
            <p className='text-gray-400 text-xs pt-2 text-center'>Assistant Professor / ECE Sri Venkateswara College of Engineering</p>
            <p className='text-purple-600 text-xs pt-2 text-center'>jprabha@svce.ac.in</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
    
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img11} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Dr C Udayakumar</h2>
            <p class="text-gray-400 font-semibold">EC Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>cukumar@gmail.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
          
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img11} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Dr V Thulasibai</h2>
            <p class="text-gray-400 font-semibold">EC Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>thulasi9840@gmail.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              
              <li class="p-2 bg-white shadow rounded mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52 object-cover" src={img4} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Mr D Vijendrababu</h2>
            <p class="text-gray-400 font-semibold">EC Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>dvijendrababu@gmail.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52 " src={img11}  alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Shri Ganapathy Suresh</h2>
            <p class="text-gray-400 font-semibold">EC Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>lovechennai@yahoo.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
            
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img6} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Shri S Arun Kumar</h2>
            <p class="text-gray-400 font-semibold">EC Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>arunsundar.s@cvrde.drdo.in</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img11} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Shri S Madivaanan</h2>
            <p class="text-gray-400 font-semibold">EC Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>madivaanan.s@gmail.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                  </svg>
                </a>
              </li>
            
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img7} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Dr Vaishali D</h2>
            <p class="text-gray-400 font-semibold">Co-opted Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>vaishali.b@vdp.srmuniv.ac.in</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
             
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img9} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Mr Arun</h2>
            <p class="text-gray-400 font-semibold">Co-opted Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-7 text-center'>snatarajan1967@gmail.com</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              
            </ul>
          </div>
          <div class="bg-purple-100 rounded-2xl p-5 text-center">
            <img class="mx-auto rounded-full shadow-md w-52" src={img10} alt=""/>
            <h2 class="mt-3 text-xl font-bold text-purple-900">Dr. K. Sumathi</h2>
            <p class="text-gray-400 font-semibold">Co-opted Member</p>
            <p className='text-gray-400 text-xs pt-2 text-center'></p>
            <p className='text-purple-600 text-xs pt-5 text-center'>sumathi.ece@sairam.edu.in</p>
            <ul class="flex justify-center mt-4">
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li class="p-2 bg-white shadow rounded  mx-1">
                <a class="text-gray-500" href="">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-sky-100 p-5 mb-10 font-body">
    <div class="container mx-auto sm:px-20 py-20">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 lg:pr-5 py-5 flex">
          <img class="rounded shadow-md ml-auto my-auto" src={newsl} alt=""/>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-5 py-5">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-blue-900">
              Subscribe to our Newsletter
            </h2>
          
            <div class="mt-10">
              <form action="">
                <div class="flex border bg-white p-1 rounded-2xl focus-within:border-sky-600">
                  <div class="w-auto flex px-1 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="my-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div class="w-full">
                    <span class="block text-gray-300 text-xs">Enter your Name</span>
                    <input class="w-full p-1 focus:outline-none border-b" type="text"/>
                  </div>
                </div>
                <div class="flex mt-3 border bg-white p-1 rounded-2xl focus-within:border-sky-600">
                  <div class="w-auto flex px-2 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="my-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div class="w-full">
                    <span class="block text-gray-300 text-xs">Enter your Mail</span>
                    <input class="w-full p-1 focus:outline-none border-b" type="text"/>
                  </div>
                </div>
                <div class="mt-4">
                  <input class="mr-2" type="checkbox" name="" value=""/> I Agree
                  <button class="w-full md:w-auto block mt-3 font-semibold text-white bg-sky-600 rounded-3xl px-10 py-2">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <footer class="text-white rounded-2xl mx-3 md:mx-5 p-3 bg-gray-800 font-body">
    <div class="flex flex-wrap py-12">
      <div class="p-5 lg:p-10 w-full md:w-1/3">
        <h2 class="font-extrabold text-2xl">IETE Chennai</h2>
        <p class="text-gray-400 mt-3">
        IETE Chennai centre, No: 37, Tamil Nadu 600086 Conran Smith Road Entrance Peters Road,Gopalapuram,Chennai, 
        </p>
      <p className=' mt-4 text-gray-400 flex ' ><span className='text-white pr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg></span>044 2835 0773 </p>
      <p className=' mt-4 text-gray-400 flex ' ><span className='text-white pr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
</span>ietechennai@gmail.com </p>

      </div>
      <div class="p-5 lg:p-10 w-full md:w-1/3">
        <h2 class="font-extrabold text-xl">Usefull Links</h2>
        <p class="text-gray-400 mt-3">
          <a href="#home">@ Home</a><br />
          <a href="#about">@ About Us</a><br />
          <a href="#team">@ Team</a><br />
          <a href="#home"></a>@ Contact<br />
          <a href="#home">@ Get Membership</a>
        </p>
      </div>
      <div class="p-5 lg:p-10 w-full md:w-1/3">
        <h2 class="font-extrabold text-xl">Stay Tuned</h2>
        <ul class="flex mt-4">
          <li class="p-2 bg-white shadow rounded  mx-1">
            <a class="text-gray-500" href="">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </li>
          <li class="p-2 bg-white shadow rounded  mx-1">
            <a class="text-gray-500" href="">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
              </svg>
            </a>
          </li>
          <li class="p-2 bg-white shadow rounded  mx-1">
            <a class="text-gray-500" href="">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
          <li class="p-2 bg-white shadow rounded  mx-1">
            <a class="text-gray-500" href="">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </li>
          <li class="p-2 bg-white shadow rounded mx-1">
            <a class="text-gray-500" href="">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </li>
        </ul>
        
        
      </div>
    </div>
    <div class="text-center text-gray-500 border-t border-gray-500 pt-3">
     Copyright © {year.getFullYear()} IETE Chennai.All Rights Reserved
    </div>
  </footer> 


      </main>
      
  )
}

export default Header