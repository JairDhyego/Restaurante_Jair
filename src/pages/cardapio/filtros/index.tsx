import React from "react";
import filtrosJson from "./filtros.json";
import styles from "./styles.module.scss";

import classNames from "classnames";

interface IOpcao {
  id: number;
  label: string;
}

interface IProps {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({ filtro, setFiltro }: IProps) => {
  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtrosJson.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filtro === opcao.id,
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
};

export default Filtros;
