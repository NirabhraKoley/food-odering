import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./components/layout/AppLayout";
import { Success } from "./pages/Success";
import { Error } from "./pages/Error";
import { Cart } from "./components/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
