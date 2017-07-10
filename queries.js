var promise = require('bluebird');

var options = {
    //initialization options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres@localhost:5432/pottyproject';
var db = pgp(connectionString);

//add query functions

module.exports = {
    getAllPotties: getAllPotties,
    getLastPotty: getLastPotty,
    //getLastNonPotty: getLastNonPotty,
    createPotty: createPotty
};

function getAllPotties(req, res, next) {
    db.any('select * from potties')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL potties'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getLastPotty(req, res,next) {
    db.one('SELECT * FROM POTTIES ORDER BY ENTRYTIME DESC LIMIT 1')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved latest potty'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createPotty(req, res, next) {
    db.none('INSERT INTO POTTIES(isPoop, entryTime)' +
        'values(${isPoop}, current_timestamp)', req.body)
    .then(function() {
        res.status(200)
            .json({
                status:'success',
                message:'Logged a potty'
            });
    })
        .catch(function (err) {
            return next(err);
        });
}