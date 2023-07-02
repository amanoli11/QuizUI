import { PageRoutes } from "./routes/pageRoutes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const routes = PageRoutes();
  return <RouterProvider router={routes} />;
};

export default App;
