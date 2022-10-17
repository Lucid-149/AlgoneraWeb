import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function TeamCard(props) {
  const team = [
    {
      name: "J. Muema",
      position: "Web3 Developer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error laborum veniam sit rem iure et deserunt dolore reprehenderit quam?",
      img: "/team.jpg",
    },
    {
      name: "P Kioko",
      position: "Front end developer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error laborum veniam sit rem iure et deserunt dolore reprehenderit quam?",
      img: "/team.jpg",
    },
    {
      name: "D Mureti",
      position: "Back end developer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error laborum veniam sit rem iure et deserunt dolore reprehenderit quam?",
      img: "/team.jpg",
    },
    {
      name: "T Kanyotu",
      position: "Project Manager",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error laborum veniam sit rem iure et deserunt dolore reprehenderit quam?",
      img: "/team.jpg",
    },
    {
      name: "R Atkinson",
      position: "UI/UX Designer, Content Writer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error laborum veniam sit rem iure et deserunt dolore reprehenderit quam?",
      img: "/team.jpg",
    },
  ];
  const [teamMember, setTeamMember] = useState(team);
  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState(teamMember[index].quote);
  const [name, setName] = useState(teamMember[index].name);
  const [position, setPosition] = useState(teamMember[index].position);
  const [img, setImg] = useState(teamMember[index].img);
  const [prev, setPrev] = useState(index - 1);
  /// props set theme to dark mode
  const [darkMode, setDarkMode] = useState(false);
  // function to toggle dark mode from props passed from parent component
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  };

  useEffect(() => {
    const lastIndex = teamMember.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    setQuote(teamMember[index].quote);
    setName(teamMember[index].name);
    setPosition(teamMember[index].position);
    setImg(teamMember[index].img);
  }, [index, teamMember]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(slider);
  }, [index, teamMember]);

  const nextSlide = () => {
    setIndex(index + 1);
  };

  const prevSlide = () => {
    setIndex(index - 1);
  };

  return (
    <div className="flex ">
      <div className=" rounded-md left-0   px-2 py-10 border-opacity-20 z-10">
        <div className=" flex flex-wrap gap-5 justify-center ">
          {/* list all team members in buttons */}
          {teamMember.map((member, memberIndex) => {
            let position = "shadow-inner";
            if (memberIndex === index) {
              position = "shadow-xl border-opacity-40 ";
            }
            return (
              <button
                key={memberIndex}
                onClick={() => setIndex(memberIndex)}
                className={`teamBtn rounded-md md:w-fit w-[52%] max-h-52 max-w-sm overflow-hidden justify-between border border-secondary border-opacity-5 h-fit flex flex-col md:flex-row shadow-inner items-center  ${position}`}
              >
                  <Image
                    src={member.img}
                    alt={member.name}                   
                    width={180}
                    height={240}
                    className="md:rounded-l-md rounded-t-md  -m-2 md:rounded-t-none "
                  />
                <div className="border-r-2 border-accent h-full"></div>
                <div className=" flex  w-full flex-col text-right md:pr-4 p-2">
                  <span className="text-xs text-clip bg-accent text-black font-bold">
                    {member.position}
                  </span>
                  <span className="text-base font-bold">{member.name}</span>
                  <p className="md:text-xs leading-tight text-[12px] ">
                    {member.quote}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
