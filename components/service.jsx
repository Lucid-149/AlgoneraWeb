import React from "react";
import PropTypes from "prop-types";

function Service(props) {
  return (
    <div className=" max-w-md hover:gap-24  m-4 rounded-sm border-none border-secondary hover:rounded-md flex flex-col justify-evenly items-center gap-4 py-10 cursor-pointer hover:bg-teal-900 hover:text-white ease-in-out duration-500">
      <div className="flex justify-center items-center w-full">
        <object
          className="hover:rotate-12 w-1/2 ease-in-out duration-500"
          data={props.img}
          type="image/svg+xml"
        ></object>
      </div>
      <div className="px-10 text-center">
        <h3 className="text-2xl font-bold mb-5">{props.title}</h3>
        <p className="text-sm text-center ">{props.description}</p>
      </div>
    </div>
  );
}

Service.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Service;
