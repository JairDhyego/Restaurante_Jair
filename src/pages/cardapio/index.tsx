import { useState } from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import Buscador from "./buscador";
import Filtros from "./filtros";
import Ordenador from "./ordenador";
import Itens from "./itens";

const Cardapio = () => {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<null | number>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <img src={logo} alt="Logo do Site" />
      </nav>

      <header className={styles.header}>
        <div className={styles.header__text}> A casa do código e da massa!</div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
};

export default Cardapio;
