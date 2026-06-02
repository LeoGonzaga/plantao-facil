import { QueryClientProvider } from "@tanstack/react-query";
import Home from "./features/Home";
import "./styles.scss";
import { queryClient } from "./libs/react-query";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
