import {createBrowserRouter,redirect} from "react-router-dom";
import { getCultivations,getCultivation } from "./utils/fetch";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import CultivationsList from "./pages/cultivation/CultivationsList";
import Cultivation from "./pages/cultivation/Cultivation";

async function fetchCultivations(){
    const result = await getCultivations();
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}
async function fetchCultivation(id){
    const result = await getCultivation(id);
    if(result.error){
        return redirect("/register");
    }
    return result.data;
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <h2>Bienvenido a Cultivos</h2>
        },
        {
            path: "/cultivations",
            element: <CultivationsList />,
            loader: () => fetchCultivations()
        },
        {
            path: "/cultivations/:id",
            element: <Cultivation />,
            loader: ({params}) => fetchCultivation(params.id)
        },
      ]
    },
    {
        path: "/register",
        element: <Register />
    }
    
  ]);

export default router;