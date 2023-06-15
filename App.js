import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Root from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
  {path:'/' , 
  element:<Root/>,
  errorElement:<ErrorPage/>,
children:[
  {path:'/', element:<Home/>},
  {path:'about', element:<About/>},
  {path:'about/:ProductId', element:<ProductDetails/>},
  
]
},
 
]);

function App() {

 
  return <RouterProvider router={router}/>;
}

export default App;
