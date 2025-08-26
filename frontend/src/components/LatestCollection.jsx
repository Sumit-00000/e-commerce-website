import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setlatestProducts] = useState([]);

  useEffect(() => {
    setlatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ispudj sjwkd djcn ejfne ewde ejfd efnje efnje ejfjek ejfnej
          efjnekjfn
        </p>
      </div>
      {/* {Rendering Products} */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          // Corrected map function with 'return'
          latestProducts.map((item, index) => {
            return (
              <ProductItem
                key={index} // Use item._id as key if it's unique, otherwise fallback to index
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default LatestCollection;
