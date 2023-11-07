import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Error from "./routes/Error.jsx";
import App from "./App.jsx";

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>

  </>,
);

