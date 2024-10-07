import { createBrowserRouter } from "react-router-dom";
import Layout from './layouts/Layout';
import NewProduct from "./views/New_Product";
import Products from "./views/Products";

export const router = createBrowserRouter(
 [
    {
        path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Products/>,
        },
        {
            path:'products/new',
            element: <NewProduct/>
        }

    ]
}
 ]
)