import { NavLink, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function Layout() {
  const linkClass = ({ isActive }) =>
    "px-3 py-2 rounded" + (isActive ? " bg-black text-white" : " hover:bg-gray-200");

  return (
    <div style={{ minHeight: "100vh", padding: 16 }}>
      <header style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
