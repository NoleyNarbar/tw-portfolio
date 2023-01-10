import Head from 'next/head';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import {AiFillMail, AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'
import Image from 'next/image';
import nolan from '../public/nolan.png'
import NolanDarkBig from '../public/NolanDarkBig.png';
import frontenddevelopment from "../public/frontenddevelopment.svg";
import databasebackend from "../public/databasebackend.svg";
import studyinglaptop from "../public/studyinglaptop.svg";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll(".js-show-on-scroll");
  
    const callback = function(entries) {
      entries.forEach(entry => {
        // Is the element in the viewport?
        if(entry.isIntersecting) {
          entry.target.classList.add("motion-safe:animate-fadeIn")
        } else {
          entry.target.classList.remove("motion-safe:animate-fadeIn");
        }
      })
    }
    
    const observer = new IntersectionObserver(callback);
  
    targets.forEach(function(target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    })
  }, []);
  

  

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Noley_Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" sizes="32x32" src="../public/favicon32x32a.png" />
        <link rel="icon" type="image/png" sizes="16x16" src="../public/favicon16x16.png" />
      </Head>

      <main className="bg-slate-200 px-10 md:px-20 lg:px-40 dark:bg-gray-900 xs:w-full">
        <section className='min-h-screen'>
          <nav className='xs:pl-0 p-10 xs:p-4 xs:mb-4 mb-12'>
            <ul className='flex items-center justify-center xs:grid xs:grid-cols-2 '>
              <li className='text-teal-500 xs:text-lg text-xl font-burtons xs:p-2 xs:m-1 xs:order-first xs:flex xs:items-center xs:justify-center'>
              <h1 >Noley_Dev</h1>  
              </li>  
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md xs:ml-2 ml-8 xs:flex xs:items-center xs:justify-center" href="#projects">Projects</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md xs:ml-2 ml-8 xs:flex xs:items-center xs:justify-center" href="/resume">Resume</a>
              </li>
              <li className="ml-6 xs:order-first xs:flex xs:items-center xs:justify-center" >{ darkMode ? <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl fill-yellow-200"/> : <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl fill-indigo-900"/> } </li>
              
            </ul>
          </nav>
          <div className="text-center p-4 xs:p-1 xs:text-lg">
            <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-5xl py-2 mb-2">Nolan Geiger</h2>
            <h3 className="text-2xl py-1 dark:text-violet-500">[ "<span className="text-teal-400">Coder</span>", "<span className="text-teal-500">Developer</span>", "<span className="text-teal-600 ">Programmer</span>" ];</h3>
            <p className="text-lg py-5 leading-8 text-gray-800 dark:text-white">
              Drop me a line below and let's write some code!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600">
            <a href="mailto: nolan.geiger@gmail.com"><AiFillMail className="hover:animate-ping hover:fill-yellow-500 dark:fill-green-200" /></a>
            <a href="https://www.linkedin.com/in/nolangeiger/"><AiFillLinkedin className="hover:animate-spin hover:fill-blue-800 dark:fill-green-200" /></a>
            <a href="https://github.com/NoleyNarbar"><AiOutlineGithub className="hover:animate-pulse hover:fill-red-900 dark:fill-green-200" /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden xs:mb-4">
            { darkMode ? <Image src={NolanDarkBig} /> : <Image src={nolan} />}
            
          </div>
        </section>
        <section>
          <div className="xs:font-semibold"><h3 className="text-3xl py-1 dark:text-white ">Some of my skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I'm focused on 
              <span className="text-teal-500"> React </span>
               
              and have begun to venture into <span className="text-teal-500">backend </span> development.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Though I've carved out competency in JS related web, mobile and full-stack technologies, I love learning, and am excited to <span className="text-teal-500 ">master </span> whatever may come my way.
            </p>
          </div>
          <div className="grid grid-flow-col gap-10  my-14 xs:grid-flow-row">
            <div className="bg-gray-50 text-center drop-shadow-xl shadow-xl p-10 rounded-xl my-10  dark:bg-lime-50 flex-1">
              <Image src={frontenddevelopment} width={150} height={150} className="mx-auto" />
              <h3 className="text-lg  pt-8 pb-2 font-bold dark:text-purple-900">
              Frontend Friends
              </h3>
              <p className="py-2 text-teal-600 dark:text-blue-700">
                My utensils for creating UIs and managing state:
              </p>
              
              <p className="text-gray-800 dark:text-indigo-900 py-1">&#x2022; Javascript</p>
              <p className="text-gray-800 dark:text-indigo-900 py-1">&#x2022; HTML</p>
              <p className="text-gray-800 dark:text-indigo-900 py-1">&#x2022; CSS</p>
              <p className="text-gray-800 dark:text-indigo-900 py-1">&#x2022; React</p>
              <p className="text-gray-800 dark:text-indigo-900 py-1">&#x2022; Tailwind CSS</p>
              
            </div>
            <div className="bg-gray-50 drop-shadow-xl text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={databasebackend} width={130} height={130} className="mx-auto my-2.5" />
              <h3 className="text-lg font-bold dark:text-purple-900  pt-8 pb-2">
                Backend Buddies
              </h3>
              <p className="py-2 text-teal-600 dark:text-blue-700">
                My servers of content, userdata, media, and routes:
              </p>
              
              <p className="text-gray-800 py-1 dark:text-indigo-900">&#x2022; Node</p>
              <p className="text-gray-800 py-1 dark:text-indigo-900">&#x2022; MongoDB</p>
              <p className="text-gray-800 py-1 dark:text-indigo-900">&#x2022; Express</p>
              <p className="text-gray-800 py-1 dark:text-indigo-900">&#x2022; Sanity.io <br/>(headless CMS)</p>
            </div>
            <div className="bg-gray-50 drop-shadow-xl text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={studyinglaptop} width={130} height={130} className="mx-auto my-2.5" />

              <h3 className="text-lg font-bold dark:text-purple-900 pt-8 pb-2 ">Currently Working On</h3>
              <p className="py-2 text-teal-600 dark:text-blue-700">
                There's always just a bit more to learn...
              </p>
              
              <p className="text-gray-800 py-1 dark:text-indigo-900">&#x2022; Typescript</p>
              <p className="text-gray-800 py-1 dark:text-indigo-900">&#x2022; React Native</p>
              <p className="text-gray-800 py-1 dark:text-indigo-900">&#x2022; Next JS</p>
              <p className="text-gray-800 py-1 dark:text-indigo-900">&#x2022; GraphQL</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Current Projects</h3>

            <p id="projects" className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Coming soon! Please check my github to look at code of <span className="text-teal-500"> projects </span> 
              that will be displayed here soon.
            </p>
          
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  )
}
