import Products from "./products/view/Products";
import getProductsData from "./products/model/productsData";
import CategoryFilterPills from "./categories/view/CategoryFilterPills";
import getCategoriesData from "./categories/model/categoriesData";

interface SearchParams {
  category?: string;
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const selectedCategory = searchParams.category ?? "";
  const products = await getProductsData(
    selectedCategory === "all" ? "" : selectedCategory
  );
  const categories = await getCategoriesData();

  return (
    <main className="space-y-12">
      <section className="sticky top-20 md:top-8 bg-[#3A223E] md:bg-transparent flex items-center justify-center mt-6 space-x-6">
        <span className="hidden md:inline-block"> Filter by Category: </span>
        <CategoryFilterPills categories={categories} />
      </section>

      <section>
        <Products products={products} />
      </section>
    </main>
  );
}
