import style from "./Button.module.css"

export default function (props) { <button className={style.button} onClick={props.click}>{props.label}</button> }