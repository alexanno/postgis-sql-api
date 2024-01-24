var db_username = '';
var db_password = '';
var db_host = '';
var db_port = '';
var db_name = '';

var pgp = require("pg-promise")();
var dbgeo = require("dbgeo");

var connectionString = "postgres://"+db_username+":"+db_password+"@"+db_host+":"+db_port+"/"+db_name+"?ssl=true";
var db = pgp(connectionString);

module.exports = async function (context, req) {
    const sql = (req.query.sql || (req.body && req.body.sql));

    const data = await db.query(sql);

    dbgeo.parse(data, {
        outputFormat: "geojson"
    }, function (err, result) {
        if(err) {
            console.log(err);
        } else {
            context.res = {
                status: 200,
                headers: {'Content-Type': 'application/json'},
                body: result
            };
        }
    });
}