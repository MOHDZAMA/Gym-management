import "./App.css";
import Home from "./components/Home/Home";

import LoginForm from "./components/Login/Loginsignup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/Context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  // if (!user) {
  // return <Navigate to="/" />;
  // }
  // return children;
  // };
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<LoginForm />} path="/" />
          <Route element={<Home />} path="/home"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
