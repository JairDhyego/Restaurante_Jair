import { useState } from "react";
import opcoes from "./ordenarLista.json";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Iprops {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

const Ordenador = ({ ordenador, setOrdenador }: Iprops) => {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: ordenador !== "",
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenador Por"}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Ordenador;
