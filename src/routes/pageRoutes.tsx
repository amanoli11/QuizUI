import { createBrowserRouter } from "react-router-dom";
import Question from "../pages/question/question";
import AppLayout from "../base/components/appLayout/appLayout";
import PageNotFound from "../base/components/common/PageNotFound/PageNotFound";

export const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "*",
          element: <PageNotFound />,
        },
        {
          path: "question",
          element: <Question />,
        },
      ],
    },
  ]);

  return router;
};
