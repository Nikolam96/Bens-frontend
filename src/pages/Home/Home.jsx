import { Outlet } from "react-router-dom";
import AddProduct from "../../components/AddProduct";

const Home = () => {
  return (
    <main className="section-center">
      <Outlet />
    </main>
  );
};
export default Home;
