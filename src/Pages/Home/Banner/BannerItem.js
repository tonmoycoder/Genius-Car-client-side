import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="h-full w-full rounded-xl" alt={`slide${id}`} />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-28 top-1/2 text-white">
        <h1 className="text-6xl font-bold line_height_header ubuntu">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
        <p className="leading-8 text-lg my-7 let tracking-wide">
          There are many variations of passages of available, <br /> but the majority have suffered
          alteration in some form
        </p>
        <div>
          <button className="mr-5 btn btn-outline  bg-orange-600 border-0 text-white">
            Discover More
          </button>
          <button className="btn btn-outline btn-warning text-white border-white">
            Latest Project
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3 ">
        <a href={`#slide${prev}`} className="btn custom_btn btn-circle mr-5">
          <AiOutlineArrowLeft className="icon_size"></AiOutlineArrowLeft>
        </a>
        <a href={`#slide${next}`} className="btn btn-circle custom_btn2">
          <AiOutlineArrowRight className="icon_size"></AiOutlineArrowRight>
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
