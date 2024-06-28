
import { ProductT, ProductsT } from "../types";
import ProductItem from "./ProductItem";

function Products({ products }: ProductsT) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-8">
      {products.map((product: ProductT) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
}

export default Products;
