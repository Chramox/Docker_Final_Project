"use strict";
const {conndb, id_server} = require("../config");
const moment = require("moment");

async function newReport(req, res) {
    try {
        let data = req.body;
        const date = new Date();
        const query = `INSERT INTO Reporte (carnet, nombre, proyecto, servidor, fecha, cuerpo) VALUES (?,?,?,?,?,?);`
        data.fecha = moment(date).format('YYYY-MM-DD');
        const a = conndb.query(query,[data.carnet, data.nombre, data.proyecto, id_server, data.fecha, data.cuerpo],function(err, _result){
            if (err) {
                res.status(401).json("No se ha podido registrar el reporte");
            } else {
                res.json("Reporte registrado");
            }
        });
    } catch (error) {
        res.status(404).json("Error API", error);
    }
}

async function getAll(_req,res) {
    try {
        const query = `SELECT * FROM Reporte;`;
        conndb.query(query, function(err,result){
            if(err){
                console.log(err);
                res.status(404).json("Empleados no encontrado.");
            }else{
                for (let index = 0; index < result.length; index++) {
                    result[index].fecha = moment(result[index].fecha).format('DD-MM-YYYY');
                }
                res.send(result);
            }
        });
    } catch (error) {
        console.log(error)
        res.status(404).json("Error API");
    }
}

module.exports = {
    getAll, newReport
};