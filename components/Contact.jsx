import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";

function Contact(props) {
  const [viewContact, setViewContact] = useState(false);

  function toggleContact() {
    setViewContact(!viewContact);
  }
  return (
    <div className=" w-full">
      <div>
        <button
          className=" pl-4 border my-4 hover:pl- text-xl w-full hover:text-2xl font-medium uppercase hover:text-white justify-center border-secondary items-center rounded-md hover:rounded-xl hover:border-r-8 flex hover:bg-teal-900 ease-in-out duration-500"
          onClick={toggleContact}
        >
          <span>{props.name}</span>{" "}
          <div className=" p-5 text-5xl rounded ml-4 delay-300 ease-in-out duration-500">
            {props.icon}
          </div>
        </button>
      </div>
      {viewContact ? (
        <div
          onClick={toggleContact}
          className=" flex z-50  right-0 rounde  bottom-0 bg-opacity-30 justify-end  fixed sm:p-20 lg:p-60 items-center  bg-black w-full h-screen"
        >
          <div className=" bg-primary p-8 flex flex-col gap-8 justify-center place-content-center items-center ">
            <div className="animate__backInUp">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={props.value}
                bgColor="#072227"
                fgColor="#fff"
              />
            </div>
            <div className="text-center flex flex-col text-lg text-white">
              {props.name}
              <a href={props.value} className="text-white  max-w-xs">
                {props.value}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
  value: PropTypes.string,
};

export default Contact;
