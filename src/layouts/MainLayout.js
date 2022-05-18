import { Header } from "../components/Header/index";
import { Footer }  from "../components/Footer/index";

export const MainLayout = (props) => {
    return (
        <div className="flex flex-col w-full">
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}