import { selectAllNews } from "@/redux/actions/newsSlice";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const NewsSection = () => {
  const { news } = useSelector(selectAllNews);

  // console.log(news.length);

  return (
    <div className="mt-32 grid items-center justify-center">

      <div className="grid grid-cols-4  gap-x-5 gap-y-5">

        {news.map((item) =>
          (<Post key={item.id} item={item} />)
        )}
      </div>

    </div>
  );
};

export default NewsSection;
