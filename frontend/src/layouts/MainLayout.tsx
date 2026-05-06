import { Outlet } from "react-router-dom";
import Nav from "../components/ui/Nav";
import Footer from "../components/ui/Footer";


const MainLayout = () => {
  return (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}
export default MainLayout;