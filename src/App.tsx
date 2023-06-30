import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
import routes from "./route-config";
import configureValidations from "./Validations";
import { claim } from "./auth/auth.models";
import { useState } from "react";
import AuthenticationContext from "./auth/AuthenticationContext";

configureValidations();

function App() {
  const [claims, setClaims] = useState<claim[]>([
    {name: 'email', value: 'gio97@gmail.com'}
  ]);

  function isAdmin(){
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1
  }

  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
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
      </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
