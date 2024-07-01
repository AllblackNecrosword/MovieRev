import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";


const Detailpage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [button, setbutton] = useState(false);
  const [rating, setRating] = useState(0);
  const fetchdata = async () => {
    const response = await axios.get(
      `http://localhost:5000/movie/getsinglemovie/${id}`
    );
    setData(response.data);
  };
  const handlecomment = () => {
    setbutton(true);
  };

  const handleCancel = () => {
    setbutton(false);
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };



  return (
    <div className="flex flex-col lg:flex-row bg-neutral-900 text-white p-4 lg:p-8 space-y-4 lg:space-y-0 lg:space-x-8">
      <div className="flex-shrink-0 lg:w-1/3">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-grow lg:w-2/3 space-y-4">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <div className="flex items-center space-x-4">
          <ReactStars size={34} edit={false} value={3.5} />
          <span className="text-gray-400">{data.year}</span>
        </div>
        <p className="text-gray-300">{data.description}</p>
        <div className=" mt-7">
          <div className="border-t-2 flex justify-center">
            <h1 className="mt-9 text-2xl ">1245 Comments</h1>
          </div>

          <div className="mt-5 flex items-center">
            <input
              placeholder="  Add a comment"
              className="w-5/12 h-12 rounded-xl"
              onClick={handlecomment}
            />
            <div className="items-center mx-2 pb-2">
              <ReactStars size={60} onChange={ratingChanged} value={rating} />
            </div>

            {button && (
              <div className="mt-2 ">
                <button className="bg-green-800 p-3.5 rounded-xl mx-3 hover:shadow-2xl">
                  Comment
                </button>
                <button
                  className="bg-red-800 p-3.5 rounded-xl mx-3 hover:shadow-2xl"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Reviews */}
        <div className="bg-black w-full p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-medium">
              Koshish{" "}
              <span className="mx-4 text-sm text-gray-400"> 2018/2/12</span>
            </h2>
            <div>react Stars</div>
          </div>
          <p className="py-2">
            Dear stranger.... You have a great taste in music..... See you again
            after 20 yrs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
