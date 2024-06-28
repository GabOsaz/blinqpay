import CategoryFilterLink from "./CategoryFilterLink";

function CategoryFilterPills({ categories }: { categories: string[] }) {
  return (
    <ul className="flex flex-wrap gap-4 items-center justify-center space-x-6">
      <li className="rounded-full border border-gray-400 px-4 py-1">
        <CategoryFilterLink href={`?category=all`}>All</CategoryFilterLink>
      </li>
      {categories.map((category: string) => (
        <li
          key={category}
          className="rounded-full border border-gray-400 px-4 py-1"
        >
          <CategoryFilterLink href={`?category=${category}`}>
            {category}
          </CategoryFilterLink>
        </li>
      ))}
    </ul>
  );
}

export default CategoryFilterPills;
