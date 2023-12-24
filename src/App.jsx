import { Fragment} from "react";

import "./App.css"

import { AuthContextProvider } from "./components/store/auth-context";

import Header from "./components/Header/Header";
import QrFields from "./components/QrField/QrFields";
import Footer from "./components/Footer/Footer";



const App = () => {

      

    return (
        <Fragment>

            <AuthContextProvider>
                <Header />
                <QrFields />
                <Footer />

            </AuthContextProvider>
            
        </Fragment>
    )
}

export default App;