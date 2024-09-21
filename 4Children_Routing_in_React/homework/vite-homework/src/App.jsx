import './App.css'
import { AboutPage } from './components/aboutpage/AboutPage';
import { HomePage } from './components/homepage/HomePage';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ];
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
