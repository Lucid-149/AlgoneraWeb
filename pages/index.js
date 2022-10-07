import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import NavBar from "../components/nav";
import { BsSun, BsMoon } from "react-icons/bs";
import {SiMinutemailer} from "react-icons/si";
import {MdOutlineLocalPhone} from "react-icons/md";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Hero from "../components/hero";
import Service from "../components/service";
import Product from "../components/product";
import Contact from "../components/Contact";
export default function Home() {
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
      <NavBar />
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
        <section className=" h-screen " id="">
          <div className=" h-screen w-full flex justify-center items-center relative">
            <div className=" w-1/2">
              <div>
                {darkMode ? (
                  <object data="/darkicon.svg" />
                ) : (
                  <object data="/lighticon.svg" />
                )}
              </div>
            </div>
            <div className="w-2/3 absolute flex justify-center">
              <p className=" text-center first-letter:text-3xl text-xl font-light italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
                ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>
        <section className=" flex items-center justify-center flex-wrap" id="about">
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
        <section className=" my-20">
          <Product
            img="/Vector.svg"
            title="Product one"
            description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            "
          />
        </section>
        <section className=" flex h-screen items-center justify-evenly" id="contact">
          <div className="">
          <div className="w-full hover:ml-20  ease-in-out duration-700">
            <Contact
              name="Email"
              icon={<SiMinutemailer className=" text-teal-400" />}
              value="/Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className=" w-full hover:ml-20  ease-in-out duration-700">
            <Contact
              name="Phone"
              icon={<MdOutlineLocalPhone className=" text-teal-400" />}
              value="/Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="w-full hover:ml-20 ease-in-out duration-700">
            <Contact
              name="Github"
              icon={<FaGithub className=" text-teal-400" />}
              value="/Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          
          <div className="w-full hover:ml-20  ease-in-out duration-700">
            <Contact
              name="linkedin"
              icon={<FaLinkedin className=" text-teal-400" />}
              value="/Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          </div>
          <div className="hover:rotate-45 ease-in duration-1000 ">
            <object className="" data="/spin.svg" />
          </div>
          
         
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
