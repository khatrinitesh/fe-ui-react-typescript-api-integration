import { useQuery } from "@tanstack/react-query";
import { fakeStoreInstance } from "../../api/axiosInstance";
import type { Product } from "../../interface";

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await fakeStoreInstance.get<Product[]>("/products");
  return data;
};

const AboutPage = () => {
  const { data, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div>Loading products...</div>;

  if (error) return <div>Error loading products: {error.message}</div>;
  return (
    <div className="container">
      <h1>About Page - Product List from FakeStore API</h1>
      <ul>
        {data?.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
