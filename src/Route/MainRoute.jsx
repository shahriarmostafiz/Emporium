import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import Details from "../Components/Details/Details";
import Login from "../Components/AuthPages/Login";
import SignUp from "../Components/AuthPages/SignUp";
import Users from "../Components/Users/Users";

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/allcoffee')
    }, {
        path: '/addcoffee',
        element: <AddCoffee></AddCoffee>
    }, {
        path: '/updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/allcoffee/${params.id}`)
    }, {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/allcoffee/${params.id}`)
    }, {
        path: '/login',
        element: <Login></Login>
    }, {
        path: '/register',
        element: <SignUp></SignUp>
    }, {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
    }
])

export default MainRoute;