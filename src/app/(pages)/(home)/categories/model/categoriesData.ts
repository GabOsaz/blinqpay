export default async function getCategoriesData() {
    const categories = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
  
    if (!categories.ok) {
      throw new Error("Failed to fetch categories");
    }
    return (await categories.json()) as string[];
  }