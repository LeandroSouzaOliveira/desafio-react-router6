import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SectionProduct from "../../components/SectionProduct";

export default function Product() {
  return (
    <>
      <Header />
      <main>
        <section>
          <SectionProduct />
          <Outlet />
        </section>
      </main>
    </>
  );
}
