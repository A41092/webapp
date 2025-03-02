import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
const Lopoto = () => {
  const products = [
    {
      name: "LỐP ROADX 255/55R18 105V DU02",
      price: "3.250.000₫",
      img: img1,
    },
    {
      name: "LỐP ROADX 245/40ZR18 97Y DU01",
      price: "2.630.000₫",
      img: img2,
    },
    {
      name: "LỐP ROADX 235/60R18 107H DHT01",
      price: "1.960.000₫",
      img: "link3",
    },
    {
      name: "LỐP ROADX 225/45ZR18 95W DU01",
      price: "1.450.000₫",
      img: "link4",
    },
    {
      name: "LỐP ROADX 265/65R17 112S DHT01",
      price: "2.260.000₫",
      img: "link5",
    },
    {
      name: "LỐP ROADX 245/65R17 107S DHT01",
      price: "2.750.000₫",
      img: "link6",
    },
    {
      name: "LỐP ROADX 225/65R17 102S DHT01",
      price: "1.880.000₫",
      img: "link7",
    },
    { name: "LỐP ROADX 225/60R17 DH02", price: "2.080.000₫", img: "link8" },
  ];
  return (
    <>
      <div className="w-11/12 bg-gray-100 mx-auto h-auto rounded-lg container flex shadow-lg mb-5 gap-2">
        {/* Sidebar */}
        <div className="flex flex-col w-1/5 p-4 mt-5 mr-5 mb-5 font-semibold rounded-l-l bg-gray-400">
          <h2 className="mx-auto mb-2 font-bold ">Bộ lọc - Tìm kiếm</h2>
          <div className="flex  gap-1">
            <button className="bg-green-600 w-1/2 rounded-xl size-10">Theo kích thước</button>
            <button className="bg-blue-600 w-1/2 rounded-xl size-10 ">Theo dòng xe</button>

          </div>
          <div className=" bg-red-400 h-4/5 mt-3">
            <div className=" bg-blue-300 m-2">
              <form className="flex flex-col">
                <span className=" p-2 ">Chiều rộng</span>
                <input
                  type="text"
                  className=" w-max ml-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập..."
                />
                <span className=" p-2 "> Chiều cao</span>
                <input
                  type="text"
                  className=" w-max ml-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập..."
                />
                <span className=" p-2 ">Vành(inch)</span>
                <input
                  type="text"
                  className=" w-max ml-2 mb-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập..."
                />
              </form>
            </div>
            <div className=" bg-blue-300 m-2">
              <form className="flex flex-col">
                <span className=" p-2 ">Hãng lốp</span>
                <input
                  type="text"
                  className=" w-max ml-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập..."
                />
                <span className=" p-2 ">Loại lốp</span>
                <input
                  type="text"
                  className=" w-max ml-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập..."
                />
                <span className=" p-2 ">Năm SX</span>
                <input
                  type="text"
                  className=" w-max ml-2 mb-2  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập..."
                />
              </form>
            </div>
            <div className=" bg-blue-300 m-2 p-2">
              <button className="bg-blue-500  font-bold p-2 items-center w-full rounded-lg" >Lọc</button>
            </div>
          </div>
        </div>

        {/* Nội dung chính */}
        <div className="flex flex-col gap-6 flex-1  mt-5  mb-5 text-white font-medium rounded-r-lg">
          <div className="bg-blue-400 h-12"> thanh tiện ích</div>
          <div className="bg-yellow-400 h-auto">
            <div className="container mx-auto p-4">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Danh sách sản phẩm
              </h2>
              <div className="grid grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-4"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-semibold mt-2">
                      {product.name}
                    </h3>
                    <p className="text-blue-600 font-bold text-xl">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lopoto;
