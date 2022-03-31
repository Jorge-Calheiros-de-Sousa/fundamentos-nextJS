import { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

function Integracao() {
    const [registro, setRegistro] = useState({});
    const [id, setId] = useState(1);

    const obterRegistro = async () => {
        await fetch(`http://localhost:3000/api/usuario/${id}`)
            .then(response => response.json())
            .then(dados => setRegistro(dados));
    }

    return (
        <Layout>
            <h1>Integração com API</h1>
            <div>
                <input name="id" type={"number"} value={id} onChange={(event) => { setId(event.target.value) }} /><Button label={"Obter cliente"} click={obterRegistro} />
                <ul>
                    <li>Id: {registro.id}</li>
                    <li>Nome: {registro.nome} </li>
                    <li>Email: {registro.email}</li>
                </ul>
            </div>
        </Layout>
    )
}

export default Integracao;