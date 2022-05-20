const redis = require("redis"); // npm i redis
const client = redis.createClient({
    host: '190.104.112.202',
    port: 6379,
    auth_pass: ""
});

// Si existe un error conectándose a Redis, mostrarlo en consola
client.on("error", (err) => {
    console.error(err);
    res.send(500);
});

async function newReport(req, res) {
    // Obtener la lista y el valor que agregaremos
    const data = req.body;
    const db = "report";
    // convertir el valor que enviaremos a string
    const json = JSON.stringify(data);

    // Utilizamos RPush para almacenar datos al FINAL de la lista
    // si necesitaramos agregarlo al inicio utilizaríamos LPush
    client.rpush(db, json, (err, result) => {
        // Si existió un error agregando a la lista
        // escribir el error y enviar 500 Internal Server Error
        if (err) {
            console.error(err);
            return res.status(500).json({message: "Error API"});
        }
        return res.send(result);
    });

}

async function getAll(_req,res) {
    const list = "report";
    const init = req.query.init || 0;
    // si no fue enviado, utilizar -1 (o sea, leer hasta el final)
    const last = req.query.final || -1;
    
    // utilizar lrange para leer los datos de la lista
    client.lrange(list, init, last, (err, result) => {
        // si existió un error (que la lista no exista o que no sea de tipo lista
        // mostrar el error y retornar 500 Internal Server Error
        if (err) {
            console.error(err);
            return  res.status(500).json({message: "Error API"});
        }
        return res.send(result);
    });
}

module.exports = {
    getAll, newReport
};