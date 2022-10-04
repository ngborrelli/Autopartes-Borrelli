import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import CerrarCompra from "../components/CerrarCompra";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route path="/categoria/:catid" element={<ItemListContainer />} />
            <Route path="/autoparte/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/:currentCat" element={<Cart />} />
            <Route path="/cerrarCompra" element={<CerrarCompra />} />
        </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRouter;