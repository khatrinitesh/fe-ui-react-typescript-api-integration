import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoutesPath from "./routes/RoutesPath";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesPath />
    </QueryClientProvider>
  );
}

export default App;
