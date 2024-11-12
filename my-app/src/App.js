import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/explore';
import AppTeams from './components/teams';
import AppTestimonials from './components/testimonials';
import AppFooter from './components/footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login';
import Dashboard from './components/dashboard';
import AuthProvider from './components/hooks/AuthProvider';
import PrivateRoute from './components/router/route';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
     {/*
      <header id='header'> 
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
      */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
