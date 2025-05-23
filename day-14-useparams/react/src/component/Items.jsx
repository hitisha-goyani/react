import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import products from "../utilities/data";

const Items = () => {
  const [data, setData] = useState({});

  const { userId } = useParams();

  useEffect(() => {
    const newData = products.find((ele) => ele.id == userId);
    setData(newData);
  }, [userId]);

  // if(data.images)
  // {
  //  console.log(data.images[0])
  // //  data.images = data.images[0];
  // //  setData(data)
  // // }
  // console.log(data.reviews)

  return (
    <div className="my-5 flex justify-between">
      <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={data.thumbnail} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.description}
          </p>
          <div className="flex justify-between">
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ⭐ {data.rating}
            </h4>

            <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white bg-blue-600 p-2 rounded-3xl">
              $ {data.price}
            </h2>
          </div>
           <h4 class="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">Stock : {data.stock}</h4>
        </div>
      </div>
<div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Comments for {data.title}</h2>
      <ul className="space-y-4">
        {
        data?.reviews.map((review, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded shadow">
            <p className="text-gray-700 italic">"{review.comment}"</p>
            <p className="text-sm text-gray-500 mt-1">— {review.reviewerName}</p>
          </li>
        ))}
      </ul> 
    </div>
    </div>
    
  );
};

export default Items;
