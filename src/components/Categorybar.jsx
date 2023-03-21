import { useRouter } from "next/router";
import React from "react";

const Categorybar = () => {
  const category = [
    {
      id: 1,
      name: "Business",
    },
    {
      id: 2,
      name: "Entertainment",
    },
    {
      id: 3,
      name: "General",
    },
    {
      id: 4,
      name: "Health",
    },
    {
      id: 5,
      name: "Science",
    },
    {
      id: 6,
      name: "Sports",
    },
    {
      id: 7,
      name: "Technology",
    },
  ];

  const router = useRouter();

  return (
    <div className="flex flex-col items-center mt-5 mx-20">
      <div className="flex gap-5 font-poppins">
        {category.map((item, i) => (
          <span
            key={item.id}
            onClick={() => router.push(`/category/${item.name}`)}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="bg-black h-[1px] w-full mt-5 mb-8"></div>
    </div>
  );
};

export default Categorybar;
