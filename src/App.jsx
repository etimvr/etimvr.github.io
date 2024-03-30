import { MainPage } from "./MainPage/MainPage.jsx";
import { Route, Routes } from "react-router-dom";
import { Esti } from "./Cases/Esti/Esti.jsx";
import { routes } from "./routes.js";
import { Prequel } from "./Cases/Prequel/Prequel.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.esti} element={<Esti />} />
        <Route path={routes.prequel} element={<Prequel />} />
        <Route path={routes.admin} element={<></>} />
        <Route path={routes.otherWorks} element={<></>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
