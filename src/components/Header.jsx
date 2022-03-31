import style from "./Header.module.css";
import NavLink from "./NavLink";


function Header() {
    return (
        <header className={style.header}>
            <h1>Cabeçalho</h1>
            <NavLink destino={"/"} texto={"Voltar"} />
        </header>
    )
}

export default Header