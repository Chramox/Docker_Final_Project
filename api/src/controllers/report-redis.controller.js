const redis = require("redis"); // npm i redis

async function newReport(req, res) {
    try {
        const data = req.body;
        const db = "report";
        const json = JSON.stringify(data);

        // Obtener la lista y el valor que agregaremos
        const client = redis.createClient({
            socket: {
                port: 6379,
                host: '35.222.160.79',
            }
        });
        client.connect();

        client.on("error", (err) => {
            console.error(err);
            res.status(500).json({ message: "Error connecting with Redis" });
        });
        client.on('connect', () => {
            console.log('connected');
        });
        client.on('end', () => {
            console.log('disconnected');
        });
        // Utilizamos RPush para almacenar datos al FINAL de la lista
        let err, result;
        err, result = await client.rPush(db, json);
        client.quit();
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Error API" });
        } else {
            console.log(result)
            res.json({ message: "Inserted" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error API" });
    }
}

async function getAll(_req, res) {
    try {
        const list = "report";
        const init = 0;
        // si no fue enviado, utilizar -1 (o sea, leer hasta el final)
        const last = -1;

        // Obtener la lista y el valor que agregaremos
        const client = redis.createClient({
            socket: {
                port: 6379,
                host: '35.222.160.79',
            }
        });
        client.connect();
        client.on("error", (err) => {
            console.error(err);
            res.status(500).json({ message: "Error connecting with Redis" });
        });
        client.on('connect', () => {
            console.log('connected');
        });
        client.on('end', () => {
            console.log('disconnected');
        });

        // utilizar lrange para leer los datos de la lista
        let err, result = await client.lRange(list, init, last);
        console.log(err,result);
        client.quit();
        // si existió un error (que la lista no exista o que no sea de tipo lista
        // mostrar el error y retornar 500 Internal Server Error
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Error API" });
        }
        const data = result.map( item => JSON.parse(item))
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error API" });
    }


}

module.exports = {
    getAll, newReport
};