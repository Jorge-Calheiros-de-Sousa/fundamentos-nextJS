export default function hendler(req, res) {
    const id = req.query.id;
    res.status(200).json({
        nome: "Jorge Calheiros de Sousa",
        email: "jorgecalheiros.s@gmail.com",
        id: id
    });
}