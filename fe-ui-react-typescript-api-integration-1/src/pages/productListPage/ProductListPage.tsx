import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axiosInstance";
import type { Comment } from "../../interface";

const fetchComments = async (): Promise<Comment[]> => {
  const { data } = await axiosInstance.get<Comment[]>("/comments");
  return data;
};

const ProductListPage = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<Comment[], Error>({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div className="container">
      <ul>
        {data.slice(0, 10).map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> - {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
