import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layouts/Layout.jsx";

// landing pages
import ArticlePage from "./pages/LandingPages/ArticlePage.jsx";
import HomePage from "./pages/LandingPages/HomePage.jsx";
import AboutPage from "./pages/LandingPages/AboutPage.jsx";
import ArticleListPage from "./pages/LandingPages/ArticleListPage.jsx";

// auth pages
import AuthLayout from "./layouts/AuthLayout.jsx";
import SignInPage from "./pages/AuthPages/SignInPage.jsx";
import SignUpPage from "./pages/AuthPages/SignUpPage.jsx";

// dashboard
import DashLayout from "./layouts/DashLayout.jsx";
import DashboardPage from "./pages/DashboardPages/DashboardPage.jsx";
import ReportsPage from "./pages/DashboardPages/ReportsPage.jsx";
import UsersPage from "./pages/DashboardPages/UsersPage.jsx";

import NotFoundPage from "./pages/NotFoundPage.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "articles", element: <ArticleListPage /> },
      { path: "articles/:name", element: <ArticlePage /> },
    ],
  },

  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "signin", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
    ],
  },

  {
    path: "dashboard",
    element: <DashLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "", element: <DashboardPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "users", element: <UsersPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;