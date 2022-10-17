import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

function Product(props) {
  const app = useRef();

  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useState(0);

  // only runs on first render
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-1", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  }, []);

  // runs on first render and every time delayedCount changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-2", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  }, [delayedCount]);

  // runs on every render
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-3", { rotation: "+360" });
    }, app);
    return () => ctx.revert();
  });

  return (
    <div className="" ref={app}>
      <div
        onClick={() => setCount(count + 1)}
        className=" max-w-[400px]  w-full box-3  box h-full flex text-7xl hover:text-9xl items-start hover:items-center justify-start cursor-pointer gap-2 hover:border rounded-sm p-4 hover:p-8 border-secondary hover:rounded-md hover:shadow-2xl hover:bg-primary hover:text-white ease-in-out duration-300 flex-col hover:scale-150"
      >
        <div className="box-2"> {props.icon}</div>
        <div className=" flex box-1 flex-col  gap-0">
          <h1 className="text-xl">{props.title}</h1>
          <p className="text-[12px] leading-tight hover:text-sm ease-linear duration-300">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {};

export default Product;
