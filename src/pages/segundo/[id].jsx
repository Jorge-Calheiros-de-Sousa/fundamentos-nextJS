import { useRouter } from "next/router";

import Layout from "../../components/Layout";

function Segundo() {
    const router = useRouter();
    return (
        <Layout>
            <main>
                <h1>Navegação #2</h1>
                <span>Código: {router.query.id} </span>
            </main>
        </Layout>
    )
}

export default Segundo;