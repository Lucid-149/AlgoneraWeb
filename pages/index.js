import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import NavBar from "../components/nav";
import { BsSun, BsMoon } from "react-icons/bs";
import { SiMinutemailer, SiMarketo } from "react-icons/si";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaOpencart } from "react-icons/fa";
import {ImProfile} from "react-icons/im";
import {AiTwotoneApi} from "react-icons/ai";
import Hero from "../components/hero";
import Service from "../components/service";
import Product from "../components/product";
import Contact from "../components/Contact";
import TeamCard from "../components/teams";
import BackgroundAnimation from "../components/backgroundAnimation";

export default function Home() {
  // create an animation for product section rotation 90deg every ten seconds and on click

  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? styles.bodyDark : styles.bodyLight}>
      <Head>
        <title>Algonera</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        svg={
          darkMode ? <object data="/dark.svg" /> : <object data="/light.svg" />
        }
      />
      <button className="ThemeBtn z-50" onClick={toggleDarkMode}>
        {darkMode ? <BsSun className=" text-yellow-400" /> : <BsMoon />}
      </button>
      <main className={styles.container}>
        <section className={styles.section} id="home">
          <div className={styles.container}>
            <div className=" pt-32">
              {darkMode ? (
                <object data="/dark.svg" />
              ) : (
                <object data="/light.svg" />
              )}
            </div>
          </div>
          <Hero />
        </section>

        <section className=" my-40 " id="">
          <div className=" w-full flex justify-center items-center relative">
            <div className=" w-1/2 flex justify-center items-center">
              <div className=" w-1/2">
                {darkMode ? (
                  <object data="/darkicon.svg" />
                ) : (
                  <object data="/lighticon.svg" />
                )}
              </div>
            </div>
            <div className="w-2/3 absolute flex justify-center">
              <p className=" text-center first-letter:text-3xl md:text-xl font-light italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>
        <h1 className="w-full text-center pt-20 font-thin uppercase">
          Our Services
        </h1>
        <section
          className=" flex items-center justify-center flex-wrap"
          id="about"
        >
          <Service
            img="/arrow.svg"
            description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            "
            title="Service one"
          />
          <Service
            img="/spin.svg"
            description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            "
            title="Service two"
          />
        </section>
        <h1 className="w-full text-center pt-20 font-thin uppercase">
          Meat The Team
        </h1>
        <section className=" flex items-center justify-center z-10 gap-10 hover:gap-4 ease-in-out duration-700 py-10 flex-wrap">
          <TeamCard />
        </section>
        <h1 className="w-full text-center pt-20 font-thin uppercase">
          Our Products
        </h1>
        <section className=" m-3 flex gap-2 z-10 flex-wrap /md:flex-nowrap justify-center">
          <Product
            icon={<FaOpencart />}
            title="E-commerce Platforms"
            description="E-commerse platforms give business an extra level for reaching their clients. The benefits of which include reduced costs, faster buying process, closer understanding of customer needs and feedback. An e-commerce website is a super power to business. let us build you one
            "
          />
          <Product
            icon={<ImProfile />}
            title="Personal Portfolio"
            description="   Having a website that promotes your skillset in photography, art, music and more make you stand out from the rest
            "
          />
          <Product
            icon={<SiMarketo />}
            title="Product Promotion"
            description="  As you introduce that new product to your clients, it can be benefital to promote the product with a dedicated landing page, involving stunning imagery and animation and captivating descriptions. With attention to search engine optimazation we ensure your product can reach the widest ideal customer base possible
            "
          />
          <Product
            icon={<AiTwotoneApi />}
            title="API creation and management"
            description=" Behind any successful online business is a robust API that queries and handles request efficiently allowing for a smoother customer experience and very detailed information that could be generated
            "
          />
        </section>
        <section
          className=" flex z-10 h-screen relative my-20 mt-60 items-center justify-evenly flex-wrap-reverse"
          id="contact"
        >      

          <div className=" items-stretch flex flex-col">
            <div className="w-full hover:ml-2  ease-in-out duration-700">
              <Contact
                name="Email"
                icon={<SiMinutemailer className=" text-teal-400" />}
                value="/Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className=" w-full hover:ml-2  ease-in-out duration-700">
              <Contact
                name="Phone"
                icon={<MdOutlineLocalPhone className=" text-teal-400" />}
                value="/Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className="w-full hover:ml-2 ease-in-out duration-700">
              <Contact
                name="Github"
                icon={<FaGithub className=" text-teal-400" />}
                value="/Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>

            <div className="w-full hover:ml-2  ease-in-out duration-700">
              <Contact
                name="linkedin"
                icon={<FaLinkedin className=" text-teal-400" />}
                value="/Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
          <div className="hover:rotate-45 w-full flex justify-center ease-in-0ut z-0 duration-1000 ">
            <object className=" w-2/3 max-w-xs" data="/spin.svg" />
          </div>
        </section>
      </main>
           <BackgroundAnimation /> 
    </div>
  );
}
