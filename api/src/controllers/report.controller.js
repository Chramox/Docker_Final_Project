"use strict";
const {conndb} = require("../config");

async function newReport(req, res) {
    try {
        let { name, email, password } = req.body;
        const query = `INSERT INTO Report (name, email, password) VALUES (?,?,?);`
        conndb.query(query,[email, name, password],function(err, _result){
            if (err) {
                console.error(err)
                res.status(500).json({message: "Can´t register the information"});
            } else {
                res.json({message: "Information registered"});
            }
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error API"});
    }
}

async function getAll(_req,res) {
    try {
        const query = `SELECT * FROM Report;`;
        conndb.query(query, function(err,result){
            if (err) {
                console.log(err);
                res.status(500).json({message: "Error consulting the information"});
            } else {
                res.send(result);
            }
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error API"});
    }
}

module.exports = {
    getAll, newReport
};