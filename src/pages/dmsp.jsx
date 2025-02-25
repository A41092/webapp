import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
const categories = [
  {
    title: "LỐP Ô TÔ",
    products: [
      {
        id: 1,
        name: "Lốp RADAR 255/55R17 11…RADAR 255/55R17 11…",
        price: "2.260.000đ",
        img: img1,
      },
      {
        id: 2,
        name: "Lốp RADAR 255/55R17 10…ốp RADAR 255/55R17 10…",
        price: "2.750.000đ",
        img: "tire2.jpg",
      },
      {
        id: 3,
        name: "Lốp RADAR 255/55R17 10…ốp RADAR 255/55R17 10…",
        price: "1.880.000đ",
        img: "tire3.jpg",
      },
      {
        id: 4,
        name: "Lốp RADAR 255/55R17 DH…ốp RADAR 255/55R17 10…",
        price: "2.080.000đ",
        img: "tire4.jpg",
      },
    ],
  },
  {
    title: "ẮC QUY",
    products: [
      {
        id: 5,
        name: "Ắc quy PLATINUM N200",
        price: "5.150.000đ",
        img: "battery1.jpg",
      },
      {
        id: 6,
        name: "Ắc quy PLATINUM 200A",
        price: "2.500.000đ",
        img: "battery2.jpg",
      },
      {
        id: 7,
        name: "Ắc quy PLATINUM DF 64…",
        price: "1.180.000đ",
        img: "battery3.jpg",
      },
      {
        id: 8,
        name: "Ắc quy PLATINUM 150G…",
        price: "2.400.000đ",
        img: "battery4.jpg",
      },
    ],
  },
  {
    title: "DẦU NHỚT",
    products: [
      {
        id: 9,
        name: "Dầu nhớt CASTROL 20W50",
        price: "540.000đ",
        img: "oil1.jpg",
      },
      {
        id: 10,
        name: "Dầu nhớt CASTROL 5W40",
        price: "680.000đ",
        img: "oil2.jpg",
      },
      {
        id: 11,
        name: "Dầu nhớt CASTROL 10W40",
        price: "680.000đ",
        img: "oil3.jpg",
      },
      {
        id: 12,
        name: "Dầu nhớt CASTROL 5W30",
        price: "1.000.000đ",
        img: "oil4.jpg",
      },
    ],
  },
];

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="container mx-auto p-10 bg-gray-100">
      <section className="w-full h-80 bg-red-500 border-spacing-3 mb-5">
        <div className="bg-blue-400 w-full h-10"><h2>banner</h2></div>
        <div className="w-full h-70 bg-slate-500">ảnhbanner</div>
      </section>
      <section className="w-full h-80 bg-red-500 border-spacing-3 mb-5  ">
        <div className="bg-blue-400 w-full h-10"><h2>Lốp ô tô</h2></div>
      </section>
      <section className="w-full h-80 bg-red-500 border-spacing-3 mb-5 ">
      <div className="bg-blue-400 w-full h-10"><h2>Ắc quy ô tô</h2></div>
      </section>
      <section className="w-full h-80 bg-red-500 border-spacing-3 mb-5 ">
      <div className="bg-blue-400 w-full h-10"><h2>Dầu nhớt</h2></div>
      </section>
      <section className="w-full h-80 bg-red-500 border-spacing-3 mb-5 ">
      <div className="bg-blue-400 w-full h-10"><h2>Phụ kiện</h2></div>
      </section>
    </div>
  );
};

export default ProductSlider;
