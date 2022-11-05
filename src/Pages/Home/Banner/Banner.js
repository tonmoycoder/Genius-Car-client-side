import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" alt="img 1" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3 ">
            <a href="#slide6" className="btn custom_btn btn-circle mr-5">
              <AiOutlineArrowLeft className='icon_size'></AiOutlineArrowLeft>
            </a>
            <a href="#slide2" className="btn btn-circle custom_btn2">
              <AiOutlineArrowRight className='icon_size'></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" alt="img 2" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3 ">
            <a href="#slide1" className="btn custom_btn btn-circle mr-5">
              <AiOutlineArrowLeft className='icon_size'></AiOutlineArrowLeft>
            </a>
            <a href="#slide3" className="btn btn-circle custom_btn2">
              <AiOutlineArrowRight className='icon_size'></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" alt="img 3" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3 ">
            <a href="#slide2" className="btn custom_btn btn-circle mr-5">
              <AiOutlineArrowLeft className='icon_size'></AiOutlineArrowLeft>
            </a>
            <a href="#slide4" className="btn btn-circle custom_btn2">
              <AiOutlineArrowRight className='icon_size'></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" alt="img 4" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3 ">
            <a href="#slide3" className="btn custom_btn btn-circle mr-5">
              <AiOutlineArrowLeft className='icon_size'></AiOutlineArrowLeft>
            </a>
            <a href="#slide5" className="btn btn-circle custom_btn2">
              <AiOutlineArrowRight className='icon_size'></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl" alt="img 5" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3 ">
            <a href="#slide4" className="btn custom_btn btn-circle mr-5">
              <AiOutlineArrowLeft className='icon_size'></AiOutlineArrowLeft>
            </a>
            <a href="#slide6" className="btn btn-circle custom_btn2">
              <AiOutlineArrowRight className='icon_size'></AiOutlineArrowRight>
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl" alt="img 6" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-3 ">
            <a href="#slide5" className="btn custom_btn btn-circle mr-5">
              <AiOutlineArrowLeft className='icon_size'></AiOutlineArrowLeft>
            </a>
            <a href="#slide1" className="btn btn-circle custom_btn2">
              <AiOutlineArrowRight className='icon_size'></AiOutlineArrowRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
