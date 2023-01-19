// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//ℹ️ import pages
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import PortalPage from "./pages/PortalPage";
import ProfilePage from "./pages/ProfilePage";
import MiamiPage from "./pages/MiamiPage";
import ChicagoPage from "./pages/ChicagoPage";
import NewYorkPage from "./pages/NewYorkPage";
import SingleCafe from "./pages/SingleCafe";
import AllPage from "./pages/AllPage";
import ProfileView from "./pages/ProfileView";

//ℹ️ import components
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <IsAnon>
              <HomePage />
            </IsAnon>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignUpPage />
            </IsAnon>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <IsAnon>
              <LogInPage />
            </IsAnon>
          }
        ></Route>
        <Route
          path="/portal"
          element={
            <IsPrivate>
              <PortalPage />
            </IsPrivate>
          }
        ></Route>
        {/* Route to authenticated users profile page */}
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        ></Route>
        {/* Route to display cafes in Miami */}
        <Route
          path="/cafes/miami"
          element={
            <IsPrivate>
              <MiamiPage />
            </IsPrivate>
          }
        ></Route>
        {/* Route to display cafes in Chicago */}
        <Route
          path="/cafes/chicago"
          element={
            <IsPrivate>
              <ChicagoPage />
            </IsPrivate>
          }
        ></Route>
        {/* Route to display cafes in New York */}
        <Route
          path="/cafes/new-york"
          element={
            <IsPrivate>
              <NewYorkPage />
            </IsPrivate>
          }
        ></Route>
        {/* Route to display all cafes */}
        <Route
          path="/cafes/all"
          element={
            <IsPrivate>
              <AllPage />
            </IsPrivate>
          }
        ></Route>
        {/* Route to single cafe display page */}
        <Route
          path="/cafes/:id"
          element={
            <IsPrivate>
              <SingleCafe />
            </IsPrivate>
          }
        ></Route>
        {/* Route to view users profile */}
        <Route
          path="/users/:id"
          element={
            <IsPrivate>
              <ProfileView />
            </IsPrivate>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
