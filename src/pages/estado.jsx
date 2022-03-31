import Layout from "../components/Layout";
import Button from "../components/Button";
import { useState } from "react";

function Estado() {
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1);
    }

    return (
        <Layout>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                height: "100px",
                width: "100px"
            }}>
                <span>{numero}</span>
            </div>
            <Button label={"Incrementar"} click={incrementar} />
        </Layout>
    )
}

export default Estado;