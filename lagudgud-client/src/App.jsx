import { createBrowserRouter, RouterProvider } from "react-router-dom";

// homePage structure
import Layout from './components/Layout';
import ArticlePage from './pages/ArticlePage';
import ArticleListPage from './pages/ArticleListPage.jsx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    path: "/",
    element: <Layout />,

    // error element
    errorElement: <NotFoundPage />,

    children: [
      {
        // path declaration
        path: '',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: '/articles',
        element: <ArticleListPage />
      },
      {
        path: '/articles/:name', // -->articles/learn-react
        element: <ArticlePage />
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;