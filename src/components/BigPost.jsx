import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { selectAllNews } from "@/redux/actions/newsSlice";

const BigPost = ({ item }) => {
  let x = Math.floor(Math.random() * 19);

  const {news} = useSelector(selectAllNews);

  return (
    <div className="flex items-center justify-center mx-20 font-poppins">
      <div className="relative flex items-center justify-center w-[90%]">
        <img
          src={news[0].urlToImage}
          alt="image"
          className="w-full h-[500px] object-cover rounded-md "
        />

        <div className="absolute bottom-[-50px] bg-white w-[70%] p-6 rounded-lg shadow-lg">
          <h1 className="text-gray-500 mb-4">{news[0].author}</h1>
          <h1 className="font-bold text-4xl mb-4">{news[0].title}</h1>
          <p className="text-gray-500">{news[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(BigPost), { ssr: false });
