
import "./App.css"

import Header from "./components/Header/Header";
import QrFields from "./components/QrField/QrField/QrFields";
import Footer from "./components/Footer/Footer";

// import SignupForm from "./components/Authentication/SignupForm";
// import LoginForm from "./components/Authentication/LoginForm";

const App = () => {

    return (
        <>
            <Header />
            <QrFields />
            <Footer />
        </>
    )
}

export default App;