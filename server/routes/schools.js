const express = require('express');
const dataaccess = require('../dataaccess/index');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const allSchools = await dataaccess.listAllSchools();
        res.json(allSchools);
    } catch (error) {
        next(error);
    }
});

module.exports = router;