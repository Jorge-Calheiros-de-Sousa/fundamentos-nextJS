export default function usuario(req, res) {
    if (req.method == "GET") {
        handleGet(req, res);
    } else {
        res.status(402).send();
    }
}

function handleGet(req, res) {
    res.status(200).json({
        name: "jorge",
        email: "jorgecalheiros.s@gmail.com",
        id: 1
    });
}