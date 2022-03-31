import Layout from "../components/Layout";
import NavLink from "../components/NavLink";

function Inicio() {
    return (
        <Layout>
            <main>
                <nav>
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>
                        <NavLink destino={"/primeiro"} texto={"Primeiro"} />
                        <NavLink destino={"/segundo/123"} texto={"Segundo"} />
                        <NavLink destino={"/terceiro"} texto={"Terceiro"} />
                        <NavLink destino={"/quarto"} texto={"Quarto"} />
                        <NavLink destino={"/quinto"} texto={"Quinto"} />
                        <NavLink destino={"/estado"} texto={"Estado"} />
                        <NavLink destino={"/integracao"} texto={"Integração"} />
                        <NavLink destino={"/estatico"} texto={"Conteudo estatico"} />
                    </ul>
                </nav>
            </main>
        </Layout>
    )
}

export default Inicio;