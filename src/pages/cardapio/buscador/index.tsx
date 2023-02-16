import React from "react";
import styles from "./styles.module.scss";
import { CgSearch } from "react-icons/cg";

interface props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({ busca, setBusca }: props) => {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
};

export default Buscador;
