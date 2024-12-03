import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import AppAbout from "./components/about";
import AppServices from "./components/services";
import AppTeams from "./components/teams";
import AppTestimonials from "./components/testimonials";
import AppFooter from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import AuthProvider from "./components/hooks/AuthProvider";
import PrivateRoute from "./components/router/route";
import AppExplore from "./components/explore";
import AppHeader from "./components/header";
import AppHero from "./components/hero";
import ScentQuiz from "./components/ScentQuiz"
import RecSystem from "./components/RecSystem";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route
              path="/"
              element={
                <>
                  <header id="header">
                    <AppHeader />
                  </header>
                  <main>
                    <AppHero />
                    <AppAbout />
                    <AppServices />
                    <ScentQuiz />
                    <RecSystem/>
                    <AppExplore />
                    <AppTeams />
                    <AppTestimonials />
                    
                  </main>
                  <footer id="footer">
                    <AppFooter />
                  </footer>
                </>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
