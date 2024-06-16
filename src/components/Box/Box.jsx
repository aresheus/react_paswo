import style from "./Box.module.css";
import IField from "../Input Field/IField";
import Board from "../Board/Board";

export default function Box() {
  return (
    <article className={style.box}>
      <h1>Paswo Geneus (Password Generator)</h1>

      <Board />

      <IField />
    </article>
  );
}
