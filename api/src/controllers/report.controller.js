"use strict";
const {conndb} = require("../config");
const moment = require("moment");

async function newReport(req, res) {
    try {
        let { id, name, password } = req.body;
        const date = new Date();
        const query = `INSERT INTO Reporte (id, name, password) VALUES (?,?,?);`
        const a = conndb.query(query,[id, name, password],function(err, _result){
            if (err) {
                res.status(500).json("Can´t register the information");
            } else {
                res.json("Information registered");
            }
        });
    } catch (error) {
        res.status(500).json("Error API", error);
    }
}

async function getAll(_req,res) {
    try {
        const query = `SELECT * FROM Reporte;`;
        conndb.query(query, function(err,result){
            if (err) {
                console.log(err);
                res.status(500).json("Error consulting the information");
            } else {
                res.send(result);
            }
        });
    } catch (error) {
        console.log(error)
        res.status(500).json("Error API");
    }
}

module.exports = {
    getAll, newReport
};