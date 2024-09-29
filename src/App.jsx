import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Products, Error } from "./pages";
import SingleProduct from "./components/SingleProduct";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/create-product",
        element: <AddProduct />,
      },
      {
        path: "/update-product/:id",
        element: <EditProduct />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
export default App;
