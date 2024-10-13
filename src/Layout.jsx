import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "../src/css/NavBar.css";
import "./index.css";
import "./App.css";
export function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
