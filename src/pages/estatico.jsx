import Layout from "../components/Layout";

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

function Estatico(props) {
    return (
        <Layout>
            <div>
                <h1>Conteudo estático</h1>
                {props.numero}
            </div>
        </Layout>
    )
}


export default Estatico;