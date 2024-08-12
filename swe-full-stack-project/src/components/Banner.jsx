import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import {
  GrChapterNext,
  GrChapterPrevious,
  GrClose,
  GrPlay,
  GrPause,
} from "react-icons/gr";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const duration = 0;
  const [timeLeft, setTimeLeft] = useState(duration);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  // link, tittle, description, visibility, id, timer

  const role = localStorage.getItem("role");
  if (role !== "User") navigate("/");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/banner/get"
      );
      setData(response.data[0]);
      console.log(response.data[0]);
      let str = response?.data[0]?.timer.split(":");
      if (str) setTimeLeft(+str[0] * 60 * 60 + +str[1] * 60 + +str[2]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBanner = async () => {
    try {
      await axios.delete("http://localhost:3000/api/v1/banner/del");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(); // Call the function
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : deleteBanner()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="w-[70%] h-[90%] flex justify-evenly items-center flex-col">
      <div className="w-[90%] h-[10%] flex ">
        <div className="w-[70%] h-full text-5xl text-gray-200">
          {hours >= 10 ? hours : `0${hours}`}{" "}
          <span className="text-lg text-gray-400">Hours</span>&nbsp; &nbsp;
          {minutes >= 10 ? minutes : `0${minutes}`}{" "}
          <span className="text-lg text-gray-400">Minutes</span>
          &nbsp; &nbsp;
          {seconds >= 10 ? seconds : `0${seconds}`}{" "}
          <span className="text-lg text-gray-400">Seconds</span>
          &nbsp; &nbsp;
        </div>
        <div className="w-[30%] h-full text-3xl flex items-center justify-around text-gray-500">
          <GrChapterPrevious title="Previous" />
          <GrChapterNext title="Next" />
          <GrClose title="Close" />
        </div>
      </div>
      <div className="w-[90%] h-[80%] bg-black/[0.5] flex items-center justify-center">
        {data && (
          <div className="w-[97%] h-[95%]  overflow-hidden  text-white bg-gray-500 flex">
            <div className="w-[60%] h-[100%] relative left-[2%] ">
              <div className="w-full h-full text-lg flex justify-center items-center px-[1%]">
                {data?.description || "No Description"}
              </div>
            </div>
            <div className="w-[50%] h-[200%] relative left-[8%] top-[-50%] bg-blue-500 shadow-2xl shadow-black rotate-[-12deg]">
              <div className="absolute bottom-[40%] flex justify-center items-center w-[70%] h-[35%] left-[10%] rotate-[12deg] px-[2%] py-[1%] text-[3.5rem] text-white shadow-gray-900 bg-transparent">
                {data?.tittle || "No Title"}
              </div>
              <a
                href={data?.link}
                className="absolute bottom-[30%] left-[12%] rotate-[12deg] border w-[50%] text-[1.6rem] text-white shadow-gray-900 bg-transparent"
              >
                Click Here
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
