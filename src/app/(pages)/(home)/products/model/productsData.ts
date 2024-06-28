export default async function getProductsData(category: string) {
  const categoryFilter = category ? `/category/${category}` : '';
  const res = await fetch(`https://fakestoreapi.com/products/${categoryFilter}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await res.json());
}
