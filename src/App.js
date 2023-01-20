import { Route, Routes } from "react-router-dom";
import Login from "./routes/login/login.component";
import DashboardPage from "./routes/dashboard-page/dashboard-page.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
