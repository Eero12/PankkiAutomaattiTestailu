const express = require('express');
const router = express.Router();
const asiakas = require('../models/asiakas_model');

router.get('/', function(request, response) {
    asiakas.getAll(function(error, result) {
        if (error) {
            response.json(error);
        } else {
            response.json(result);
        }
    });
});

router.get('/:id', function(request, response) {
    asiakas.getById(request.params.id, function(error, result) {
        if (error) {
            response.json(error);
        } else {
            response.json(result[0]);
        }
    });
});

module.exports = router;