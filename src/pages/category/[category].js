import React from 'react'
import { fetchCategory, fetchHeadlines } from "@/utils/Requests";
import { useRouter } from 'next/router'
import CategoryPost from '@/components/CategoryPost';


const single = (props) => {
  var news = props.results.sources;
  console.log(news);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-black-600" >{news[0].category.toUpperCase()}</h1>
      <div className="mt-32 grid items-center justify-center">
        <div className="grid grid-cols-4  gap-x-5 gap-y-5">
          {news.map((item) =>
            (<CategoryPost key={item.id} item={item} />)
          )}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const categoryName = params.category;
  // const { params } = context;
  console.log(categoryName);
  const data = await fetchCategory(categoryName);
  // console.log(data);
  // const data = await fetchHeadlines();

  return {
    props: {
      results: data,
    },
  };
}

export async function getStaticPaths() {
  const categories = [
    { params: { category: 'Business' } },
    { params: { category: 'Entertainment' } },
    { params: { category: 'General' } },
    { params: { category: 'Health' } },
    { params: { category: 'Science' } },
    { params: { category: 'Technology' } },
  ];

  return {
    paths: categories,
    fallback: false,
  };
}


export default single