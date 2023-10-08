import classNames from "classnames";
import { ClassName } from "../../enums/ClassName";
import { WithChildren, WithClassName } from "../../types/types";
import Header from "../&organisms/header/Header";
import Footer from "../&organisms/footer/Footer";
import { BurgerMenu } from "../^molecules";
import AppRouter from "../AppRouter";

const Layout = ({ className, children }: WithClassName & WithChildren) => {
    return (
        <>
            <BurgerMenu />
            <Header />
            <main className={classNames(ClassName.Page, className)}>
                <AppRouter />
            </main>
            <Footer />
        </>
    );
};

export default Layout;