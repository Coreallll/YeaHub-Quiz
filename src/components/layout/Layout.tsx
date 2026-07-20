import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import {Outlet} from "react-router-dom";
import {FiltersProvider} from "../../context/FiltersProvider.tsx";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <FiltersProvider>
            <Outlet />
          </FiltersProvider>
        </div>
      </main>
      <Footer />
    </>
  )
}