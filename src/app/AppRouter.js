import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route path="/categoria/:catid" element={<ItemListContainer />} />
            <Route path="/articulo/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
        </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRouter;