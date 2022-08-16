import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import HomePage from "./components/HomePage";
import "./styles/index.css";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={"/"}>
            <Route index element={<HomePage />} />
            <Route path={"blog"}>
              <Route path={":id"} element={<BlogPage />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
