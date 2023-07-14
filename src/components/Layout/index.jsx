import { Outlet } from "react-router-dom";
import { categories } from "../../data/Categories";
import { desert } from "../../data/Desert";
import { drink } from "../../data/Drink";
import { productCombo } from "../../data/ProductsCombo";
import { products } from "../../data/ProductsPizza";
import { souse } from "../../data/Souse";
import { sushi } from "../../data/Sushi";
import Combo from "../Combo";
import Deserti from "../Deserti";
// import { products } from "../../data/ProductsPizza";

import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Napitki from "../Napitki";
import Pitsa from "../Pitsa";
import Sushi from "../Sushi";
import Zakuski from "../Zakuski";

import "./Layout.scss";

const Layout = () => {
  return (
    <div className="container p-0">
      <header>
        <Header />
      </header>
      <main>
        <section>
          <ul className="d-flex">
            {categories.map((c, i) => (
              <Hero key={i} {...c} />
            ))}
          </ul>
        </section>

        <Outlet />
        <h2>Пицца</h2>
        <ul className="prduct_card">
          {products.map((prod) => (
            <Pitsa key={prod.id} {...prod} />
          ))}
        </ul>
        <h2 className="pt-5">Суши</h2>
        <ul className="prduct_card">
          {sushi.map((s) => (
            <Sushi key={s.id} {...s} />
          ))}
        </ul>
        <h2 className="pt-5">Закуски</h2>
        <ul className="prduct_card">
          {souse.map((z) => (
            <Zakuski key={z.id} {...z} />
          ))}
        </ul>

        <h2 className="pt-5">Десерты</h2>
        <ul className="prduct_card">
          {desert.map((d) => (
            <Deserti key={d.id} {...d} />
          ))}
        </ul>

        <h2 className="pt-5">Напитки</h2>
        <ul className="prduct_card">
          {drink.map((n) => (
            <Napitki key={n.id} {...n} />
          ))}
        </ul>
        <h2 className="pt-5">Комбо</h2>
        <ul className="prduct_card">
         {productCombo.map((c)=><Combo key={c.id} {...c} />)}
        </ul>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
