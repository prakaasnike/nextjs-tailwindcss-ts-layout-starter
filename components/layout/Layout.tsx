import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
