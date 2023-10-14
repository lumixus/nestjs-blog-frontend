import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";
import ErrorPage from "../ErrorPage";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/blog/:id",
                element: <BlogDetail />
            }
        ]
        
    },



]);


export default router;