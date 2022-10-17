import React, { useEffect, useRef, } from "react";
import gsap from "gsap";

export default function BackgroundAnimation() {
  const app = useRef();

  // only runs every 5 seconds
  useEffect(() => {
    // check if the app is mounted
if (typeof window !== "undefined") {
    // load the animation on screen with innerWidth of more than 800px
    if (window.innerWidth > 800) {
    const ctx = gsap.context(() => {
        gsap.to(".box", 1, {
          scale: 0,
          y: 60,
          yoyo: true,
          repeat: -1,
          ease: "power3.inOut",
          delay: 2,
          stagger: {
            amount: 1.5,
            grid: "auto",
            from: "center",
          },
        });
      }, app);
      return () => ctx.revert();
    } else {
    const ctx = gsap.context(() => {
        gsap.to(".box", 1, {
          scale: 0,
          y: 60,
          yoyo: true,
          repeat: 5,
          ease: "power3.inOut",
          delay: 2,
          stagger: {
            amount: 1.5,
            grid: "auto",
            from: "center",
          },
        });
      }, app);
        return () => ctx.revert();
    }
  }
    }, []);


//   },
//    []);
  // get screen size and set the size of the boxes run this once on load
  const boxes = [];
  if (typeof window !== "undefined") {
    if (window.innerWidth > 800) {
        let boxLength = 50;
        for (let i = 0; i < 1000; i++) {
          boxes.push(
            <div
              className="box bg-primary"
              key={i}
              style={{ width: boxLength, height: boxLength }}
            ></div>
          );
        }
    } else {
        let boxLength = 95;
        for (let i = 0; i < 50; i++) {
          boxes.push(
            <div
              className="box bg-primary"
              key={i}
              style={{ width: boxLength, height: boxLength }}
            ></div>
          );
        }
    }
    }
  ;
    


  return (
    <div
      className=" fixed top-0 left-0 -z-10  m-0 p-0 justify-center w-screen h-screen flex flex-wrap"
      ref={app}
    >
      {boxes}
    </div>
  );
}
