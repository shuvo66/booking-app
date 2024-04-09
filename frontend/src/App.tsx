import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./layouts/layouts";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout childrend={<p className="bg-blue-800">hi</p>}></Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout
              childrend={<p className="bg-blue-800">search page</p>}
            ></Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
