import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";
import type { Post } from "../interface";

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await apiClient.get<Post[]>("/posts");
  return data;
};

const Home = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const handleRemove = (id: number) => {
    queryClient.setQueryData(["posts"], (oldData?: Post[]) =>
      oldData ? oldData.filter((post) => post.id !== id) : []
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;
  return (
    <div>
      <h2>Home</h2>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <strong>{post.body}</strong>{" "}
            <button onClick={() => handleRemove(post.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
