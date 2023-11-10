import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Error from "./routes/Error.jsx";
import App from "./App.jsx";
import Sobre from "./routes/Sobre.jsx";
import Saude from "./routes/Saude.jsx";
import Mapa from "./routes/Mapa.jsx";

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/sobre', element: <Sobre />},
      {path: '/saude', element: <Saude />},
      {path: '/mapa', element: <Mapa />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>

  </>,
);

