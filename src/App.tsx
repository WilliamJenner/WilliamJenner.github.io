import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import "./styles/index.css";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={"blog"}>
              <Route path={":id"} element={<BlogPage />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </HashRouter>
  );
};

export default App;
