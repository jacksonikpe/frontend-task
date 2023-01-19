import { Route, Routes } from "react-router-dom";
import Login from "./routes/login/login.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
