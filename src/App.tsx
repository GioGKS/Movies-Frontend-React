import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
import routes from "./route-config";
import configureValidations from './Validations';

configureValidations();

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
      <footer className="bd-footer py-4 mt-4 bg-light">
        <div className="container">
            Copyrights By GIO GKS {new Date().getFullYear().toString()}
        </div>

      </footer>
    </BrowserRouter>
  );
}

export default App;
