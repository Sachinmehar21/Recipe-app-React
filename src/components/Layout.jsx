import Footer from "./Footer";
import Home from "./Home";
import Recipes from "./Recipes";

const Layout = () => {
    return (
        <>
            <Home />
            <Recipes class="mt-10" />
            <Footer />
        </>
    );
};

export default Layout;
