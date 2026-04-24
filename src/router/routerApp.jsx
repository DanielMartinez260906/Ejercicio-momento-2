import HomePage from "../pages/HomePage";
import FilosofiaPage from "../pages/FilosofiaPage";
import GaleriaPage from "../pages/GaleriaPage";
import ReservasPage from "../pages/ReservasPage";

export let routerApp = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/filosofia",
        element: <FilosofiaPage />
    },
    {
        path: "/galeria",
        element: <GaleriaPage />
    },
    {
        path: "/reservas",
        element: <ReservasPage />
    }
]