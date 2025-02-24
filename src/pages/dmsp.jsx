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
      { id: 1, name: "Lốp RADAR 255/55R17 11…RADAR 255/55R17 11…", price: "2.260.000đ", img: img1 },
      { id: 2, name: "Lốp RADAR 255/55R17 10…ốp RADAR 255/55R17 10…", price: "2.750.000đ", img: "tire2.jpg" },
      { id: 3, name: "Lốp RADAR 255/55R17 10…ốp RADAR 255/55R17 10…", price: "1.880.000đ", img: "tire3.jpg" },
      { id: 4, name: "Lốp RADAR 255/55R17 DH…ốp RADAR 255/55R17 10…", price: "2.080.000đ", img: "tire4.jpg" },
    ],
  },
  {
    title: "ẮC QUY",
    products: [
      { id: 5, name: "Ắc quy PLATINUM N200", price: "5.150.000đ", img: "battery1.jpg" },
      { id: 6, name: "Ắc quy PLATINUM 200A", price: "2.500.000đ", img: "battery2.jpg" },
      { id: 7, name: "Ắc quy PLATINUM DF 64…", price: "1.180.000đ", img: "battery3.jpg" },
      { id: 8, name: "Ắc quy PLATINUM 150G…", price: "2.400.000đ", img: "battery4.jpg" },
    ],
  },
  {
    title: "DẦU NHỚT",
    products: [
      { id: 9, name: "Dầu nhớt CASTROL 20W50", price: "540.000đ", img: "oil1.jpg" },
      { id: 10, name: "Dầu nhớt CASTROL 5W40", price: "680.000đ", img: "oil2.jpg" },
      { id: 11, name: "Dầu nhớt CASTROL 10W40", price: "680.000đ", img: "oil3.jpg" },
      { id: 12, name: "Dầu nhớt CASTROL 5W30", price: "1.000.000đ", img: "oil4.jpg" },
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
    <div className="container mx-auto p-20 bg-gray-300">
      {categories.map((category, index) => (
        <div key={index} className="mb-8 bg-blue-500">
          <h2 className="text-2xl font-bold mb-7 border-l-4 border-red-500 pl-6">
            {category.title}
          </h2>
          <Slider {...settings}>
            {category.products.map((product) => (
              <div key={product.id} className="p-2 w-auto h-auto ">
                <div className="border rounded-lg shadow-lg p-3 w-full h-full flex flex-col items-center">
                  <img
                    src={product.img}
                    alt={product.name}
                  />
                  <h3 className="text-sm font-semibold text-center h-[50px] overflow-hidden leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-red-500 font-bold text-center mt-auto">{product.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
