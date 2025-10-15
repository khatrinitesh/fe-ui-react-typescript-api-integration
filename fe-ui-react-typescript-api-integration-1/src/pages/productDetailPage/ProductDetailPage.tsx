import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";
import type { Comment } from "../../interface";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery<Comment, Error>({
    queryKey: ["comment", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Comment>(`/comments/${id}`);
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) return <div>Loading detail...</div>;
  if (error) return <div>Error fetching product detail</div>;
  if (!data) return <div>No product found</div>;
  return (
    <div className="container">
      <h2> ID #{data.id}</h2>
      <p> body - {data.body}</p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
    </div>
  );
};

export default ProductDetailPage;
