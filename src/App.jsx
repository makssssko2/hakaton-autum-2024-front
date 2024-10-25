import {observer} from "mobx-react-lite";
import '/src/styles/base/main.scss';
import AppInitComponent from "./hoc/App/AppInitComponent.jsx";
import {BrowserRouter} from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <AppInitComponent />
        </BrowserRouter>
    )
}

export default App;
