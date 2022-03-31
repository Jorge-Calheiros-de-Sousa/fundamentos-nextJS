import Link from "next/link";
import style from './NavLink.module.css';

function NavLink(props) {
    return (
        <div>
            <Link href={props.destino} passHref>
                <div className={style.navegador}>
                    {props.texto}
                </div>
            </Link >
        </div >
    )
}

export default NavLink;