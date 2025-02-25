import Header from "../component/header";
import Footer from "../component/footer";
import ProductSlider from "./dmsp";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";

export default function Layout() {
  const products = [
    {
      id: 1,
      name: "LỐP ROADX 255/55R18 105V DU02",
      price: "3.250.000đ",
      image: img1,
    },
    {
      id: 2,
      name: "LỐP ROADX 245/40ZR18 97Y DU01",
      price: "2.630.000đ",
      image: img2,
    },
    {
      id: 2,
      name: "LỐP ROADX 245/40ZR18 97Y DU01",
      price: "2.630.000đ",
      image: img2,
    },
    {
      id: 2,
      name: "LỐP ROADX 245/40ZR18 97Y DU01",
      price: "2.630.000đ",
      image: img2,
    },
    {
      id: 2,
      name: "LỐP ROADX 245/40ZR18 97Y DU01",
      price: "2.630.000đ",
      image: img2,
    },
    {
      id: 2,
      name: "LỐP ROADX 245/40ZR18 97Y DU01",
      price: "2.630.000đ",
      image: img2,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Container */}
      <div>
        <ProductSlider />
      </div>

      {/* <div className="flex-1 bg-gray-100 p-6 h-svh">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Sản phẩm bán chạy</h2>
                        <select className="border p-2 rounded">
                            <option>Sắp xếp</option>
                            <option>Theo giá</option>
                            <option>Theo thương hiệu</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                        {products.map((product) => (
                            <div key={product.id} className="border rounded-lg shadow-md p-4 ">
                                <img src={product.image} alt={product.name}  className="max-w-full max-h-60 object-contain mx-auto rounded" />
                                <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
                                <p className="text-blue-600 font-bold">{product.price}</p>
                                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Mua hàng
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-3">
        <Footer />
        Footer - Chân trang © 2025
      </footer>
    </div>
  );
}
