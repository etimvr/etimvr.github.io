import { MainPage } from "./MainPage/MainPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Esti } from "./Cases/Esti/Esti.jsx";
import { routes } from "./routes.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.esti} element={<Esti />} />
        <Route path={routes.prequel} element={<></>} />
        <Route path={routes.admin} element={<></>} />
        <Route path={routes.otherWorks} element={<></>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
