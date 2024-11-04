"use client";
import style from "@/styles/menu.module.css";
import Footer from "@/elements/menu/Footer";
import Header from "@/elements/menu/Header";
import { useState } from "react";
import General from "@/elements/menu/General";
import Details from "@/elements/menu/Details";

const MenuPage = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div className="d-flex flex-column">
      <Header />
      <div className={`d-flex p-4 flex-column ${style.content} `}>
        {selected ? <Details /> : <General />}
      </div>
      <Footer selected={selected} />
    </div>
  );
};

export default MenuPage;
