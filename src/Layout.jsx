import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import "../src/components/NavBar.css";
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
