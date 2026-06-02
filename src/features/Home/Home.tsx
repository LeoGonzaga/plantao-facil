import { JSX } from "react";
import "./styles.scss";

import Header from "@src/components/Header";
import Banner from "@src/components/Banner";
import Card from "@src/components/Card";
import Footer from "@src/components/Footer";

export const Home = (): JSX.Element => {
  return (
    <section className="container__home">
      <div className="container__home__limit">
        <Header />
        <div className="container__home__content">
          <div>
            <Banner />
            <Card />
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};
